import { motion } from 'framer-motion';

// Clip-path reveal animation
export default function RevealOnScroll({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.8
}) {
  const clipPaths = {
    up: {
      hidden: 'inset(100% 0% 0% 0%)',
      visible: 'inset(0% 0% 0% 0%)',
    },
    down: {
      hidden: 'inset(0% 0% 100% 0%)',
      visible: 'inset(0% 0% 0% 0%)',
    },
    left: {
      hidden: 'inset(0% 100% 0% 0%)',
      visible: 'inset(0% 0% 0% 0%)',
    },
    right: {
      hidden: 'inset(0% 0% 0% 100%)',
      visible: 'inset(0% 0% 0% 0%)',
    },
  };

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{
          clipPath: clipPaths[direction].hidden,
          y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
          x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
        }}
        whileInView={{
          clipPath: clipPaths[direction].visible,
          y: 0,
          x: 0,
        }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{
          duration,
          delay,
          ease: [0.65, 0.05, 0, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Parallax wrapper
export function Parallax({ children, speed = 0.5, className = '' }) {
  return (
    <motion.div
      initial={{ y: 0 }}
      whileInView={{ y: 0 }}
      viewport={{ once: false }}
      style={{ willChange: 'transform' }}
      className={className}
    >
      <motion.div
        initial={{ y: 100 * speed }}
        whileInView={{ y: -100 * speed }}
        transition={{
          type: 'tween',
          ease: 'linear',
        }}
        viewport={{ once: false, amount: 'all' }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// Scale on scroll
export function ScaleOnScroll({ children, className = '' }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
