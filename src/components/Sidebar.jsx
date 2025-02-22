// src/components/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-1/4 p-6 bg-white border-r">
      <h2 className="text-lg font-bold">Admin Panel</h2>
      <nav className="mt-6 space-y-4">
        <Link to="/dashboard" className="block text-gray-600 hover:text-black">Dashboard</Link>
        <Link to="/product" className="block text-gray-600 hover:text-black">Product</Link>
        <Link to="/service" className="block text-gray-600 hover:text-black">Service</Link>
        <Link to="/carry" className="block text-gray-600 hover:text-black">Carrier</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
