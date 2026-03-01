import React from 'react';
import { motion } from 'framer-motion';
// Import your logo with a unique name
import companyLogo from '../assets/TES.png';
import a2b from '../assets/a2b.png';
import thala from '../assets/thala.jpg';
import Junior from '../assets/Junior.jpg';
import Joy from '../assets/Joy.png';
import zudio from '../assets/zudio.png';

const ClientLogos = () => {
  // We use your company logo for all placeholders for now
  const logos = [
    thala,
    a2b,
    Junior,
    thala,
    Joy,
    zudio,
  ];

  return (
    <section className="py-12 bg-white overflow-hidden border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-slate-400">
          Trusted by Leading Developers & Associations
        </p>
      </div>

      {/* The Continuous Loop Container */}
      <div className="flex w-full">
        <motion.div 
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 15, // Made it slightly faster for a smoother feel
            repeat: Infinity 
          }}
        >
          {/* Mapping using 'item' to avoid naming conflicts */}
          {[...logos, ...logos].map((item, index) => (
            <div key={index} className="flex items-center justify-center min-w-[150px]">
              <img 
                src={item} 
                alt="Trident Client" 
                className="h-12 md:h-16 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;