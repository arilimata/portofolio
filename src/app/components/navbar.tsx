"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "techstack", label: "Tech Stack" },
  { id: "workexperience", label: "Work Experience" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 🟡 Highlight section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offsets = sections.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, offset: 0 };
        return { id, offset: el.offsetTop - 200 }; // offset for navbar height
      });

      const current = offsets.reverse().find(({ offset }) => scrollY >= offset);
      if (current) setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between py-4 px-6 md:px-10">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="font-mono text-xl font-bold text-cyan-400 hover:text-cyan-300 transition"
        >
          Arilimata<span className="text-white">.</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-mono">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`transition-colors duration-200 ${
                activeSection === id ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-300 hover:text-cyan-400 transition"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden flex flex-col bg-black/70 backdrop-blur-lg border-t border-gray-800 px-6 py-4 space-y-4"
          >
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => {
                  scrollToSection(id);
                  setIsMenuOpen(false);
                }}
                className={`font-mono text-lg text-left transition-colors duration-200 ${
                  activeSection === id ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
