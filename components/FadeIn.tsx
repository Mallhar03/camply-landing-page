import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface FadeInProps {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, threshold = 0.1, delay = 0 }) => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold });

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};