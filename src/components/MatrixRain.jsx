import React, { useEffect, useRef, useState } from 'react';

const MatrixRain = ({ 
  columns = 100, 
  speed = 60, 
  fontSize = 17,
  opacity = 0.06,
  color = '#8BB6E8'
}) => {
  const canvasRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters (Japanese katakana + numbers)
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
    const charArray = chars.split('');

    // Initialize drops with mobile optimization
    const drops = [];
    const numColumns = Math.floor(canvas.width / fontSize);
    
    for (let i = 0; i < numColumns; i++) {
      // On mobile, only activate every 2nd or 3rd column for performance
      if (isMobile && i % 2 === 0) {
        drops[i] = Math.random() * canvas.height;
      } else if (!isMobile) {
        drops[i] = Math.random() * canvas.height;
      }
    }

    const draw = () => {
      // Very subtle fade effect with portfolio blue background
      ctx.fillStyle = `rgba(17, 34, 85, ${opacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Light blue text with improved font
      ctx.fillStyle = color;
      ctx.font = `${fontSize}px 'Courier New', monospace`;

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Skip empty drops (mobile optimization)
        if (drops[i] === undefined) continue;
        
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i];

        // Add some randomness to opacity for variation
        const alpha = Math.random() * 0.8 + 0.3;
        ctx.fillStyle = `${color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.fillText(char, x, y);

        // Reset drop to top randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drop down
        drops[i] += fontSize;
      }
    };

    const intervalId = setInterval(draw, isMobile ? speed * 1.5 : speed); // Slower on mobile for better performance

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [columns, speed, fontSize, opacity, color, isMobile]);

  // Toggle visibility on mobile for performance
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  if (!isVisible) return null;

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

export default MatrixRain;