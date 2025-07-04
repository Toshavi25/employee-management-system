import React, { useEffect, useState, useRef } from 'react';
import { getEmployeeById } from '../services/EmployeeService';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EmployeeDetailsComponent = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);
    const navigate = useNavigate();
    const toastShown = useRef(false);

    useEffect(() => {
        getEmployeeById(id)
            .then(response => {
                setEmployee(response.data);
                if (!toastShown.current) {
                    toast.info('Viewing employee details.');
                    toastShown.current = true;
                }
            })
            .catch(error => {
                toast.error('Error fetching employee details.');
                navigate('/employees');
            });
    }, [id, navigate]);

    if (!employee) return <div className="text-center mt-5">Loading...</div>;

    return (
        <div className="container mt-5">
            <div className="card col-md-6 offset-md-3 shadow p-4">
                <h2 className="text-center mb-4">Employee Details</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>First Name:</strong> {employee.firstName}</li>
                    <li className="list-group-item"><strong>Last Name:</strong> {employee.lastName}</li>
                    <li className="list-group-item"><strong>Email:</strong> {employee.email}</li>
                    <li className="list-group-item"><strong>Mobile:</strong> {employee.mobile}</li>
                    <li className="list-group-item"><strong>Position:</strong> {employee.position}</li>
                    <li className="list-group-item"><strong>Salary:</strong> {employee.salary}</li>
                </ul>
                <button className="btn btn-secondary mt-3 w-100" onClick={() => navigate('/employees')}>Back to List</button>
            </div>
        </div>
    );
};

export default EmployeeDetailsComponent;
