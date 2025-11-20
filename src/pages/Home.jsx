import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { personalInfo } from '../data/projects';

// Typing effect hook
function useTypewriter(text, speed = 100) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayText('');
    setIsComplete(false);

    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayText, isComplete };
}

export default function Home() {
  const { displayText, isComplete } = useTypewriter("Building insights from data", 50);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 pt-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content (asymmetric) */}
            <div className="text-left">
              {/* Terminal-style greeting */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-stone-100 dark:bg-stone-800 rounded-lg mb-6"
              >
                <Terminal className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-mono text-stone-600 dark:text-stone-400">
                  ~/patrick-king
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
              >
                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-green-600 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </motion.h1>

              {/* Title */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl sm:text-2xl text-stone-600 dark:text-stone-400 mb-6"
              >
                {personalInfo.title} @{' '}
                <span className="text-orange-500">UF</span>
              </motion.p>

              {/* Typing tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-8"
              >
                <p className="text-lg text-stone-500 dark:text-stone-400 font-mono">
                  {'> '}{displayText}
                  <span className={`${isComplete ? 'animate-pulse' : ''}`}>|</span>
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <Link to="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium flex items-center gap-2 shadow-lg shadow-orange-500/25 transition-colors"
                  >
                    View Projects
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 rounded-lg font-medium transition-colors"
                  >
                    Get in Touch
                  </motion.button>
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-4"
              >
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="p-2 text-stone-600 dark:text-stone-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="p-2 text-stone-600 dark:text-stone-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="p-2 text-stone-600 dark:text-stone-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </div>

            {/* Right side - Stats card (asymmetric offset) */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 3 }}
              animate={{ opacity: 1, x: 0, rotate: 2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="bg-white dark:bg-stone-900 rounded-2xl p-6 shadow-xl border border-stone-200 dark:border-stone-700 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <h3 className="text-sm font-mono text-stone-500 dark:text-stone-400 mb-4 uppercase tracking-wider">
                  Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-stone-600 dark:text-stone-400">GPA</span>
                    <span className="text-2xl font-bold text-orange-500">4.0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-stone-600 dark:text-stone-400">Projects</span>
                    <span className="text-2xl font-bold text-green-500">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-stone-600 dark:text-stone-400">Languages</span>
                    <span className="text-2xl font-bold text-orange-500">4</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-stone-600 dark:text-stone-400">Certificates</span>
                    <span className="text-2xl font-bold text-green-500">1</span>
                  </div>
                </div>

                {/* Mini progress bar like a game */}
                <div className="mt-6 pt-4 border-t border-stone-200 dark:border-stone-700">
                  <div className="flex justify-between text-xs text-stone-500 mb-1">
                    <span>Graduation Progress</span>
                    <span>33%</span>
                  </div>
                  <div className="h-2 bg-stone-200 dark:bg-stone-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '33%' }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="h-full bg-gradient-to-r from-orange-500 to-green-500 rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Floating accent element */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: 'easeInOut',
                }}
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-orange-500 rounded-lg rotate-12 opacity-80"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
