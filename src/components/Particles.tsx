import React, { useEffect, useRef } from "react";

interface ParticlesProps {
  color?: string;
  count?: number;
}

const Particles: React.FC<ParticlesProps> = ({
  color = "rgba(255, 255, 255, 0.8)",
  count = 50,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();

    const particles: {
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
    }[] = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 6 + 2,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
      });
    }

    function animate() {
      requestAnimationFrame(animate);
      if (canvas && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 10);
          ctx.fillStyle = color;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius + 2, 0, Math.PI * 10);
          ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
          ctx.fill();

          particle.x += particle.dx;
          particle.y += particle.dy;

          if (particle.x < 0 || particle.x > canvas.width)
            particle.dx = -particle.dx;
          if (particle.y < 0 || particle.y > canvas.height)
            particle.dy = -particle.dy;
        });
      }
    }

    animate();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [color, count]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default Particles;
