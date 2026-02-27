import React from 'react';
import { Phone, Mail } from 'lucide-react';
import logo from '../assets/TES.png';

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 shadow-sm">
      {/* Top Mini Bar */}
      <div className="bg-[#0f172a] text-white text-[10px] py-2 px-6 flex justify-between uppercase tracking-widest">
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><Phone size={10}/> +91 XXXXX XXXXX</span>
          <span className="flex items-center gap-1"><Mail size={10}/> info@tridentlifts.com</span>
        </div>
        <span>ISO 9001:2015 Certified</span>
      </div>

      {/* Main Nav */}
      <nav className="bg-white/95 backdrop-blur-md px-6 py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="h-12">
            {/* LOGO SPACE - Replace with your TES logo file */}
            <img src={logo} alt="TES Trident" className="h-full object-contain" />
          </div>

          <div className="hidden lg:flex gap-8 text-sm font-semibold text-slate-700">
            <a href="#" className="hover:text-[#2563eb]">Home</a>
            <a href="#" className="hover:text-[#2563eb]">About Us</a>
            <a href="#" className="hover:text-[#2563eb]">Our Products</a>
            <a href="#" className="hover:text-[#2563eb]">Maintenance</a>
            <a href="#" className="hover:text-[#2563eb]">Contact</a>
          </div>

          <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 py-2.5 rounded-md text-sm font-bold transition-all">
            GET A QUOTE
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;