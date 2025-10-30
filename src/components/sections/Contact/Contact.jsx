import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useViewportDetection } from '../../../hooks/useViewportDetection';
import AnimatedText from '../../ui/AnimatedText';
import MagneticButton from '../../ui/MagneticButton';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [ref, isInViewport] = useViewportDetection();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      info: 'hello@appdost.com',
      href: 'mailto:hello@appdost.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      info: '+1 (234) 567-890',
      href: 'tel:+1234567890'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      info: 'Your City, Your Country',
      href: '#'
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
    <section id="contact" className="py-20 bg-dark-1 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary-cyan/5 to-transparent"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary-cyan/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInViewport ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedText
            text="Get In Touch"
            type="words"
            className="text-4xl md:text-6xl font-black mb-6"
          />
          <AnimatedText
            text="Ready to transform your ideas into digital reality? Let's discuss your project and create something amazing together."
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
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8">Let's Talk</h3>
            
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="flex items-center space-x-4 p-6 glass-effect rounded-2xl group hover:border-primary-cyan/50 transition-all duration-300 border border-white/10"
                whileHover={{ scale: 1.02, x: 10 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-12 h-12 bg-cyber-gradient rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold group-hover:text-transparent group-hover:bg-cyber-gradient group-hover:bg-clip-text transition-all duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {item.info}
                  </p>
                </div>
              </motion.a>
            ))}

           
            <motion.div 
              className="grid grid-cols-2 gap-4 mt-8"
              variants={itemVariants}
            >
              <div className="text-center p-4 bg-dark-2 rounded-xl border border-white/5">
                <div className="text-2xl font-bold text-primary-cyan">15+</div>
                <div className="text-sm text-gray-400">Projects Done</div>
              </div>
              <div className="text-center p-4 bg-dark-2 rounded-xl border border-white/5">
                <div className="text-2xl font-bold text-primary-purple">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

        
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <label className="block text-white font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-2 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-cyan transition-all duration-300"
                    placeholder="John Doe"
                    required
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <label className="block text-white font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-2 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-cyan transition-all duration-300"
                    placeholder="john@example.com"
                    required
                  />
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <label className="block text-white font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-2 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-cyan transition-all duration-300"
                  placeholder="Project Discussion"
                  required
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 bg-dark-2 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-cyan transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <MagneticButton 
                  type="submit" 
                  className="w-full text-lg py-4 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </MagneticButton>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;