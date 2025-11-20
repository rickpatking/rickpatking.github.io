import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import './index.css';

function App() {
  const [konamiActivated, setKonamiActivated] = useState(false);

  // Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Easter egg - Konami code
  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
    let konamiIndex = 0;

    const handleKeyDown = (e) => {
      if (e.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          setKonamiActivated(true);
          konamiIndex = 0;
          setTimeout(() => setKonamiActivated(false), 5000);
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Easter egg message */}
      {konamiActivated && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#FA4616] text-white px-6 py-3 rounded-lg z-50 text-sm font-medium"
        >
          Go Gators!
        </motion.div>
      )}
    </div>
  );
}

export default App;
