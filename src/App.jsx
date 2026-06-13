import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import EnquiryForm from './sections/EnquiryForm';
import FloatingContact from './components/FloatingContact';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminPage from './pages/AdminPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const pageTitles = {
      '/': 'Trident Elevating Solutions | Elevators Engineered for Life',
      '/about': 'About Us | Trident Elevating Solutions',
      '/products': 'Elevator Products | Trident Elevating Solutions',
      '/services': 'Elevator Services | Trident Elevating Solutions',
      '/gallery': 'Project Gallery | Trident Elevating Solutions',
      '/faq': 'Elevator Planning FAQ | Trident Elevating Solutions',
      '/contact': 'Contact Us | Trident Elevating Solutions',
    };
    document.title = pageTitles[pathname] || 'Trident Elevating Solutions';
  }, [pathname]);

  return null;
}

function App() {
  const { pathname } = useLocation();
  const [showForm, setShowForm] = useState(false);
  const isAdminRoute = pathname.startsWith('/admin');

  useEffect(() => {
    document.body.style.overflow = showForm ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [showForm]);

  const openQuote = () => setShowForm(true);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f7f4] text-slate-950">
      <ScrollToTop />
      {!isAdminRoute && <Navbar onQuoteClick={openQuote} />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage onQuoteClick={openQuote} />} />
          <Route path="/about" element={<AboutPage onQuoteClick={openQuote} />} />
          <Route path="/products" element={<ProductsPage onQuoteClick={openQuote} />} />
          <Route path="/services" element={<ServicesPage onQuoteClick={openQuote} />} />
          <Route path="/gallery" element={<GalleryPage onQuoteClick={openQuote} />} />
          <Route path="/faq" element={<FaqPage onQuoteClick={openQuote} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {!isAdminRoute && <Footer onQuoteClick={openQuote} />}
      {!isAdminRoute && <FloatingContact onQuoteClick={openQuote} />}

      {showForm && !isAdminRoute && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07111f]/80 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setShowForm(false);
          }}
        >
          <div className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-slate-100 p-2.5 text-slate-600 transition hover:bg-slate-200 hover:text-slate-950"
              aria-label="Close enquiry form"
            >
              <X size={20} />
            </button>
            <EnquiryForm onSuccess={() => setTimeout(() => setShowForm(false), 1800)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
