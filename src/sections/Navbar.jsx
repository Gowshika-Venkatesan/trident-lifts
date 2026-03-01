import React, { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import logo from '../assets/TES.png';

const Navbar = ({ onQuoteClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMobileClick = (action) => {
    action();
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <header className="fixed top-0 w-full z-[60] shadow-sm">
      {/* Top Mini Bar - Hidden on very small screens to save space */}
      <div className="bg-[#0f172a] text-white text-[10px] py-2 px-6 flex justify-between uppercase tracking-widest">
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><Phone size={10}/> +91 XXXXX XXXXX</span>
          <span className="hidden md:flex items-center gap-1"><Mail size={10}/> info@tridentlifts.com</span>
        </div>
        <span className="hidden sm:inline">ISO 9001:2015 Certified</span>
      </div>

      {/* Main Nav */}
      <nav className="bg-white/95 backdrop-blur-md px-4 md:px-6 py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <div 
            className="h-10 md:h-12 cursor-pointer" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <img src={logo} alt="TES Trident" className="h-full object-contain" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex gap-8 text-sm font-semibold text-slate-700">
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-[#2563eb] transition-colors">Home</button>
            <a href="#about" className="hover:text-[#2563eb] transition-colors">About Us</a>
            <a href="#products" className="hover:text-[#2563eb] transition-colors">Products</a>
            <a href="#services" className="hover:text-[#2563eb] transition-colors">Maintenance</a>
            <a href="#careers" className="hover:text-[#2563eb] transition-colors">Careers</a>
            <a href="#contact" className="hover:text-[#2563eb] transition-colors">Contact Us</a>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop CTA Button */}
            <button 
              onClick={onQuoteClick}
              className="hidden sm:block bg-[#1e3a8a] hover:bg-[#0f172a] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-100"
            >
              GET A QUOTE
            </button>

            {/* Mobile Menu Toggle Button */}
            <button 
              onClick={toggleMenu} 
              className="lg:hidden p-2 text-slate-700 hover:text-[#d70505]"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-6 px-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
            <button onClick={() => handleMobileClick(() => window.scrollTo({top: 0, behavior: 'smooth'}))} className="text-left font-bold text-slate-700">Home</button>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="font-bold text-slate-700">About Us</a>
            <a href="#products" onClick={() => setIsMenuOpen(false)} className="font-bold text-slate-700">Our Products</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="font-bold text-slate-700">Maintenance</a>
            <button 
              onClick={() => handleMobileClick(onQuoteClick)}
              className="bg-[#d70505] text-white py-3 rounded-xl font-bold text-center"
            >
              GET A QUOTE
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;