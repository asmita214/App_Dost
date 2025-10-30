import React from 'react';
import { motion } from 'framer-motion';
import { useViewportDetection } from '../../../hooks/useViewportDetection';
import AnimatedText from '../../ui/AnimatedText';
import HolographicCard from '../../ui/HolographicCard';
import { Users, Zap, Target } from 'lucide-react';

const About = () => {
  const [ref, isInViewport] = useViewportDetection();

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'User-Centric Design',
      description: 'Intuitive UI/UX that guarantees user satisfaction and engagement'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Cutting-Edge Technology',
      description: 'Latest frameworks and tools for scalable, robust solutions'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Client-Focused Approach',
      description: 'Your success is our priority, every step of the way'
    }
  ];

  const stats = [
    { number: 100, suffix: '%', label: 'Client Satisfaction' },
    { number: 15, suffix: '+', label: 'Projects Delivered' },
    { number: 24, suffix: '/7', label: 'Support Available' },
    { number: 10, suffix: '+', label: 'Web Projects' },
    { number: 4, suffix: '+', label: 'Android Apps' },
    { number: 1, suffix: '', label: 'CRM Project' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-dark-1 relative overflow-hidden">
      
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-primary-cyan/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-primary-purple/5 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInViewport ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          
          <motion.div variants={itemVariants} className="space-y-8">
            
            <div>
              <AnimatedText
                text="ABOUT APPDOST"
                type="words"
                className="text-primary-cyan font-bold text-lg mb-4 tracking-wider"
              />
              <AnimatedText
                text="Your Trusted Partner for Complete Digital Transformation"
                type="words"
                delay={0.2}
                className="text-4xl md:text-5xl font-black leading-tight mb-6"
              />
              <AnimatedText
                text="AppDost is your partner for complete digital transformation. Founded in 2025, we are a full-service IT solutions provider specializing in turning innovative ideas into powerful, market-ready products. Our expertise spans the entire development lifecycle, from intuitive UI/UX design to robust software development."
                type="words"
                delay={0.4}
                className="text-xl text-gray-300 leading-relaxed mb-8"
              />
            </div>

            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4 group cursor-pointer"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-cyber-gradient rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-cyber-gradient group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

           
            <motion.div variants={itemVariants}>
              <button className="bg-cyber-gradient text-white font-bold py-4 px-8 rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl">
                Discover Our Services
              </button>
            </motion.div>
          </motion.div>

          
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <HolographicCard key={index} className="text-center p-6 group">
                <motion.div
                  className="text-3xl md:text-4xl font-black text-primary-cyan mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                  <span className="text-primary-purple">{stat.suffix}</span>
                </motion.div>
                <div className="text-sm md:text-base text-gray-300 font-medium">
                  {stat.label}
                </div>
                
               
                <div className="absolute inset-0 rounded-2xl bg-cyber-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px] -z-10" />
              </HolographicCard>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;