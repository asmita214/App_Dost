import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useViewportDetection } from '../../../hooks/useViewportDetection';

const StatsCounter = () => {
  const [ref, isInViewport] = useViewportDetection();

  const stats = [
    { number: 100, suffix: '%', label: 'Client Satisfaction' },
    { number: 15, suffix: '+', label: 'Projects Delivered' },
    { number: 24, suffix: '/7', label: 'Support Available' },
    { number: 10, suffix: '+', label: 'Web Projects' },
    { number: 4, suffix: '+', label: 'Android Apps' },
    { number: 1, suffix: '', label: 'CRM Project' },
  ];

  return (
    <motion.div 
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
      initial={{ opacity: 0, y: 50 }}
      animate={isInViewport ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center glass-effect rounded-2xl p-6 backdrop-blur-lg border border-white/10 hover:border-primary-cyan/30 transition-all duration-300"
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <div className="text-3xl md:text-4xl font-bold text-primary-cyan mb-2">
            {isInViewport && (
              <CountUp
                end={stat.number}
                suffix={stat.suffix}
                duration={2}
                delay={index * 0.2}
              />
            )}
          </div>
          <div className="text-sm md:text-base text-gray-300 font-medium">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsCounter;