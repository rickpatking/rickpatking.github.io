import { useEffect, useRef } from 'react';

export default function CursorTrail() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const animationId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Add new particle
      particles.current.push({
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 3 + 2,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        life: 1,
        color: Math.random() > 0.5 ? '#f97316' : '#16a34a',
      });

      // Limit particles
      if (particles.current.length > 50) {
        particles.current.shift();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.life -= 0.02;
        particle.size *= 0.98;

        if (particle.life <= 0) {
          particles.current.splice(index, 1);
          return;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.life;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animationId.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
