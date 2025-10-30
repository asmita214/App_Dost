import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useViewportDetection } from '../../../hooks/useViewportDetection';
import AnimatedText from '../../ui/AnimatedText';
import HolographicCard from '../../ui/HolographicCard';
import MagneticButton from '../../ui/MagneticButton';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Portfolio = () => {
  const [ref, isInViewport] = useViewportDetection();
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'A modern e-commerce solution with advanced features and seamless user experience.',
      image: 'https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1709219707/catalog/1642792303964205056/waema2qxzpi6iqjmzdnl.webp',
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'Secure and intuitive mobile banking application with biometric authentication.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwYmFua2luZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      technologies: ['React Native', 'Firebase', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'CRM System',
      category: 'crm',
      description: 'Comprehensive customer relationship management system for enterprise clients.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JtJTIwc29mdHdhcmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      technologies: ['Vue.js', 'Laravel', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Healthcare Portal',
      category: 'web',
      description: 'Patient management portal with telemedicine capabilities and health tracking.',
      image: 'https://www.shutterstock.com/image-photo/patient-portal-doctor-shows-sign-260nw-2162719615.jpg',
      technologies: ['Angular', 'Python', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      category: 'mobile',
      description: 'AI-powered fitness tracking app with personalized workout recommendations.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzcyUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      technologies: ['Flutter', 'TensorFlow', 'GraphQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Inventory Management',
      category: 'crm',
      description: 'Real-time inventory management system with predictive analytics.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW52ZW50b3J5JTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      technologies: ['React', 'Spring Boot', 'Redis'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'crm', label: 'CRM Systems' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-dark-2 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-purple/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInViewport ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedText
            text="Our Portfolio"
            type="words"
            className="text-4xl md:text-6xl font-black mb-6"
          />
          <AnimatedText
            text="Discover our latest projects and see how we've helped businesses transform their ideas into digital reality."
            type="words"
            delay={0.3}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInViewport ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeFilter === filter.key
                  ? 'bg-cyber-gradient text-white shadow-2xl'
                  : 'bg-dark-3 text-gray-400 hover:text-white hover:bg-dark-1'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter className="w-4 h-4" />
              <span>{filter.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInViewport ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="group"
              >
                <HolographicCard className="h-full overflow-hidden">
                  {/* Project Image - NOW WITH REAL IMAGES */}
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <motion.a
                        href={project.liveUrl}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark-1 hover:bg-cyber-gradient hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark-1 hover:bg-cyber-gradient hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-cyber-gradient group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-dark-3 text-gray-400 text-sm rounded-full border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </HolographicCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInViewport ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <AnimatedText
            text="Ready to start your project?"
            type="words"
            className="text-2xl md:text-3xl font-bold text-white mb-6"
          />
          <MagneticButton className="text-lg px-12 py-4">
            Start Your Project
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;