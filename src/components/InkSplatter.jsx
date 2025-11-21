import { motion } from 'framer-motion';

// Generates random organic blob paths
function generateBlobPath() {
  const points = 8;
  const angleStep = (Math.PI * 2) / points;
  const radius = 50;

  let path = '';
  for (let i = 0; i <= points; i++) {
    const angle = i * angleStep;
    const variance = 15 + Math.random() * 20;
    const r = radius + (Math.random() - 0.5) * variance;
    const x = 50 + r * Math.cos(angle);
    const y = 50 + r * Math.sin(angle);

    if (i === 0) {
      path += `M ${x} ${y}`;
    } else {
      const cp1x = 50 + (r + Math.random() * 10) * Math.cos(angle - angleStep / 2);
      const cp1y = 50 + (r + Math.random() * 10) * Math.sin(angle - angleStep / 2);
      path += ` Q ${cp1x} ${cp1y} ${x} ${y}`;
    }
  }
  path += ' Z';
  return path;
}

// Single ink splatter blob
function InkBlob({
  color = '#FFD700',
  size = 100,
  x = 0,
  y = 0,
  opacity = 0.3,
  delay = 0,
  blur = 20
}) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity }}
      transition={{
        duration: 1.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ filter: `blur(${blur}px)` }}
      >
        <path
          d={generateBlobPath()}
          fill={color}
        />
      </svg>
    </motion.div>
  );
}

// Ink drip element
function InkDrip({ x = 0, height = 50, delay = 0 }) {
  return (
    <motion.div
      className="absolute w-1 rounded-b-full pointer-events-none"
      style={{
        left: x,
        top: 0,
        height,
        background: 'linear-gradient(to bottom, rgba(255, 215, 0, 0.8), rgba(255, 215, 0, 0.3), transparent)',
      }}
      initial={{ scaleY: 0, transformOrigin: 'top' }}
      animate={{ scaleY: 1 }}
      transition={{
        duration: 2,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    />
  );
}

// Main ink splatter decoration component
export default function InkSplatter({ variant = 'default' }) {
  if (variant === 'hero') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large background splatters */}
        <InkBlob color="rgba(255, 215, 0, 0.15)" size={400} x="-10%" y="10%" blur={60} delay={0.2} />
        <InkBlob color="rgba(255, 165, 0, 0.1)" size={300} x="70%" y="60%" blur={50} delay={0.4} />
        <InkBlob color="rgba(139, 115, 85, 0.12)" size={250} x="20%" y="70%" blur={40} delay={0.6} />

        {/* Small accent splatters */}
        <InkBlob color="rgba(255, 215, 0, 0.4)" size={40} x="85%" y="20%" blur={8} delay={0.8} />
        <InkBlob color="rgba(255, 165, 0, 0.3)" size={30} x="10%" y="40%" blur={6} delay={1} />
        <InkBlob color="rgba(212, 165, 116, 0.35)" size={25} x="60%" y="15%" blur={5} delay={1.2} />

        {/* Drips from top */}
        <InkDrip x="15%" height={80} delay={1.5} />
        <InkDrip x="45%" height={60} delay={1.8} />
        <InkDrip x="78%" height={100} delay={2} />
      </div>
    );
  }

  if (variant === 'section') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <InkBlob color="rgba(255, 215, 0, 0.1)" size={300} x="-5%" y="20%" blur={50} delay={0} />
        <InkBlob color="rgba(139, 115, 85, 0.08)" size={200} x="80%" y="70%" blur={40} delay={0.2} />
        <InkBlob color="rgba(255, 165, 0, 0.06)" size={150} x="50%" y="10%" blur={30} delay={0.4} />
      </div>
    );
  }

  if (variant === 'accent') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <InkBlob color="rgba(255, 215, 0, 0.25)" size={60} x="90%" y="5%" blur={10} delay={0} />
        <InkBlob color="rgba(255, 165, 0, 0.2)" size={40} x="5%" y="85%" blur={8} delay={0.3} />
      </div>
    );
  }

  // Default scattered splatters
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <InkBlob color="rgba(255, 215, 0, 0.12)" size={200} x="10%" y="30%" blur={40} delay={0} />
      <InkBlob color="rgba(255, 165, 0, 0.08)" size={150} x="70%" y="50%" blur={35} delay={0.3} />
    </div>
  );
}

// Brush stroke SVG component
export function BrushStroke({
  color = '#FFD700',
  width = 200,
  height = 20,
  className = ''
}) {
  return (
    <svg
      viewBox="0 0 200 20"
      className={`${className}`}
      style={{ width, height }}
      preserveAspectRatio="none"
    >
      <path
        d="M0,10 Q20,5 40,10 T80,10 T120,10 T160,10 T200,10"
        stroke={color}
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        style={{ filter: 'blur(1px)' }}
      />
      <path
        d="M5,12 Q30,8 60,12 T120,10 T180,12"
        stroke={color}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

// Paint splatter burst for special effects
export function SplatterBurst({ x = '50%', y = '50%', color = '#FFD700' }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 8 + Math.random() * 12,
            height: 8 + Math.random() * 12,
            background: color,
            filter: 'blur(2px)',
            opacity: 0.4 + Math.random() * 0.3,
          }}
          initial={{ x: 0, y: 0 }}
          animate={{
            x: (Math.random() - 0.5) * 60,
            y: (Math.random() - 0.5) * 60,
          }}
          transition={{
            duration: 0.6,
            delay: i * 0.05,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      ))}
    </motion.div>
  );
}
