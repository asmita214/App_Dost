import React from 'react';
import { motion } from 'framer-motion';
import { useViewportDetection } from '../../hooks/useViewportDetection';

const AnimatedText = ({ 
  text, 
  type = 'paragraph', 
  delay = 0, 
  className = '',
  ...props 
}) => {
  const [ref, isInViewport] = useViewportDetection();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: 0.03
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const words = text.split(' ');

  if (type === 'typewriter') {
    return (
      <motion.div
        ref={ref}
        className={`inline-block ${className}`}
        initial={{ width: 0 }}
        animate={isInViewport ? { width: '100%' } : { width: 0 }}
        transition={{ duration: 2, ease: 'easeInOut', delay }}
        style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
        {...props}
      >
        {text}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInViewport ? "visible" : "hidden"}
      className={`flex flex-wrap ${className}`}
      {...props}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;