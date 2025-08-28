import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "@fontsource/orbitron/700.css";

const Hero = () => {
  const letters = "ROHIT MEHTA".split("");

  const letterVariants = {
    hidden: { opacity: 0, y: 5, textShadow: "0px 0px 0px rgba(255,255,255,0)" },
    visible: (i) => ({
      opacity: [0, 1, 0.8, 1],
      y: [0, -3, 0],
      textShadow: [
        "0px 0px 0px rgba(255,255,255,0)",
        "0px 0px 10px rgba(0,255,255,0.9)",
        "0px 0px 20px rgba(255,255,0,1)",
        "0px 0px 0px rgba(255,255,255,0)"
      ],
      transition: {
        delay: i * 0.05,
        duration: 1,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
      }
    })
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden font-['Orbitron'] px-4 md:px-8 lg:px-16 py-12">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0e00] to-[#000000] -z-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,0,0.07)_1px,transparent_1px)] bg-[length:120px_120px] opacity-20 -z-20"></div>

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 z-10">
        {/* Left: Animated Name */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-orange-400 drop-shadow-[0_0_20px_rgba(255,120,0,0.9)] tracking-wide sm:tracking-wider">
            {letters.map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-md mx-auto md:mx-0 mt-4 sm:mt-6">
            I am a passionate Frontend Developer, crafting modern, responsive web
            applications with React, Tailwind CSS, and clean code. I specialize
            in seamless user experiences and standout portfolio projects.
          </p>
        </div>

        {/* Right: Developer Portrait */}
        <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0 relative">
          <motion.div
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-orange-500/70 shadow-[0_0_30px_rgba(255,140,0,0.7)]"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <img
              src="src/assets/developerPortrait.jpg"
              alt="Developer Portrait"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>

      {/* Floating Background Shapes */}
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-10 left-5 sm:left-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-orange-500/40 blur-[120px] -z-10"
      />
      <motion.div
        animate={{ rotate: 360, opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
        className="absolute bottom-10 right-10 sm:right-20 w-56 sm:w-[28rem] h-56 sm:h-[28rem] border-4 border-orange-500/50 rounded-full -z-10"
      />
      <motion.div
        animate={{ y: [0, -25, 0], opacity: [0.2, 0.5, 0.2], rotate: [0, 45, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-36 sm:w-44 h-36 sm:h-44 border-4 border-orange-400/50 rounded-lg -z-10"
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/3 w-20 sm:w-28 h-20 sm:h-28 rounded-full border-4 border-cyan-400/50 -z-10"
      />
      <motion.div
        animate={{ x: [0, 20, 0], rotate: [0, 45, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-1/4 w-16 sm:w-24 h-16 sm:h-24 border-4 border-purple-400/50 rounded-lg -z-10"
      />
    </section>
  );
};

export default Hero;
