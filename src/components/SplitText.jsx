import { motion } from 'framer-motion';

// Split text animation - reveals each character individually
export default function SplitText({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.03,
  duration = 0.5,
  once = true
}) {
  const characters = text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: duration,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={`inline-block ${className}`}
      style={{ perspective: '1000px' }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{
            transformOrigin: 'bottom',
            whiteSpace: char === ' ' ? 'pre' : 'normal'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Line-by-line split text - simplified version that works with JSX
export function SplitLines({
  children,
  className = '',
  delay = 0,
  staggerDelay = 0.1
}) {
  const lineVariant = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.65, 0.05, 0, 1],
      },
    },
  };

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        variants={lineVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
}
