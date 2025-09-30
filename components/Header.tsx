import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/70 backdrop-blur-lg border-b border-slate-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">
          camply<span className="text-orange-400">.</span>
        </h1>
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#features" onClick={(e) => { e.preventDefault(); document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-orange-400 transition-colors duration-300">Features</a>
          <a href="#pricing" onClick={(e) => { e.preventDefault(); document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-orange-400 transition-colors duration-300">Pricing</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-orange-400 transition-colors duration-300">Contact</a>
        </nav>
        <a 
          href="https://app.camply.live"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 border border-slate-700 hover:border-orange-500"
        >
          Try Demo
        </a>
      </div>
    </header>
  );
};

export default Header;