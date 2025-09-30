import React, { useState, useEffect, useRef } from 'react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef!);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`py-20 md:py-32 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tighter mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">
            Accelerate Your Campus Life.
          </span>
          <br />
          Amplify Your Career.
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 mb-10">
          The only platform built to connect students, solve complex problems, and secure placements.
        </p>
        <a 
          href="#pricing"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transform hover:-translate-y-1"
        >
          Join Camply for Free
        </a>
      </div>
    </section>
  );
};

export default HeroSection;