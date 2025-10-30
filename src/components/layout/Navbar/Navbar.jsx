import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import MagneticButton from '../../ui/MagneticButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');


  const allSections = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Process', href: '#process', id: 'process' }, 
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' }, 
    { name: 'Contact', href: '#contact', id: 'contact' },
    
  ];

 
  const [availableSections, setAvailableSections] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      
      const sections = allSections.filter(section => {
        const element = document.getElementById(section.id);
        return element !== null;
      });

      setAvailableSections(sections);

      
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    
    const checkSections = () => {
      const sections = allSections.filter(section => {
        const element = document.getElementById(section.id);
        return element !== null;
      });
      setAvailableSections(sections);
    };

    checkSections();
    window.addEventListener('scroll', handleScroll);
    
    
    const timeoutId = setTimeout(checkSections, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleNavClick = (href, id) => {
    setIsMobileMenuOpen(false);
    setActiveSection(id);
    
   
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-effect bg-dark-2/80 backdrop-blur-xl py-3 shadow-2xl' 
            : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 bg-cyber-gradient rounded-lg flex items-center justify-center">
                <span className="text-dark-1 font-black text-lg">A</span>
              </div>
              <span className="text-white font-bold text-xl">
                App<span className="text-primary-cyan">Dost</span>
              </span>
            </motion.div>

            
            <div className="hidden md:flex items-center space-x-8">
              {availableSections.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, item.id);
                  }}
                  className={`font-medium transition-all duration-300 relative group ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                  
                
                  <span 
                    className={`absolute -bottom-1 left-0 h-0.5 bg-cyber-gradient transition-all duration-300 ${
                      activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                  
                 
                  {activeSection === item.id && (
                    <motion.span
                      className="absolute inset-0 bg-cyber-gradient rounded-lg blur-md opacity-20 -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.2 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.a>
              ))}
              
              <MagneticButton className="text-sm px-6 py-2">
                Get Started
              </MagneticButton>
            </div>

            
            <motion.button
              className="md:hidden text-white p-2"
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
           
            <div 
              className="absolute inset-0 bg-dark-1/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
           
            <motion.div
              className="absolute top-0 right-0 h-full w-80 bg-dark-2/95 backdrop-blur-xl border-l border-white/10"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30 }}
            >
              <div className="flex flex-col h-full pt-20 px-6">
                {availableSections.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, item.id);
                    }}
                    className={`text-lg font-medium py-4 border-b border-white/10 transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-primary-cyan'
                        : 'text-white hover:text-primary-cyan'
                    }`}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center">
                      {item.name}
                      {activeSection === item.id && (
                        <motion.div
                          className="w-2 h-2 bg-cyber-gradient rounded-full ml-3"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 15 }}
                        />
                      )}
                    </div>
                  </motion.a>
                ))}
                
                <motion.div
                  className="mt-8"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: availableSections.length * 0.1 }}
                >
                  <MagneticButton className="w-full justify-center">
                    Get Started
                  </MagneticButton>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;