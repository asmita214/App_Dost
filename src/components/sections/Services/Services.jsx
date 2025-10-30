import React from 'react';
import { motion } from 'framer-motion';
import { useViewportDetection } from '../../../hooks/useViewportDetection';
import AnimatedText from '../../ui/AnimatedText';
import ServiceCard from './ServiceCard';

const Services = () => {
  const [ref, isInViewport] = useViewportDetection();

  const services = [
    {
      icon: '📱',
      title: 'Android App Development',
      description: 'Custom Android applications built with the latest technologies to bring your ideas to life.',
      features: ['Native & Hybrid Apps', 'Play Store Deployment', 'Maintenance & Support']
    },
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Responsive and scalable web applications tailored to your business needs.',
      features: ['Responsive Design', 'E-commerce Solutions', 'Progressive Web Apps']
    },
    {
      icon: '🎨',
      title: 'UI/UX Development',
      description: 'Beautiful, intuitive user interfaces that enhance user experience and engagement.',
      features: ['User Research', 'Wireframing', 'Brand Identity']
    },
    {
      icon: '🤖',
      title: 'CRM Software',
      description: 'Comprehensive CRM solutions to manage customer relationships and boost productivity.',
      features: ['Custom Development', 'Integration Services', 'Training & Support']
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: ['AWS, Azure, GCP', 'Migration Services', 'Performance Tuning']
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Protect your business with robust security solutions and best practices.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance']
    }
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

  return (
    <section id="services" className="py-20 bg-dark-2 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-cyan/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-purple/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInViewport ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedText
            text="Our Services"
            type="words"
            className="text-4xl md:text-6xl font-black mb-6"
          />
          <AnimatedText
            text="Comprehensive IT solutions tailored to your business needs. We bring innovation and excellence to every project."
            type="words"
            delay={0.3}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInViewport ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
