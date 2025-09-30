import React, { useState, useEffect, useRef } from 'react';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const PricingSection: React.FC = () => {
  const freeFeatures = [
    "Basic peer connections",
    "Access to placement overviews and basic guides",
    "View the Problem of the Day statement only",
    "First teammate match is free",
  ];

  const proFeatures = [
    "Business Network Access (e.g. \"CEDAT\")",
    "View detailed user experience & success blueprints",
    "Submit and access verified solutions for 'Problem of the Day'",
    "Unlimited access to the 'Find My Teammate' feature",
  ];

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
    <section id="pricing" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Find the Plan That's Right for You</h2>
          <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">Start for free, and unlock your full potential with Pro.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div 
            className={`bg-slate-800 rounded-xl p-8 border border-slate-700 flex flex-col transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{
              transitionDelay: '150ms',
            }}
          >
            <h3 className="text-2xl font-bold text-white">Free</h3>
            <p className="text-slate-400 mt-2">Get started and explore the basics.</p>
            <p className="text-5xl font-extrabold text-white my-6">$0<span className="text-lg font-medium text-slate-400">/forever</span></p>
            <ul className="space-y-4 text-slate-300 mb-8">
              {freeFeatures.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <CheckIcon className="text-green-500 mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
            <a href="#" className="mt-auto w-full text-center bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
              Start Free
            </a>
          </div>

          {/* Pro Tier */}
          <div 
            className={`bg-slate-800 rounded-xl p-8 border-2 border-orange-500 flex flex-col relative overflow-hidden shadow-2xl shadow-orange-500/20 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{
              transitionDelay: '300ms',
            }}
            >
            <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">BEST VALUE</div>
            <h3 className="text-2xl font-bold text-white">Pro</h3>
            <p className="text-slate-400 mt-2">For those serious about their career.</p>
            <p className="text-5xl font-extrabold text-white my-6">$9<span className="text-lg font-medium text-slate-400">/month</span></p>
            <ul className="space-y-4 text-slate-300 mb-8">
              {proFeatures.map((feature, i) => (
                <li key={i} className="flex items-center font-medium">
                  <CheckIcon className="text-orange-400 mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
            <a href="#" className="mt-auto w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transform hover:-translate-y-0.5">
              Go Pro and Accelerate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;