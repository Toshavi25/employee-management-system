import React, { useEffect, useState } from 'react'
import { listEmployees, deleteEmployee } from '../services/EmployeeService'
import { useNavigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([])
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        getAllEmployees();
    }, [location.pathname])

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => { 
            console.error("There was an error fetching the employees!", error);
        });
    }

    function addNewEmployee() {
        navigate('/add-employee');
    }

    function handleUpdateEmployee(id) {
        toast.info('Editing employee...');
        navigate(`/update-employee/${id}`);
    }

    function handleDeleteEmployee(id) {
        if (window.confirm("Are you sure you want to delete this employee?")) {
            deleteEmployee(id).then((response) => {
               toast.success('Employee deleted successfully!');
               getAllEmployees();
            }).catch(error => {
                toast.error('Error deleting employee.');
                console.error("There was an error deleting the employee!", error);
            });
        }
    }

    function viewEmployee(id) {
        toast.info('Viewing employee details.');
        navigate(`/view-employee/${id}`);
    }

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center">
                <h2 className="text-center my-3">Employee List</h2>
                <button className="btn btn-primary" onClick={addNewEmployee}>
                    <i className="fas fa-plus-circle"></i> Add New Employee
                </button>
            </div>
            <div className="table-responsive mt-3">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Position</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName} {employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{employee.mobile}</td>
                                <td>{employee.position}</td>
                                <td>{Number(employee.salary).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</td>
                            <td>
                                    <div className="d-flex gap-2">
                                        <button className="btn btn-info btn-sm" onClick={() => viewEmployee(employee.id)}>
                                        <i className="fas fa-eye"></i> View
                                        </button>
                                        <button className="btn btn-success btn-sm" onClick={() => handleUpdateEmployee(employee.id)}>
                                        <i className="fas fa-edit"></i> Edit
                                        </button>
                                        <button className="btn btn-danger btn-sm" onClick={() => handleDeleteEmployee(employee.id)}>
                                        <i className="fas fa-trash"></i> Delete
                                        </button>
                                    </div>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListEmployeeComponent
