import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  title: string;
  decimals?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2.5,
  prefix = '',
  suffix = '',
  title,
  decimals = 0
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    if (isInView) {
      const startAnimation = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const currentCount = progress * end;
        
        setCount(currentCount);
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(startAnimation);
        }
      };

      animationFrame = requestAnimationFrame(startAnimation);
    }
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, end, duration]);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-100px' }}
      className="text-center"
    >
      <p className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
        {prefix}{count.toFixed(decimals)}{suffix}
      </p>
      <p className="text-gray-600">{title}</p>
    </motion.div>
  );
};

export default AnimatedCounter;