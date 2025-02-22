import { motion } from "framer-motion";
import React from "react";

const Scard = ({ title, description, image }) => {
  return (
    <motion.div
      className="max-w-md min-h-[400px] rounded overflow-hidden shadow-lg bg-white transform transition-all"
      initial={{ opacity: 0, scale: 0.9 }} // Start with small scale and transparent
      animate={{ opacity: 1, scale: 1 }} // Animate to full size and opacity
      transition={{ duration: 0.5 }} // Smooth transition
      whileHover={{ scale: 1.05 }} // Hover effect: scale up slightly
      whileTap={{ scale: 0.95 }} // Tap effect: scale down slightly for interaction feedback
    >
      {/* Image section */}
      <img className="w-full h-[250px] object-cover" src={image} alt={title} /> {/* Set a fixed height for the image */}
      
      {/* Content section */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </motion.div>
  );
};

export default Scard;
