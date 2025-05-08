import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} SoftShell. All rights reserved.
    </footer>
  );
};

export default Footer;
