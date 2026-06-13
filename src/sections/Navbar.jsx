import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/TES.png';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Clients', to: '/clients' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

const Navbar = ({ onQuoteClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[60] px-3 pt-3 sm:px-5">
      <nav className={`mx-auto max-w-[1440px] rounded-2xl border transition-all duration-300 ${
        isScrolled
          ? 'border-slate-200/80 bg-white/95 shadow-xl shadow-slate-950/10 backdrop-blur-xl'
          : 'border-white/25 bg-white/90 shadow-lg shadow-slate-950/5 backdrop-blur-xl'
      }`}>
        <div className="flex h-[76px] items-center justify-between px-4 sm:px-6">
          <Link to="/" onClick={closeMenu} aria-label="Trident Elevating Solutions home">
            <img src={logo} alt="Trident Elevating Solutions" className="h-11 w-auto object-contain sm:h-12" />
          </Link>

          <div className="hidden items-center gap-6 xl:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `relative py-2 text-sm font-bold transition ${
                  isActive ? 'text-[#1167b1]' : 'text-slate-700 hover:text-[#1167b1]'
                }`}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && <span className="absolute inset-x-0 -bottom-1 mx-auto h-0.5 w-5 rounded-full bg-[#1167b1]" />}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button type="button" onClick={onQuoteClick} className="hidden rounded-full bg-[#07111f] px-6 py-3 text-xs font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-[#1167b1] sm:block">
              Get a quote
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="rounded-full p-2.5 text-slate-900 xl:hidden"
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={27} /> : <Menu size={27} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-slate-200 px-4 pb-5 pt-3 xl:hidden">
            <div className="grid gap-1 sm:grid-cols-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className={({ isActive }) => `rounded-xl px-4 py-3 font-bold ${isActive ? 'bg-blue-50 text-[#1167b1]' : 'text-slate-700 hover:bg-slate-50'}`}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            <button
              type="button"
              onClick={() => {
                closeMenu();
                onQuoteClick();
              }}
              className="mt-3 w-full rounded-xl bg-[#1167b1] px-5 py-3.5 font-extrabold text-white sm:hidden"
            >
              Get a quote
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
