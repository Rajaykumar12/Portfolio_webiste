import React, { useEffect, useRef } from 'react';

const PortfolioMatrixRain = ({ 
  opacity = 0.08,
  speed = 80,
  fontSize = 20,
  color = '#ffffff'
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Programming-related characters for a portfolio theme
    const chars = '01{}[]()<>+-*/=;:.,?!@#$%^&*_|\\~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charArray = chars.split('');

    const drops = [];
    const numColumns = Math.floor(canvas.width / fontSize);
    
    for (let i = 0; i < numColumns; i++) {
      drops[i] = Math.random() * canvas.height;
    }

    const draw = () => {
      // Very subtle fade effect
      ctx.fillStyle = `rgba(17, 34, 85, ${opacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Portfolio theme color
      ctx.fillStyle = color;
      ctx.font = `${fontSize}px 'Courier New', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i];

        // Add some randomness to opacity for variation
        const alpha = Math.random() * 0.8 + 0.3;
        ctx.fillStyle = `${color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.fillText(char, x, y);

        // Reset conditions
        if (y > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }

        drops[i] += fontSize;
      }
    };

    const intervalId = setInterval(draw, speed);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [opacity, speed, fontSize, color]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: 'transparent',
        mixBlendMode: 'soft-light'
      }}
    />
  );
};

export default PortfolioMatrixRain;