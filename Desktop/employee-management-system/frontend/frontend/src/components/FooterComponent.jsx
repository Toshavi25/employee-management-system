import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
      <div className="container">
        <small>&copy; {new Date().getFullYear()} Employee Management System. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default FooterComponent;
