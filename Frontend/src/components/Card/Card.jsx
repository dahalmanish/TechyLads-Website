import { motion } from "framer-motion"; // Import motion from framer-motion
import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <motion.div 
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white font-Outfit transform transition-all"
      initial={{ opacity: 0, scale: 0.9 }} // Start with small scale and transparent
      animate={{ opacity: 1, scale: 1 }} // Animate to full size and opacity
      transition={{ duration: 0.5 }} // Smooth transition
      whileHover={{ scale: 0.9 }} // Hover effect: scale up slightly
      whileTap={{ scale: 0.95 }} // Tap effect: scale down slightly for interaction feedback
    >
      <img className="w-full h-3/5" src={image} alt={title} />
      <div className="px-4 py-2">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;
