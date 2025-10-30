import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleMouseEnter = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.onclick) {
        setIsPointer(true);
      }
    };

    const handleMouseLeave = () => {
      setIsPointer(false);
    };

    const handleMouseDown = () => setIsHidden(true);
    const handleMouseUp = () => setIsHidden(false);

    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null;
  }

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className={`fixed top-0 left-0 w-4 h-4 bg-primary-cyan rounded-full pointer-events-none z-50 mix-blend-difference transition-opacity duration-200 ${
          isHidden ? 'opacity-0' : 'opacity-100'
        }`}
        animate={{
          x: x - 8,
          y: y - 8,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Cursor Follower */}
      <motion.div
        className={`fixed top-0 left-0 w-8 h-8 border-2 border-primary-cyan rounded-full pointer-events-none z-50 transition-opacity duration-200 ${
          isHidden ? 'opacity-0' : 'opacity-100'
        }`}
        animate={{
          x: x - 16,
          y: y - 16,
          scale: isPointer ? 1.8 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
          mass: 0.8,
        }}
      />

  
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-primary-purple rounded-full pointer-events-none z-50 opacity-30"
        animate={{
          x: x - 24,
          y: y - 24,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 25,
          mass: 1,
        }}
      />
    </>
  );
};

export default CustomCursor;
