import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">SoftShell</h1>
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><a href="#how" className="hover:text-indigo-500">How It Works</a></li>
            <li><a href="#why" className="hover:text-indigo-500">Why Choose Us</a></li>
          <li><a href="#testimonials" className="hover:text-indigo-500">Testimonials</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
