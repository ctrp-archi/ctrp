import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  label: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  prefix = '',
  suffix = '',
  label,
  duration = 2000,
  className = ''
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Fonction d'easing pour une animation plus fluide
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className={`text-center ${className}`}>
      <div className="font-display text-6xl md:text-7xl lg:text-8xl font-light text-white mb-4">
        {prefix}{count}{suffix}
      </div>
      <div className="font-display text-sm md:text-base text-accent-400 uppercase tracking-[0.2em] font-medium">
        {label}
      </div>
    </div>
  );
};

export default AnimatedCounter;