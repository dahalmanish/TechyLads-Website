import React from 'react';
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between bg-blue-950 text-white p-8 md:p-16 space-y-6 md:space-y-0'>
        <div className='w-full md:w-auto'>
          <h3 className='text-2xl font-bold'>Projects</h3>
          <ul className='space-y-2'>
            <li><Link to="https://networkhats.com.np/">NetworkHats</Link></li>
            <li><Link to="https://teamvertex.com/">Team Vertex</Link></li>
            <li><Link to="https://www.foursymmetrons.com/">Four Symmetrons</Link></li>
            <li><Link to="https://actnepal.com/">Act Nepal</Link></li>
          </ul>
        </div>
        <div className='w-full md:w-auto'>
          <h3 className='text-2xl font-bold'>Techy Lads</h3>
          <ul className='space-y-2'>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/services">Services</Link></li>
          </ul>
        </div>
        <div className='w-full md:w-auto'>
          <h3 className='text-2xl font-bold'>SUPPORT</h3>
          <ul className='space-y-2'>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-between bg-blue-950 text-white px-6 md:px-10 py-4 space-y-4 md:space-y-0'>
        <span className='text-center md:text-left'>© Techy Lads. All rights reserved.</span>
        <Link to="#" className='text-center'>Sitemap</Link>
        <div className='flex space-x-4 justify-center md:justify-end'>
          <FaFacebook className='text-2xl' />
          <FaLinkedin className='text-2xl' />
           
          <FaWhatsapp className='text-2xl' />
        </div>
      </div>
    </>
  )
}

export default Footer
