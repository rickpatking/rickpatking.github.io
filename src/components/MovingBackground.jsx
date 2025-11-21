import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function MovingBackground() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  // Parallax transforms based on scroll
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [45, 225]);

  return (
    <div ref={ref} className="moving-bg">
      {/* Animated gradient orbs with parallax */}
      <motion.div
        className="bg-orb bg-orb-1"
        style={{ y: y1 }}
      />
      <motion.div
        className="bg-orb bg-orb-2"
        style={{ y: y2 }}
      />
      <motion.div
        className="bg-orb bg-orb-3"
        style={{ y: y3 }}
      />

      {/* Animated grid */}
      <div className="bg-grid" />

      {/* Flowing lines SVG */}
      <div className="flow-lines">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="50%" stopColor="#FFA500" />
              <stop offset="100%" stopColor="#8b7355" />
            </linearGradient>
          </defs>
          <path d="M0,200 Q250,100 500,200 T1000,200" />
          <path d="M0,400 Q250,300 500,400 T1000,400" />
          <path d="M0,600 Q250,500 500,600 T1000,600" />
          <path d="M0,800 Q250,700 500,800 T1000,800" />
        </svg>
      </div>

      {/* Geometric shapes with rotation */}
      <div className="bg-shapes">
        <motion.div
          className="bg-shape bg-shape-1"
          style={{ rotate }}
        />
        <div className="bg-shape bg-shape-2" />
        <motion.div
          className="bg-shape bg-shape-3"
          style={{ rotate: rotate2 }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#FFD700] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Horizontal moving line */}
      <div className="absolute top-1/3 left-0 right-0 h-px overflow-hidden">
        <motion.div
          className="h-full w-1/3 bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent"
          animate={{
            x: ['-100%', '400%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Another horizontal moving line */}
      <div className="absolute top-2/3 left-0 right-0 h-px overflow-hidden">
        <motion.div
          className="h-full w-1/4 bg-gradient-to-r from-transparent via-[#FFA500]/20 to-transparent"
          animate={{
            x: ['400%', '-100%'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Radial gradient pulse */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.05) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
