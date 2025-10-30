import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

const MagneticButton = ({ children, className = '', ...props }) => {
  const ref = useRef(null);
  const { x, y } = useMousePosition();

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = x - centerX;
    const distanceY = y - centerY;
    
    const strength = 0.2;
    
    ref.current.style.transform = `translate(${distanceX * strength}px, ${distanceY * strength}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = `translate(0px, 0px)`;
    }
  };

  return (
    <motion.button
      ref={ref}
      className={`relative overflow-hidden bg-cyber-gradient text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-cyan via-primary-purple to-primary-pink opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  );
};

export default MagneticButton;