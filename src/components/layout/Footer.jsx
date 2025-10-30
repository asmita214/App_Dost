import React from 'react';
import { motion } from 'framer-motion';
import { useViewportDetection } from '../../hooks/useViewportDetection';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const [ref, isInViewport] = useViewportDetection();

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Careers', href: '#careers' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Android App Development',
    'Web Development',
    'UI/UX Development',
    'CRM Software',
    'Cloud Solutions',
    'Cybersecurity'
  ];

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
    hidden: { opacity: 0, y: 30 },
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
    <footer className="bg-dark-3 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-purple rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInViewport ? "visible" : "hidden"}
          className="py-16"
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-cyber-gradient rounded-lg flex items-center justify-center">
                  <span className="text-dark-1 font-black text-lg">A</span>
                </div>
                <span className="text-white font-bold text-2xl">
                  App<span className="text-primary-cyan">Dost</span>
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner for comprehensive IT solutions. Transforming ideas into digital reality since 2025.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-dark-2 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-cyber-gradient transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-cyan transition-colors duration-300 flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-2 h-2 bg-primary-cyan rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <motion.a
                      href="#services"
                      className="text-gray-400 hover:text-primary-purple transition-colors duration-300 flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-2 h-2 bg-primary-purple rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {service}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-white font-bold text-lg mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center space-x-3 text-gray-400 group cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-5 h-5 text-primary-cyan" />
                  <span>Your City, Your Country</span>
                </motion.div>
                <motion.a 
                  href="tel:+1234567890"
                  className="flex items-center space-x-3 text-gray-400 hover:text-primary-cyan transition-colors duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-5 h-5 text-primary-cyan" />
                  <span>+1 (234) 567-890</span>
                </motion.a>
                <motion.a 
                  href="mailto:hello@appdost.com"
                  className="flex items-center space-x-3 text-gray-400 hover:text-primary-cyan transition-colors duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-5 h-5 text-primary-cyan" />
                  <span>hello@appdost.com</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <p className="text-gray-400 text-sm">
              © 2025 AppDost. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <motion.a 
                href="#" 
                className="hover:text-primary-cyan transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-primary-cyan transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-primary-cyan transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                Cookie Policy
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;