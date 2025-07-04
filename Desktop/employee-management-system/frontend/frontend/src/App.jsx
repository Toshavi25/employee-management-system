import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import EmployeeComponent from './components/EmployeeComponent';
import EmployeeDetailsComponent from './components/EmployeeDetailsComponent';
import ErrorBoundary from './components/ErrorBoundary';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

<ToastContainer position="top-right" autoClose={3000} hideProgressBar />

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <ErrorBoundary>
          <main className="container my-4">
            <Routes>
              {/* //http://localhost:3000/ */}
              <Route path="/" element={<ListEmployeeComponent />} />
              {/* //http://localhost:3000/employees */}
              <Route path="/employees" element={<ListEmployeeComponent />} />
              {/* //http://localhost:3000/add-employee */}
              <Route path="/add-employee" element={<EmployeeComponent />} />
              <Route path="/update-employee/:id" element={<EmployeeComponent />} />
              <Route path="/view-employee/:id" element={<EmployeeDetailsComponent />} />
              {/* Optional: Handle 404 - not found route */}
              {/* <Route path="*" element={<NotFoundComponent />} /> */}
            </Routes>
          </main>
        </ErrorBoundary>
         <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
