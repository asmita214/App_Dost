import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

const HolographicCard = ({ children, className = '', ...props }) => {
  const cardRef = useRef(null);
  const { x, y } = useMousePosition();

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const angleX = (y - centerY) / 10;
    const angleY = (centerX - x) / 10;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-2xl glass-effect border border-white/10 group transition-all duration-500 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -8 }}
      {...props}
    >
      
      <div className="absolute inset-0 bg-gradient-to-br from-primary-cyan/5 via-primary-purple/5 to-primary-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      
      <div className="absolute inset-0 rounded-2xl bg-cyber-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px] -z-10">
        <div className="w-full h-full bg-dark-1 rounded-2xl" />
      </div>
      
      
      <div className="relative z-20 p-8">
        {children}
      </div>

      
      <div className="absolute inset-0 rounded-2xl bg-cyber-gradient opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10" />
    </motion.div>
  );
};

export default HolographicCard;