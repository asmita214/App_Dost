import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '../../ui/AnimatedText';
import MagneticButton from '../../ui/MagneticButton';
import StatsCounter from './StatsCounter';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-1 pt-20">
     
      <ParticleBackground />
      
   
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-cyan rounded-full filter blur-3xl opacity-20 animate-float"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-purple rounded-full filter blur-3xl opacity-20 animate-float"
        style={{ animationDelay: '2s' }}
      ></div>
      
    
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 mt-16">
        
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-black mb-6 leading-tight">
            
            <div className="text-5xl md:text-7xl lg:text-8xl mb-4">
              <span className="bg-cyber-gradient bg-clip-text text-transparent">
                Transform
              </span>
            </div>

            
            <div className="text-4xl md:text-6xl lg:text-7xl my-4 flex justify-center">
              <AnimatedText
                text="Your Ideas Into"
                type="words"
                delay={0.5}
                className="text-white font-semibold tracking-tight"
              />
            </div>

            
            <div className="text-5xl md:text-7xl lg:text-8xl mt-4">
              <span className="bg-cyber-gradient bg-clip-text text-transparent">
                Digital Reality
              </span>
            </div>
          </h1>
        </motion.div>

       
        <AnimatedText
          text="Your trusted partner for comprehensive IT solutions. From mobile apps to enterprise software, we bring innovation and excellence to every project with our expert team of developers."
          type="words"
          delay={1.0}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        />

       
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <MagneticButton className="text-lg px-8 py-4">
            Explore Our Services →
          </MagneticButton>
          <MagneticButton className="text-lg px-8 py-4 bg-transparent border-2 border-primary-cyan hover:bg-primary-cyan hover:text-dark-1">
            Get Free Consultation
          </MagneticButton>
        </motion.div>

        
        <StatsCounter />
      </div>

      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <div className="w-6 h-10 border-2 border-primary-cyan rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary-cyan rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;


