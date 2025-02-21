import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import logo from "../assets/Logo.png";
import logo1 from "../assets/Logo1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='w-full px-6 py-4 text-black bg-white flex justify-between items-center top-0 left-0 right-0 z-50 font-Outfit'>
      <div className='flex items-center'>
        <img src={logo1} alt="Logo" width={120} height={80} />
      </div>
      
      {/* Desktop Menu */}
      <ul className='hidden md:flex gap-6 text-lg'>
        <li><Link to="/home" className='hover:text-blue-500'>Home</Link></li>
        <li><Link to="/about" className='hover:text-blue-500'>About</Link></li>
        <li><Link to="/products" className='hover:text-blue-500'>Product</Link></li>
        <li><Link to="/services" className='hover:text-blue-500'>Services</Link></li>
        <li><Link to="/careers" className='hover:text-blue-500'>Careers</Link></li>
      </ul>
      
      <div className='hidden md:block'>
        <Link to="/contact">
          <Button name="Get in touch" style="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-2xl" />
        </Link>
      </div>
      
      {/* Mobile Menu Button */}
      <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='absolute top-16 left-0 w-full bg-blue-950 text-white flex flex-col items-center space-y-4 py-4 shadow-lg md:hidden'>
          <Link to="/home" className='hover:text-blue-500' onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className='hover:text-blue-500' onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/services" className='hover:text-blue-500' onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/careers" className='hover:text-blue-500' onClick={() => setIsOpen(false)}>Careers</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <Button name="Get in touch" style="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-2xl" />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
