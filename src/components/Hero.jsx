import { motion } from "framer-motion";
import "@fontsource/orbitron/700.css";
import { Github, Linkedin } from "lucide-react";

const Hero = () => {
  const nameLetters = "ROHIT MEHTA".split("");
  const descriptionWords = [
    "I", "am", "a", "passionate", "Frontend", "Developer,", "crafting", "modern,", 
    "responsive", "web", "applications", "with", "React,", "Tailwind", "CSS,", "and", 
    "clean", "code."
  ];

  const letterVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.15, type: "spring", stiffness: 120 }
    })
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 1 + i * 0.2, type: "spring", stiffness: 120 }
    })
  };

  const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 4 + i * 0.3, duration: 0.6, ease: "easeOut" }
    })
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden font-['Orbitron'] px-4 md:px-8 lg:px-16 py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0e00] to-[#000000] -z-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,0,0.07)_1px,transparent_1px)] bg-[length:120px_120px] opacity-20 -z-20"></div>

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 z-10">
        <div className="flex-1 text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-orange-400 drop-shadow-[0_0_20px_rgba(255,120,0,0.9)] tracking-wide sm:tracking-wider">
            {nameLetters.map((char, i) => (
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

          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-md mt-4 sm:mt-6 flex flex-wrap gap-2">
            {descriptionWords.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </p>

          <motion.div
            className="mt-6 flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 3, ease: "easeOut" }}
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-orange-500 text-white rounded-xl shadow-lg hover:bg-orange-600 transition"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-orange-400 text-orange-400 rounded-xl shadow-lg hover:bg-orange-500 hover:text-white transition"
            >
              Get in Touch
            </a>
          </motion.div>

          <div className="flex gap-6 mt-6">
            {[
              { Icon: Github, url: "https://github.com/rohitmehta45", border: "border-orange-500", hover: "hover:text-orange-500 hover:drop-shadow-[0_0_10px_rgba(255,165,0,0.7)]" },
              { Icon: Linkedin, url: "https://www.linkedin.com/in/rohit-mehta-5133a8312/", border: "border-cyan-400", hover: "hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]" }
            ].map(({ Icon, url, border, hover }, i) => (
              <motion.a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white transition-all duration-300 p-2 rounded-full border-2 ${border} flex items-center justify-center ${hover} bg-white/5`}
                custom={i}
                variants={socialVariants}
                initial="hidden"
                animate="visible"
              >
                <Icon size={32} />
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          className="flex-1 flex justify-end mt-8 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.div
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-90 md:h-83 rounded-full overflow-hidden border-4 border-orange-500/70 shadow-[0_0_30px_rgba(255,140,0,0.7)]"
            animate={{
              y: [0, -15, 0, 10, 0],
              rotate: [0, 2, 0, -2, 0],
              scale: [1, 1.02, 1, 1.01, 1]
            }}
            transition={{
              duration: 3,   
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          >
            <img
              src="/images/developerPortrait.jpg"
              alt="Developer Portrait"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </motion.div>
      </div>

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
