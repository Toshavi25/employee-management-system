package com.employee.backend.controller;

import com.employee.backend.model.Employee;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.employee.backend.repository.EmployeeRepository;
import com.employee.backend.dto.EmployeeDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import jakarta.validation.Valid;
@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "*") // allows React frontend to access this backend
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    // Get all employees
    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getEmployeeById(@PathVariable String id) {
        return employeeRepository.findById(id)
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).body("Employee not found"));
    }



    // Create new employee
    @PostMapping
    public ResponseEntity<?> createEmployee(@RequestBody @Valid EmployeeDTO dto) {
    	 if (employeeRepository.findByEmail(dto.getEmail()).isPresent()) {
    	        return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exists");
    	    }

    	    if (employeeRepository.findByMobile(dto.getMobile()).isPresent()) {
    	        return ResponseEntity.status(HttpStatus.CONFLICT).body("Mobile number already exists");
    	    }
    	Employee employee = new Employee();
        employee.setFirstName(dto.getFirstName());
        employee.setLastName(dto.getLastName());
        employee.setEmail(dto.getEmail());
        employee.setMobile(dto.getMobile());
        employee.setPosition(dto.getPosition());
        employee.setSalary(dto.getSalary());

        return ResponseEntity.status(HttpStatus.CREATED).body(employeeRepository.save(employee));
    }

    // Update employee
    @PutMapping("/{id}")
    public ResponseEntity<?> updateEmployee(@PathVariable String id, @RequestBody @Valid EmployeeDTO dto) {
        Optional<Employee> existing = employeeRepository.findById(id);
        if (existing.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Employee not found");
        }

        // Check for duplicate email/mobile (exclude current employee)
        Optional<Employee> byEmail = employeeRepository.findByEmail(dto.getEmail());
        if (byEmail.isPresent() && !byEmail.get().getId().equals(id)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exists");
        }

        Optional<Employee> byMobile = employeeRepository.findByMobile(dto.getMobile());
        if (byMobile.isPresent() && !byMobile.get().getId().equals(id)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Mobile number already exists");
        }

        Employee employee = existing.get();
        employee.setFirstName(dto.getFirstName());
        employee.setLastName(dto.getLastName());
        employee.setEmail(dto.getEmail());
        employee.setMobile(dto.getMobile());
        employee.setPosition(dto.getPosition());
        employee.setSalary(dto.getSalary());

        return ResponseEntity.ok(employeeRepository.save(employee));
    }


    // Delete employee
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable String id) {
        if (!employeeRepository.existsById(id)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Employee not found");
        }
        employeeRepository.deleteById(id);
        return ResponseEntity.ok("Employee deleted successfully");
    }
    
    @GetMapping("/")
    public ResponseEntity<String> home() {
        return ResponseEntity.ok("Backend is running");
    }


}
