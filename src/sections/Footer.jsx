import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import logo from '../assets/TES.png'; // Using your TES logo

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-24 md:pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* 1. Company Info */}
        <div className="space-y-6">
          <img src={logo} alt="TES Logo" className="h-10 brightness-0 invert opacity-90" />
          <p className="text-slate-400 text-sm leading-relaxed">
            Leading the way in vertical transportation. Trident Elevating Solutions provides safe, reliable, and innovative elevator technology across India.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#2563eb] transition-colors"><Facebook size={16} /></a>
            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#2563eb] transition-colors"><Instagram size={16} /></a>
            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#2563eb] transition-colors"><Linkedin size={16} /></a>
          </div>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-white flex items-center gap-2 transition-all hover:translate-x-1"><ArrowRight size={12} className="text-[#2563eb]" /> Home</a></li>
            <li><a href="#" className="hover:text-white flex items-center gap-2 transition-all hover:translate-x-1"><ArrowRight size={12} className="text-[#2563eb]" /> Our Products</a></li>
            <li><a href="#" className="hover:text-white flex items-center gap-2 transition-all hover:translate-x-1"><ArrowRight size={12} className="text-[#2563eb]" /> Maintenance (AMC)</a></li>
            <li><a href="#" className="hover:text-white flex items-center gap-2 transition-all hover:translate-x-1"><ArrowRight size={12} className="text-[#2563eb]" /> Careers</a></li>
          </ul>
        </div>

        {/* 3. Products */}
        <div>
          <h4 className="text-lg font-bold mb-6">Solutions</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="hover:text-white cursor-pointer">Passenger Lifts</li>
            <li className="hover:text-white cursor-pointer">Home Elevators</li>
            <li className="hover:text-white cursor-pointer">Hospital Lifts</li>
            <li className="hover:text-white cursor-pointer">Car & Freight Lifts</li>
          </ul>
        </div>

        {/* 4. Contact Details */}
        <div>
          <h4 className="text-lg font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-[#2563eb] shrink-0" />
              <span>Bangalore Office: [Your Address Here], Karnataka, India.</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#2563eb] shrink-0" />
              <span>+91 XXXXX XXXXX</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[#2563eb] shrink-0" />
              <span>info@tridentlifts.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs uppercase tracking-widest font-bold">
        <p>© 2026 Trident Elevating Solutions. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;