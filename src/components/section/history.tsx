import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import Button from '../Button';

const History = () => {
  return (
    <div className='flex p-4 space-x-2 font-Outfit'>
      <motion.div
        className='bg-gray-100 p-8 w-1/2 space-y-6'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className='text-blue-600 text-2xl'>Sustainability</p>
        <h2 className='text-4xl font-bold'>Our History</h2>
        <p>
          Techy Lads, founded in 2020 by Kritish Dhungel, aims to empower businesses with innovative digital solutions. Over the years, we've partnered with startups and established companies, helping them grow through services like web development, digital marketing, cybersecurity,
          IoT, data visualization and other IT solutions. We’re passionate about transforming cutting-edge technology into practical tools for our clients’ success. At Techy Lads, we don’t just build software; we create pathways for progress, ensuring our clients thrive in the digital age. Join us in shaping 
          the future of technology!
        </p>
        <div className='w-36'>
          <Button
            name="Contact Us"
            style="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-2xl"
          />
        </div>
      </motion.div>
      
      <motion.div
        className='bg-blue-600 p-4 text-white space-y-6 w-1/2'
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className='text-3xl'>Why should you choose Techy Lads?</h3>
        <p>
          We build solutions that simplify your work, amplify your success, and earn your trust. Confidence in every click, reliability in every result.
        </p>
        
        <ul className='space-y-2 list-disc p-4'>
          <li>Quality Deliverance</li>
          <li>Project On Time</li>
          <li>Excellent Support</li>
          <li>Latest Designs</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default History;
