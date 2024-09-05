import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-custom-blue-dark text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">© {new Date().getFullYear()} Your Company. Abdallah Moharam.</p>
      </div>
    </footer>
  );
};

export default Footer;
