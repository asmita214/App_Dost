import React from 'react';
import { motion } from 'framer-motion';
import { useViewportDetection } from '../../../hooks/useViewportDetection';
import AnimatedText from '../../ui/AnimatedText';
import HolographicCard from '../../ui/HolographicCard';
import { Search, Palette, Code, Rocket } from 'lucide-react';

const Process = () => {
  const [ref, isInViewport] = useViewportDetection();

  const processSteps = [
    {
      number: '1',
      icon: <Search className="w-6 h-6" />,
      title: 'Discovery & Planning',
      description: 'We deep dive into your requirements, understand your business goals, analyze competitors, and create a comprehensive project roadmap with clear milestones.'
    },
    {
      number: '2',
      icon: <Palette className="w-6 h-6" />,
      title: 'Design & Prototype',
      description: 'Our design team creates intuitive wireframes, stunning UI mockups, and interactive prototypes that bring your vision to life before development begins.'
    },
    {
      number: '3',
      icon: <Code className="w-6 h-6" />,
      title: 'Development & Testing',
      description: 'Expert developers write clean, scalable code while our QA team performs rigorous testing to ensure flawless functionality across all devices and platforms.'
    },
    {
      number: '4',
      icon: <Rocket className="w-6 h-6" />,
      title: 'Deployment & Support',
      description: 'We handle the complete deployment process and provide ongoing maintenance, updates, and 24/7 technical support to keep your solution running smoothly.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="process" className="py-20 bg-dark-2 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-cyan/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-purple/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInViewport ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedText
            text="Our Development Process"
            type="words"
            className="text-4xl md:text-6xl font-black mb-6"
          />
          <AnimatedText
            text="A proven methodology that ensures quality, efficiency, and client satisfaction"
            type="words"
            delay={0.3}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          />
        </motion.div>

       
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInViewport ? "visible" : "hidden"}
          className="relative"
        >
        
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-cyan via-primary-purple to-primary-pink transform -translate-x-1/2 z-0 hidden md:block">
            <motion.div 
              className="w-full h-full bg-cyber-gradient"
              initial={{ scaleY: 0 }}
              animate={isInViewport ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            />
          </div>

          {/* Process Steps */}
          <div className="space-y-12 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col md:flex-row items-start gap-8 group"
              >
                {/* Step Number & Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-cyber-gradient rounded-full text-white font-black text-xl relative z-10 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                  <div className="absolute inset-0 rounded-full bg-cyber-gradient opacity-0 group-hover:opacity-100 animate-ping"></div>
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <HolographicCard className="hover:transform hover:scale-105 transition-all duration-500">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-dark-3 rounded-xl flex items-center justify-center text-primary-cyan">
                          {step.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-cyber-gradient group-hover:bg-clip-text transition-all duration-300">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {step.description}
                    </p>
                    
                
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-cyber-gradient group-hover:w-full transition-all duration-500"></div>
                  </HolographicCard>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;