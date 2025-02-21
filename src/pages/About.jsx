import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import History from '../components/section/history';
import Question from '../components/section/Question';

const AboutUs = () => {
  return (
    <div className='px-6 py-4 font-Outfit'>
      <div className='w-full space-y-2'>
        <div>
          <div className='sm:flex items-center max-w-screen-xl mx-auto'>
            <motion.div
              className='sm:w-1/2 px-8'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className='image object-center text-center'>
                <motion.img
                  src='https://i.imgur.com/WbQnbas.png'
                  alt='About Us'
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </motion.div>
            <motion.div
              className='sm:w-1/2 p-5'
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className='text'>
                <span className='text-gray-500 border-b-2 border-indigo-600 uppercase'>
                  TechyLads
                </span>
                <h2 className='my-4 font-bold text-3xl sm:text-4xl'>
                  About <span className='text-indigo-600'>Our Company</span>
                </h2>
                <p className='text-gray-700'>
                  At Techy Lads, we are passionate about delivering innovative, web & software development solutions, creating user-friendly mobile apps, crafting strategic digital marketing plans, and other IT solutions. Our expertise in web development goes beyond just building websites; we focus on creating functional, efficient solutions that elevate productivity and performance for your business.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <History />
        <Question />
      </motion.div>
    </div>
  );
};

export default AboutUs;
