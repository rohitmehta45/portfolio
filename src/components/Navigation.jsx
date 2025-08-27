import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("HOME"); // Track active menu item

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "CONTACT", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div
            className="brutalist-heading text-2xl font-extrabold cursor-pointer"
            onClick={() => window.location.reload()}
            title="Refresh"
          >
            <span className="brutalist-accent">PORT</span>FOLIO
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                onClick={() => setActiveLink(item.label)}
                className={`font-semibold text-sm tracking-wide relative transition-colors ${
                  activeLink === item.label ? "text-blue-600" : "text-gray-800 hover:text-blue-600"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all ${
                    activeLink === item.label ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white shadow-md rounded-b-lg py-4 flex flex-col items-center gap-3"
            >
              {navItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveLink(item.label);
                    setIsOpen(false);
                  }}
                  className={`font-semibold text-sm tracking-wide transition-colors ${
                    activeLink === item.label ? "text-blue-600" : "text-gray-800 hover:text-blue-600"
                  }`}
                >
                  {item.label}
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
