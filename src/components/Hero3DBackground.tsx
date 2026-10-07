import React, { useEffect, useRef } from 'react';

interface Particle3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  baseSize: number;
  color: string;
}

const Hero3DBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = 0;
    let height = 0;

    // Mouse interaction with smooth damping
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      targetRotY = ((e.clientX - halfW) / halfW) * 0.35;
      targetRotX = -((e.clientY - halfH) / halfH) * 0.35;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle resize with DPR cap for maximum performance on Retina displays
    const resize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Pause when page is hidden
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Create 3D particles in a sphere/cloud formation
    const PARTICLE_COUNT = 45;
    const particles: Particle3D[] = [];
    const colors = ['#14b8a6', '#0d9488', '#2dd4bf', '#38bdf8', '#818cf8'];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Fibonacci sphere distribution for uniform 3D distribution
      const phi = Math.acos(1 - (2 * (i + 0.5)) / PARTICLE_COUNT);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const radius = 180 + Math.random() * 80;

      particles.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        vz: (Math.random() - 0.5) * 0.25,
        baseSize: Math.random() * 2 + 2,
        color: colors[i % colors.length]
      });
    }

    const fov = 400;
    let baseAngleY = 0;

    // Render loop capped and optimized
    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Smooth camera interpolation
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;
      baseAngleY += 0.003; // Continuous gentle rotation

      const totalAngleY = baseAngleY + currentRotY;
      const cosY = Math.cos(totalAngleY);
      const sinY = Math.sin(totalAngleY);

      const cosX = Math.cos(currentRotX);
      const sinX = Math.sin(currentRotX);

      const centerX = width / 2;
      const centerY = height / 2;

      // Projected points cache for line rendering
      const projected: { x: number; y: number; z: number; size: number; alpha: number; color: string }[] = [];

      // Project particles to 2D
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Animate slight drift
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Keep within boundary
        const distSq = p.x * p.x + p.y * p.y + p.z * p.z;
        if (distSq > 320 * 320 || distSq < 100 * 100) {
          p.vx *= -1;
          p.vy *= -1;
          p.vz *= -1;
        }

        // 3D Rotation (Y axis then X axis)
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;

        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // Perspective projection
        const scale = fov / (fov + z2 + 300);
        const screenX = centerX + x1 * scale;
        const screenY = centerY + y2 * scale;

        const alpha = Math.max(0.1, Math.min(0.85, (z2 + 300) / 600));

        projected.push({
          x: screenX,
          y: screenY,
          z: z2,
          size: p.baseSize * scale,
          alpha,
          color: p.color
        });
      }

      // Draw connecting lines (distance threshold)
      const maxDist = 95;
      ctx.lineWidth = 0.8;

      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.22 * Math.min(p1.alpha, p2.alpha);
            ctx.strokeStyle = `rgba(20, 184, 166, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes with soft glow
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];

        // Glow halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(20, 184, 166, ${p.alpha * 0.15})`;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full block opacity-70 dark:opacity-85" 
      />
    </div>
  );
};

export default React.memo(Hero3DBackground);
