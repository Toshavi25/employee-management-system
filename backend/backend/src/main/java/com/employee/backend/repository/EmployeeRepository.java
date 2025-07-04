package com.employee.backend.repository;

import com.employee.backend.model.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface EmployeeRepository extends MongoRepository<Employee, String> {
	 Optional<Employee> findByMobile(String mobile);
	 Optional<Employee> findByEmail(String email);
}