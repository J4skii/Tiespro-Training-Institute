import React, { useState, useEffect } from 'react';
import { Menu, X, Truck } from 'lucide-react';

interface HeaderProps {
  onOpenAdvisor: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAdvisor }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Qualifications', href: '#qualifications' },
    { name: 'Specialized Training', href: '#specialized' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-tiespro-navy/95 backdrop-blur-md shadow-md py-3' : 'bg-tiespro-navy py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-md bg-tiespro-orange text-white`}>
             <Truck className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-display font-bold text-white tracking-tight uppercase">
              Tiespro Training Institute
            </span>
            <span className="text-[10px] md:text-xs text-slate-400 tracking-widest uppercase">
              Tiespro 51 (Pty) Ltd
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-300 hover:text-tiespro-orange transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onOpenAdvisor}
            className="px-5 py-2 bg-tiespro-orange text-white font-bold text-sm uppercase tracking-wide rounded hover:bg-orange-600 transition-colors shadow-lg shadow-orange-900/20"
          >
            AI Course Advisor
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-tiespro-navy border-t border-slate-800 flex flex-col p-4 gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 font-medium p-3 hover:bg-slate-800 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
           <button
            onClick={() => {
              onOpenAdvisor();
              setIsMobileMenuOpen(false);
            }}
            className="w-full py-3 bg-tiespro-orange text-white font-bold uppercase rounded"
          >
            AI Course Advisor
          </button>
        </div>
      )}
    </header>
  );
};