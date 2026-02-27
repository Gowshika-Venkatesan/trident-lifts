import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ title, description, icon, image }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      {/* Image Container */}
      <div className="h-56 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-8">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        
        <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#2563eb] transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">
          {description}
        </p>
        
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563eb]">
          Learn More <ArrowRight size={14} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;