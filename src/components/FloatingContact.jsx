import { useEffect, useState } from 'react';
import { ArrowUp, MessageSquareText } from 'lucide-react';

const FloatingContact = ({ onQuoteClick }) => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 500);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {showScroll && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg transition hover:text-blue-700"
          aria-label="Scroll to top"
        >
          <ArrowUp size={19} />
        </button>
      )}
      <button
        type="button"
        onClick={onQuoteClick}
        className="flex items-center gap-3 rounded-full bg-blue-700 py-3 pl-5 pr-3 text-sm font-extrabold text-white shadow-2xl shadow-blue-950/30 transition hover:bg-slate-950"
      >
        <span className="hidden sm:inline">Plan your lift</span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
          <MessageSquareText size={21} />
        </span>
      </button>
    </div>
  );
};

export default FloatingContact;
