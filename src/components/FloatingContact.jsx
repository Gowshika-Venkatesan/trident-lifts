import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, X, MessageSquare, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  // Monitor scroll position to show/hide the "Top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-6 z-[9999] flex flex-col items-end gap-3">
      
      {/* 1. Scroll To Top Button (Appears after 400px scroll) */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="w-10 h-10 bg-slate-100 text-slate-600 rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:text-[#2563eb] transition-all border border-slate-200"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 2. Expanded Contact Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="flex flex-col gap-3 mb-2"
          >
            <a 
              href="tel:+91XXXXXXXXXX"
              className="flex items-center gap-3 bg-white text-slate-900 px-4 py-3 rounded-full shadow-xl border border-slate-100 font-bold text-sm group"
            >
              <span className="group-hover:text-[#2563eb] transition-colors">Call Support</span>
              <div className="w-10 h-10 bg-[#2563eb] rounded-full flex items-center justify-center text-white">
                <Phone size={18} fill="currentColor" />
              </div>
            </a>

            <a 
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-slate-900 px-4 py-3 rounded-full shadow-xl border border-slate-100 font-bold text-sm group"
            >
              <span className="group-hover:text-[#25d366] transition-colors">WhatsApp Us</span>
              <div className="w-10 h-10 bg-[#25d366] rounded-full flex items-center justify-center text-white border-none">
                <MessageCircle size={20} fill="currentColor" />
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Main Floating Action Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform active:scale-90 ${
          isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-[#2563eb] text-white'
        }`}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} fill="white" />}
      </button>
    </div>
  );
};

export default FloatingContact;