import { ArrowRight, Building2, Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/TES.png';

const Footer = ({ onQuoteClick }) => (
  <footer id="contact" className="bg-slate-950 px-6 pb-12 pt-20 text-white">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <img src={logo} alt="Trident Elevating Solutions" className="h-12 w-auto brightness-0 invert" />
          <p className="mt-6 max-w-md leading-7 text-slate-400">
            Elevator installation, maintenance and modernization for homes, apartments, commercial buildings, healthcare and industry in Bengaluru.
          </p>
          <button type="button" onClick={onQuoteClick} className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-extrabold uppercase tracking-wider transition hover:bg-blue-500">
            Request consultation <ArrowRight size={17} />
          </button>
        </div>

        <div>
          <h3 className="font-black">Explore</h3>
          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
            <a href="#about" className="hover:text-white">About Trident</a>
            <a href="#solutions" className="hover:text-white">Elevator solutions</a>
            <a href="#services" className="hover:text-white">Lifecycle services</a>
            <a href="#projects" className="hover:text-white">Design gallery</a>
            <a href="#faq" className="hover:text-white">Planning FAQ</a>
          </div>
        </div>

        <div>
          <h3 className="font-black">Contact</h3>
          <div className="mt-5 space-y-4 text-sm leading-6 text-slate-400">
            <p className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-blue-400" /> Bengaluru, Karnataka, India</p>
            <p className="flex gap-3"><Phone size={18} className="mt-0.5 shrink-0 text-blue-400" /> Official phone number to be added</p>
            <p className="flex gap-3"><Mail size={18} className="mt-0.5 shrink-0 text-blue-400" /> Official email address to be added</p>
            <p className="flex gap-3"><Building2 size={18} className="mt-0.5 shrink-0 text-blue-400" /> Office address to be confirmed</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-4 pt-8 text-xs font-semibold text-slate-500 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Trident Elevating Solutions. All rights reserved.</p>
        <p>Elevating Bengaluru with thoughtful engineering.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
