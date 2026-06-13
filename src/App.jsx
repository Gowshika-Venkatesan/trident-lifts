import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Products from './sections/Products';
import ServiceExcellence from './sections/ServiceExecellence';
import Process from './sections/Process';
import Gallery from './sections/Gallery';
import Faq from './sections/Faq';
import EnquiryForm from './sections/EnquiryForm';
import Footer from './sections/Footer';
import FloatingContact from './components/FloatingContact';

function App() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showForm ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [showForm]);

  const openQuote = () => setShowForm(true);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950">
      <Navbar onQuoteClick={openQuote} />
      <Hero onQuoteClick={openQuote} />
      <About onQuoteClick={openQuote} />
      <Products onQuoteClick={openQuote} />
      <ServiceExcellence onQuoteClick={openQuote} />
      <Process onQuoteClick={openQuote} />
      <Gallery />
      <Faq />
      <Footer onQuoteClick={openQuote} />
      <FloatingContact onQuoteClick={openQuote} />

      {showForm && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setShowForm(false);
          }}
        >
          <div className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-slate-100 p-2 text-slate-600 transition hover:bg-slate-200 hover:text-slate-950"
              aria-label="Close enquiry form"
            >
              <X size={20} />
            </button>
            <EnquiryForm onSuccess={() => setTimeout(() => setShowForm(false), 1800)} />
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
