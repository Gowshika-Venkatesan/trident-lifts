import React, { useState } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero'; 
import EnquiryForm from './sections/EnquiryForm';
import Products from './sections/Products';
import Stats from './sections/Stats'; 
import FloatingContact from './components/FloatingContact';
import ClientLogos from './sections/ClientLogos';
import Footer from './sections/Footer';
import ServiceExcellence from './sections/ServiceExecellence';
import Testimonials from './sections/Testimonials';
import Gallery from './sections/Gallery';
import { X } from 'lucide-react';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="relative min-h-screen bg-white pb-20 overflow-x-hidden">
      <Navbar onQuoteClick={() => setShowForm(true)} />
      
      <Hero onQuoteClick={() => setShowForm(true)} />

      <Stats />
      <ClientLogos />
      <div id="products"><Products /></div>
      <ServiceExcellence />
      <Gallery />
      <Testimonials />
      <Footer />
      <FloatingContact />

      {/* ULTRA-COMPACT MODAL POP-UP */}
      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4">
          {/* Backdrop with heavy blur to focus on the small form */}
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
            onClick={() => setShowForm(false)} 
          />
          
          {/* The Form Box - Forced to stay small */}
          <div className="relative bg-white w-full max-w-[380px] rounded-xl shadow-2xl overflow-hidden animate-in zoom-in duration-200 origin-center scale-90 md:scale-100">
            
            {/* Small Close Button */}
            <button 
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 p-1 text-slate-400 hover:text-[#d70505] transition-colors z-[110]"
            >
              <X size={18} />
            </button>

            {/* Content Area - Minimal Padding */}
            <div className="p-3">
               {/* This wraps your form to force it to be tighter */}
               <div className="compact-form-wrapper">
                  <EnquiryForm />
               </div>
            </div>
            
          </div>
        </div>
      )}
    </main>
  );
}

export default App;