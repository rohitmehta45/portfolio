import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import developerPortrait from '../assets/developerportrait.jpg';

const Hero = () => {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Letter animation variants
  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: [0, -10, 0],
      opacity: 1,
      transition: {
        delay: i * 0.1,
        y: { repeat: Infinity, repeatType: "mirror", duration: 0.6 },
      },
    }),
  };

  const fullName = "ROHIT MEHTA".split("");

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 bg-gradient-to-r from-blue-100 via-white to-blue-50">
      <div className="max-w-7xl w-full">
        <div className="brutalist-grid-asymmetric items-center">
          <div className="space-y-8">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={textVisible ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="brutalist-heading brutalist-heading-lg text-black"
              >
                {fullName.map((char, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={letterVariants}
                    initial="hidden"
                    animate={textVisible ? "visible" : "hidden"}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
            
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: 80, opacity: 0 }}
                animate={textVisible ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                className="brutalist-text max-w-lg text-gray-700"
              >
                Bringing ideas to life as a Frontend Developer, building modern web applications 
                with clean code and seamless user experiences.
              </motion.p>
            </div>

            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={textVisible ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                className="flex gap-4"
              >
                <button
                  onClick={() =>
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="brutalist-border brutalist-shadow brutalist-hover-lift px-8 py-4 font-bold text-lg cursor-pointer bg-white text-black"
                >
                  VIEW WORK
                </button>

                <a
                  href="#contact"
                  className="brutalist-accent-bg brutalist-border brutalist-shadow brutalist-hover-lift px-8 py-4 font-bold text-lg cursor-pointer inline-block"
                >
                  GET IN TOUCH
                </a>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={textVisible ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute inset-0 rounded-full border-4 border-pink-400"
              style={{ zIndex: 1 }}
            ></motion.div>

            <motion.div
              animate={{
                y: [0, -15, 0],
                boxShadow: [
                  "0px 10px 30px rgba(0,0,0,0.15)",
                  "0px 20px 40px rgba(0,0,0,0.25)",
                  "0px 10px 30px rgba(0,0,0,0.15)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="brutalist-border brutalist-shadow brutalist-hover-lift aspect-square overflow-hidden rounded-full w-64 h-64 bg-gray-100"
              style={{ zIndex: 2 }}
            >
              <img 
                src={developerPortrait} 
                alt="Rohit Mehta" 
                className="w-full h-full object-cover transition-all duration-500"
              />
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={textVisible ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -top-4 -right-4 w-16 h-16 brutalist-accent-bg brutalist-border"
            ></motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={textVisible ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-black"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
