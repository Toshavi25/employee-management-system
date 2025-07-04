import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import ListEmployeeComponent from '../ListEmployeeComponent';
import { BrowserRouter } from 'react-router-dom';
import * as EmployeeService from '../../services/EmployeeService';

// Mock the employee service
jest.mock('../../services/EmployeeService');

const mockEmployees = [
  {
    id: '1',
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice@example.com',
    mobile: '1234567890',
    position: 'Developer',
    salary: 50000,
  },
  {
    id: '2',
    firstName: 'Bob',
    lastName: 'Smith',
    email: 'bob@example.com',
    mobile: '9876543210',
    position: 'Manager',
    salary: 80000,
  }
];

describe('ListEmployeeComponent', () => {
  beforeEach(() => {
    EmployeeService.listEmployees.mockResolvedValue({ data: mockEmployees });
  });

  test('renders employee list correctly', async () => {
    render(
      <BrowserRouter>
        <ListEmployeeComponent />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/Alice Johnson/i)).toBeInTheDocument();
      expect(screen.getByText(/Bob Smith/i)).toBeInTheDocument();
    });
  });

  test('calls delete handler when Delete is clicked', async () => {
    const deleteMock = jest.fn().mockResolvedValue({});
    EmployeeService.deleteEmployee = deleteMock;

    // Spy on window.confirm
    const confirmSpy = jest.spyOn(window, 'confirm').mockReturnValue(true);

    render(
      <BrowserRouter>
        <ListEmployeeComponent />
      </BrowserRouter>
    );

    await waitFor(() => screen.getByText(/Alice Johnson/i));
    fireEvent.click(screen.getAllByText('Delete')[0]);

    await waitFor(() => {
      expect(deleteMock).toHaveBeenCalledWith('1');
    });

    confirmSpy.mockRestore();
  });

  test('navigates when Add New Employee is clicked', async () => {
    render(
      <BrowserRouter>
        <ListEmployeeComponent />
      </BrowserRouter>
    );

    const button = screen.getByText(/Add New Employee/i);
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    // Ideally you should mock `useNavigate` and assert it was called
  });
});
