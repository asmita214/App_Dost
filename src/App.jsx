import React, { useEffect } from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Services from './components/sections/Services/Services';
import Process from './components/sections/Process/Process';
import Portfolio from './components/sections/Portfolio/Portfolio';
import Contact from './components/sections/Contact/Contact';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';

function App() {
  useEffect(() => {
    // Dynamically import Lenis to avoid SSR issues
    const initLenis = async () => {
      const Lenis = (await import('lenis')).default;
      
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        smoothTouch: false,
        touchMultiplier: 2,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    };

    initLenis();
  }, []);

  return (
    <div className="app bg-dark-1 text-white overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;