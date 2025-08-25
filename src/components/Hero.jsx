import { useState, useEffect } from 'react';
import developerPortrait from '../assets/developerportrait.jpg';

const Hero = () => {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl w-full">
        <div className="brutalist-grid-asymmetric items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="overflow-hidden">
              <h1 
                className={`brutalist-heading brutalist-heading-xl transition-transform duration-1000 ${
                  textVisible ? 'translate-y-0' : 'translate-y-full'
                }`}
              >
                ROHIT
                <br />
                <span className="brutalist-accent">MEHTA</span>
              </h1>
            </div>
            
            <div className="overflow-hidden">
              <p 
                className={`brutalist-text max-w-lg transition-transform duration-1000 delay-300 ${
                  textVisible ? 'translate-y-0' : 'translate-y-full'
                }`}
              >
                Full-stack developer crafting digital experiences with precision, 
                creativity, and an obsession for clean code.
              </p>
            </div>

            <div className="overflow-hidden">
              <div 
                className={`flex gap-4 transition-transform duration-1000 delay-500 ${
                  textVisible ? 'translate-y-0' : 'translate-y-full'
                }`}
              >
                <button className="brutalist-border brutalist-shadow brutalist-hover-lift px-8 py-4 bg-white font-bold text-lg">
                  VIEW WORK
                </button>
                <button className="brutalist-accent-bg brutalist-border brutalist-shadow brutalist-hover-lift px-8 py-4 font-bold text-lg">
                  GET IN TOUCH
                </button>
              </div>
            </div>
          </div>

          {/* Portrait Collage */}
          <div className="relative">
            <div className="brutalist-border brutalist-shadow brutalist-hover-lift bg-gray-100 aspect-square overflow-hidden">
              <img 
                src={developerPortrait} 
                alt="Rohit Mehta" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 brutalist-accent-bg brutalist-border"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

