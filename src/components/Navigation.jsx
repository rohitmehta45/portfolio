import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("HOME");

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "CONTACT", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveLink(item.label);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-orange-400/40 font-[Orbitron]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-between items-center h-20">
          <div
            className="text-2xl md:text-3xl font-extrabold cursor-pointer tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-300 to-cyan-400 drop-shadow-[0_0_25px_rgba(255,140,0,0.9)]"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            PORT<span className="text-cyan-400">FOLIO</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
             key={item.label}
             href={item.href}
             onClick={() => setActiveLink(item.label)}
             className={`relative font-semibold text-sm md:text-base tracking-wider px-3 py-1 transition-all ${
             activeLink === item.label
             ? "border-2 border-orange-400 rounded-md text-orange-400 drop-shadow-[0_0_10px_rgba(255,140,0,0.9)]"
             : "border-2 border-transparent text-gray-300 hover:border-orange-400 hover:text-orange-400 hover:drop-shadow-[0_0_8px_rgba(255,140,0,7)]"
             }`}
            >
            {item.label}
            </a>

            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-md hover:bg-orange-500/20 transition text-orange-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/90 backdrop-blur-lg border-t border-orange-400/40 rounded-b-lg py-6 flex flex-col items-center gap-4"
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveLink(item.label);
                    setIsOpen(false);
                  }}
                  className={`font-semibold text-sm tracking-wider transition-all flex flex-col items-center ${
                    activeLink === item.label
                      ? "text-orange-400 drop-shadow-[0_0_15px_rgba(255,140,0,0.9)]"
                      : "text-gray-300 hover:text-orange-400 hover:drop-shadow-[0_0_10px_rgba(255,140,0,0.7)]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`mt-1 w-2 h-2 rounded-sm transition-all ${
                      activeLink === item.label
                        ? "bg-orange-400"
                        : "bg-transparent"
                    }`}
                  ></span>
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
