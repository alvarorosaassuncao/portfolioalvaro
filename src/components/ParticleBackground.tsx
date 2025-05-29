
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 8000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          color: Math.random() > 0.6 ? '#3b82f6' : Math.random() > 0.3 ? '#60a5fa' : '#c0c0c0'
        });
      }
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            const opacity = (150 - distance) / 150 * 0.3;
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(96, 165, 250, ${opacity * 0.8})`);
            gradient.addColorStop(1, `rgba(147, 197, 253, ${opacity})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections first (web effect)
      drawConnections();

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Keep particles within bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Draw particle with glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Create radial gradient for glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(0.4, particle.color + '80');
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();

        // Enhanced glow effect for blue particles
        if (particle.color === '#3b82f6') {
          ctx.shadowColor = '#3b82f6';
          ctx.shadowBlur = 20;
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(animateParticles);
    };

    resizeCanvas();
    createParticles();
    animateParticles();

    const handleResize = () => {
      resizeCanvas();
      particles.length = 0;
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground;
