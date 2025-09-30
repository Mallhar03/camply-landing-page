import React from 'react';
import { FadeIn } from './FadeIn';

const HeroSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
      <FadeIn>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white leading-tight tracking-tighter">
            Coming Soon...
          </h1>
        </div>
      </FadeIn>
    </section>
  );
};

export default HeroSection;