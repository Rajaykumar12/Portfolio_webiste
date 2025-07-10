import { useEffect, useRef, useState } from 'react';

export const LazySection = ({ children, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: '50px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, hasLoaded]);

  return (
    <div ref={ref} className="min-h-screen">
      {isVisible ? children : (
        <div className="min-h-screen flex items-center justify-center bg-[#112255]">
          <div className="animate-pulse w-32 h-32 rounded-full bg-[#95B1C9]/20"></div>
        </div>
      )}
    </div>
  );
};