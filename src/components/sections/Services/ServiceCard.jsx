import React from 'react';
import { motion } from 'framer-motion';
import HolographicCard from '../../ui/HolographicCard';

const ServiceCard = ({ service, index }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div variants={cardVariants}>
      <HolographicCard className="h-full group cursor-pointer">
        {/* Icon */}
        <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>
        
      
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-cyber-gradient group-hover:bg-clip-text transition-all duration-300">
          {service.title}
        </h3>
        
      
        <p className="text-gray-300 mb-6 leading-relaxed">
          {service.description}
        </p>
        
     
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              <div className="w-2 h-2 bg-cyber-gradient rounded-full mr-3 group-hover:scale-150 transition-transform duration-300" />
              {feature}
            </li>
          ))}
        </ul>
        
       
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
          <div className="w-8 h-8 bg-cyber-gradient rounded-full flex items-center justify-center">
            <span className="text-dark-1 font-bold">→</span>
          </div>
        </div>
      </HolographicCard>
    </motion.div>
  );
};

export default ServiceCard;