import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <header className="sticky-top bg-primary shadow">
      <nav className="navbar navbar-expand-lg navbar-dark container">
        <Link to="/" className="navbar-brand fw-bold">
          Employee Management System
        </Link>
      </nav>
    </header>
  );
};

export default HeaderComponent;
