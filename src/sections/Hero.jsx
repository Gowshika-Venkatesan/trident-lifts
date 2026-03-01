import React from 'react';
import heroBg from '../assets/Lift.png'; 

const Hero = ({ onQuoteClick }) => {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Lift" className="w-full h-full object-cover" />
        {/* Adjusted gradient to be more subtle on the right edge */}
        <div className="absolute inset-0 bg-gradient-to-l from-white/30 via-transparent to-transparent"></div>
      </div>

      {/* Container: Changed 'px-6' to 'pr-4 md:pr-10' 
          This moves the content closer to the right screen edge.
      */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex justify-end px-6 pr-4 md:pr-12 lg:pr-16">
        
        {/* Content Box: max-w-lg keeps the lines from getting too long */}
        <div className="max-w-xl text-right flex flex-col items-end">
          
          <span className="text-[#0f172a] font-bold tracking-[0.3em] text-[10px] uppercase mb-3 opacity-90">
            Trident Elevating Solutions
          </span>

          <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-[#0f172a] leading-tight mb-5">
            Elevating Excellence <br />
            <span className="text-[#2563eb]">in Lift Solutions.</span>
          </h1>

          <p className="text-slate-600 text-[10px] md:text-xs font-semibold mb-8 tracking-[0.2em] uppercase opacity-80">
            Installation • Maintenance • Modernization
          </p>

          <button 
            onClick={onQuoteClick}
            className="bg-[#0f172a] text-white px-10 py-3.5 rounded-sm font-bold text-sm hover:bg-[#2563eb] hover:scale-105 transition-all shadow-xl uppercase tracking-widest active:scale-95"
          >
            Get a Free Quote
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;