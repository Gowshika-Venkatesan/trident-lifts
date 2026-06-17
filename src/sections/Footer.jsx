import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/TES.png';
import { businessDetails } from '../data/siteData';

const Footer = ({ onQuoteClick }) => (
  <footer className="mt-16 bg-[#07111f] px-6 pb-10 pt-20 text-white sm:px-10 lg:px-16">
    <div className="mx-auto max-w-[1312px]">
      <div className="grid gap-14 border-b border-white/10 pb-16 lg:grid-cols-[1.25fr_.65fr_.65fr_.9fr]">
        <div>
          <img src={logo} alt="Trident Elevating Solutions" className="h-12 w-auto brightness-0 invert" />
          <p className="mt-7 max-w-md text-lg leading-8 text-slate-400">
            Thoughtful elevator engineering for residential, commercial, healthcare and industrial environments.
          </p>
          <button type="button" onClick={onQuoteClick} className="group mt-8 inline-flex items-center gap-2 font-extrabold text-cyan-300 transition hover:text-white">
            Discuss your project
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

        <div>
          <h3 className="text-xs font-black text-slate-500">Company</h3>
          <div className="mt-6 flex flex-col gap-4 text-sm font-semibold text-slate-300">
            <Link to="/about" className="hover:text-white">About us</Link>
            <Link to="/gallery" className="hover:text-white">Gallery</Link>
            <Link to="/clients" className="hover:text-white">Our clients</Link>
            <Link to="/faq" className="hover:text-white">FAQ</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black text-slate-500">Solutions</h3>
          <div className="mt-6 flex flex-col gap-4 text-sm font-semibold text-slate-300">
            <Link to="/products" className="hover:text-white">Products</Link>
            <Link to="/services" className="hover:text-white">Installation</Link>
            <Link to="/services" className="hover:text-white">Maintenance</Link>
            <Link to="/services" className="hover:text-white">Modernization</Link>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black text-slate-500">Contact</h3>
          <div className="mt-6 space-y-5 text-sm leading-6 text-slate-400">
            <div className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-cyan-300" />
              <div className="flex flex-wrap items-center gap-x-2">
                {businessDetails.customerCareNumbers.map((number, index) => (
                  <span key={number.href} className="flex items-center gap-2">
                    {index > 0 && <span className="text-slate-600">/</span>}
                    <a href={`tel:${number.href}`} className="hover:text-white">{number.label}</a>
                  </span>
                ))}
              </div>
            </div>
            <a href={`mailto:${businessDetails.email}`} className="flex gap-3 break-all hover:text-white"><Mail size={18} className="mt-0.5 shrink-0 text-cyan-300" /> {businessDetails.email}</a>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessDetails.branchAddress)}`}
              target="_blank"
              rel="noreferrer"
              className="flex gap-3 hover:text-white"
            >
              <MapPin size={18} className="mt-0.5 shrink-0 text-cyan-300" />
              <span><strong className="text-slate-300">Branch:</strong> {businessDetails.branchAddress}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-4 pt-8 text-xs font-semibold text-slate-500 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Trident Elevating Solutions. All rights reserved.</p>
        <p>Engineered for movement. Designed for life.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
