import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import EmployeeDetailsComponent from './EmployeeDetailsComponent';
import * as EmployeeService from '../services/EmployeeService';
import { toast } from 'react-toastify';

jest.mock('../services/EmployeeService');
jest.mock('react-toastify', () => ({ toast: { info: jest.fn(), error: jest.fn() } }));

const mockEmployee = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  mobile: '1234567890',
  position: 'Developer',
  salary: 50000,
};

describe('EmployeeDetailsComponent', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('shows loading initially', () => {
    EmployeeService.getEmployeeById.mockReturnValue(new Promise(() => {}));
    render(
      <MemoryRouter initialEntries={["/view-employee/1"]}>
        <Routes>
          <Route path="/view-employee/:id" element={<EmployeeDetailsComponent />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('displays employee details on success', async () => {
    EmployeeService.getEmployeeById.mockResolvedValue({ data: mockEmployee });
    render(
      <MemoryRouter initialEntries={["/view-employee/1"]}>
        <Routes>
          <Route path="/view-employee/:id" element={<EmployeeDetailsComponent />} />
        </Routes>
      </MemoryRouter>
    );
    await waitFor(() => expect(screen.getByText(/Employee Details/i)).toBeInTheDocument());
    expect(screen.getByText(/John/)).toBeInTheDocument();
    expect(screen.getByText(/Doe/)).toBeInTheDocument();
    expect(screen.getByText(/john.doe@example.com/)).toBeInTheDocument();
    expect(screen.getByText(/1234567890/)).toBeInTheDocument();
    expect(screen.getByText(/Developer/)).toBeInTheDocument();
    expect(screen.getByText(/50000/)).toBeInTheDocument();
    expect(toast.info).toHaveBeenCalledWith('Viewing employee details.');
  });

  it('shows error toast and navigates on fetch failure', async () => {
    EmployeeService.getEmployeeById.mockRejectedValue(new Error('Fetch error'));
    render(
      <MemoryRouter initialEntries={["/view-employee/1"]}>
        <Routes>
          <Route path="/view-employee/:id" element={<EmployeeDetailsComponent />} />
          <Route path="/employees" element={<div>Employee List</div>} />
        </Routes>
      </MemoryRouter>
    );
    await waitFor(() => expect(toast.error).toHaveBeenCalledWith('Error fetching employee details.'));
    await waitFor(() => expect(screen.getByText(/Employee List/)).toBeInTheDocument());
  });
});
