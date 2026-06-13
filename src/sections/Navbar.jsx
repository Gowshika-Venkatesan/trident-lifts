import { useEffect, useState } from 'react';
import { Building2, Menu, Phone, X } from 'lucide-react';
import logo from '../assets/TES.png';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ onQuoteClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[60]">
      <div className="bg-slate-950 px-4 py-2 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-[0.16em] sm:text-xs">
          <span className="flex items-center gap-2">
            <Building2 size={14} className="text-blue-400" />
            Elevator solutions for Bengaluru
          </span>
          <button type="button" onClick={onQuoteClick} className="hidden items-center gap-2 text-blue-300 hover:text-white sm:flex">
            <Phone size={13} />
            Request a callback
          </button>
        </div>
      </div>

      <nav className={`border-b transition-all ${isScrolled ? 'border-slate-200 bg-white/95 shadow-lg backdrop-blur-xl' : 'border-white/20 bg-white/90 backdrop-blur-md'}`}>
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-4 sm:px-6">
          <a href="#home" onClick={closeMenu} className="flex items-center" aria-label="Trident Elevating Solutions home">
            <img src={logo} alt="Trident Elevating Solutions" className="h-11 w-auto object-contain sm:h-12" />
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-semibold text-slate-700 transition hover:text-blue-700">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onQuoteClick}
              className="hidden rounded-full bg-blue-700 px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-blue-700/20 transition hover:bg-slate-950 sm:block"
            >
              Plan your lift
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="rounded-xl p-2 text-slate-800 lg:hidden"
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={27} /> : <Menu size={27} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-slate-100 bg-white px-5 py-6 shadow-xl lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={closeMenu} className="rounded-xl px-4 py-3 font-bold text-slate-700 hover:bg-slate-50">
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  onQuoteClick();
                }}
                className="mt-3 rounded-xl bg-blue-700 px-5 py-3.5 font-extrabold text-white"
              >
                Request a consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
