import { motion } from "framer-motion";
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

const Heading = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img
        src="background.jpg" // Ensure the correct path
        alt="Background"
        className="w-full h-fit object-cover bg-opacity-70 z-0"
      />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-10 pt-20 space-y-6 md:space-y-7 bg-black bg-opacity-50 z-10 font-Outfit">
        <motion.div 
          className="space-y-5 md:space-y-7"
          initial={{ opacity: 0, y: 20 }} // Smooth fade-in from below
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-white text-3xl md:text-5xl font-bold px-4 md:px-0">
            Delivering IT Solutions & Building Enduring Relationships
          </h2>
          <div className="text-white flex flex-col">
            <span className="text-lg md:text-2xl font-semibold">
              We Make it Happen, Join Us Today
            </span>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div 
          className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <Link to="/contact">
            <Button name="Connect with us" style="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
          </Link>
          <Link to="/about">
            <Button name="Explore more" style="bg-transparent hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border border-white" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Heading;
