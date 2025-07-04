import React, { useState, useEffect } from 'react';
import { createEmployee, updateEmployee, getEmployeeById } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setPhone] = useState('');
    const [position, setPosition] = useState('');
    const [salary, setSalary] = useState('');
    const [errors, setErrors] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            getEmployeeById(id)
                .then(response => {
                    const employee = response.data;
                    setFirstName(employee.firstName);
                    setLastName(employee.lastName);
                    setEmail(employee.email);
                    setPhone(employee.mobile);
                    setPosition(employee.position);
                    setSalary(employee.salary);
                })
                .catch(error => {
                    console.error("Error fetching employee:", error);
                });
        }
    }, [id]);

    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        if (!firstName.trim()) { newErrors.firstName = "First Name is required"; isValid = false; }
        if (!lastName.trim()) { newErrors.lastName = "Last Name is required"; isValid = false; }
        if (!email.trim()) { newErrors.email = "Email is required"; isValid = false; }
        if (!mobile.trim()) { newErrors.mobile = "Mobile is required"; isValid = false; }
        if (!position.trim()) { newErrors.position = "Position is required"; isValid = false; }
        if (!salary.toString().trim()) { newErrors.salary = "Salary is required"; isValid = false; }

        setErrors(newErrors);
        return isValid;
    };

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const employee = { firstName, lastName, email, mobile, position, salary };

        if (id) {
            updateEmployee(id, employee)
                .then(() => navigate('/employees'))
                .catch(err => console.error("Error saving employee:", err));
        } else {
            createEmployee(employee)
                .then(response => {
                    toast.success('Employee created successfully!');
                    navigate('/employees');
                })
                .catch(error => {
                    toast.error('Error creating employee.');
                    console.error("There was an error creating the employee!", error);
                });
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='card col-md-8 offset-md-2 shadow p-4 mt-5'>
                    <h2 className='text-center mb-4'>{id ? "Update Employee" : "Add Employee"}</h2>
                    <form>
                        <div className='row'>
                            <div className='col-md-6 mb-3'>
                                <label className='form-label'>First Name</label>
                                <input
                                    type='text'
                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder='Enter First Name'
                                />
                                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                            </div>
                            <div className='col-md-6 mb-3'>
                                <label className='form-label'>Last Name</label>
                                <input
                                    type='text'
                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder='Enter Last Name'
                                />
                                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                            </div>
                            <div className='col-md-6 mb-3'>
                                <label className='form-label'>Email</label>
                                <input
                                    type='email'
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Enter Email'
                                />
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                            </div>
                            <div className='col-md-6 mb-3'>
                                <label className='form-label'>Mobile</label>
                                <input
                                    type='text'
                                    className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                                    value={mobile}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder='Enter Mobile Number'
                                />
                                {errors.mobile && <div className='invalid-feedback'>{errors.mobile}</div>}
                            </div>
                            <div className='col-md-6 mb-3'>
                                <label className='form-label'>Position</label>
                                <input
                                    type='text'
                                    className={`form-control ${errors.position ? 'is-invalid' : ''}`}
                                    value={position}
                                    onChange={(e) => setPosition(e.target.value)}
                                    placeholder='Enter Position'
                                />
                                {errors.position && <div className='invalid-feedback'>{errors.position}</div>}
                            </div>
                            <div className='col-md-6 mb-3'>
                                <label className='form-label'>Salary</label>
                                <input
                                    type='number'
                                    className={`form-control ${errors.salary ? 'is-invalid' : ''}`}
                                    value={salary}
                                    onChange={(e) => setSalary(e.target.value)}
                                    placeholder='Enter Salary'
                                />
                                {errors.salary && <div className='invalid-feedback'>{errors.salary}</div>}
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success w-100 mt-3" onClick={saveOrUpdateEmployee}>
                            {id ? "Update" : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmployeeComponent;
