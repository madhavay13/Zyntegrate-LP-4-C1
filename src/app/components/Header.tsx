import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/logo4.jpg'
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const navLinkClass = "px-3 py-1.5 text-gray-600 hover:text-brand-600 font-medium rounded-full hover:bg-brand-50 transition-all duration-200";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-brand-100'
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img className="w-10 h-10" src={logo} alt="Zyntegrate logo" />
            <span className="font-semibold text-xl text-brand-900">Zyntegrate</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <a href="#why-it-matters" onClick={(e) => handleNavClick(e, '#why-it-matters')} className={navLinkClass}>Why</a>
            <a href="#features" onClick={(e) => handleNavClick(e, '#features')} className={navLinkClass}>Features</a>
            <a href="#agents" onClick={(e) => handleNavClick(e, '#agents')} className={navLinkClass}>Agent</a>
            <a href="#use-cases" onClick={(e) => handleNavClick(e, '#use-cases')} className={navLinkClass}>Use Cases</a>
            <a href="#cta" className={navLinkClass}>Contact</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              onClick={() => navigate("/signin")}
              className="bg-brand-500 hover:bg-brand-600 text-white cursor-pointer transition-colors"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen
              ? <X className="size-6 text-brand-900" />
              : <Menu className="size-6 text-brand-900" />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-brand-100">
                <div className="flex flex-col gap-1">
                  <a href="#why-it-matters" onClick={(e) => handleNavClick(e, '#why-it-matters')} className={navLinkClass}>Why</a>
                  <a href="#features" onClick={(e) => handleNavClick(e, '#features')} className={navLinkClass}>Features</a>
                  <a href="#agents" onClick={(e) => handleNavClick(e, '#agents')} className={navLinkClass}>Agent</a>
                  <a href="#use-cases" onClick={(e) => handleNavClick(e, '#use-cases')} className={navLinkClass}>Use Cases</a>
                  <a href="#cta" className={navLinkClass}>Contact</a>

                  <div className="flex flex-col gap-2 pt-4 border-t border-brand-100 mt-2">
                    <Button
                      variant="outline"
                      className="w-full border-brand-200 text-brand-600 hover:bg-brand-50 hover:text-brand-700"
                    >
                      Sign In
                    </Button>
                    <Button
                      className="w-full bg-brand-500 hover:bg-brand-600 text-white transition-colors"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}