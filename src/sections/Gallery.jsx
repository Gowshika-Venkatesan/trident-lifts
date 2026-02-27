import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Residential', 'Commercial', 'Industrial'];

  const projects = [
    { id: 1, category: 'Residential', title: 'Luxury Villa Lift', city: 'Bangalore', img: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=800' },
    { id: 2, category: 'Commercial', title: 'IT Park Express', city: 'Chennai', img: 'https://images.unsplash.com/photo-1517502474097-f9b30659dadb?auto=format&fit=crop&q=80&w=800' },
    { id: 3, category: 'Industrial', title: 'Heavy Freight System', city: 'Coimbatore', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800' },
    { id: 4, category: 'Residential', title: 'Glass Observation Lift', city: 'Mysore', img: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80&w=800' },
    { id: 5, category: 'Commercial', title: 'Hotel Grand Lobby', city: 'Bangalore', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800' },
    { id: 6, category: 'Industrial', title: 'Warehouse Solution', city: 'Salem', img: 'https://images.unsplash.com/photo-1601053163273-030b4acdf301?auto=format&fit=crop&q=80&w=800' },
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="text-center md:text-left">
            <span className="text-[#2563eb] font-bold uppercase tracking-[0.3em] text-xs">Our Portfolio</span>
            <h2 className="text-4xl font-black text-slate-900 mt-2">Latest Projects</h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  filter === cat 
                  ? 'bg-[#2563eb] text-white shadow-lg shadow-blue-200' 
                  : 'bg-white text-slate-400 hover:text-slate-600 border border-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={project.id}
                className="group relative h-[350px] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
              >
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-8">
                  <span className="text-[#2563eb] text-[10px] font-bold uppercase tracking-widest mb-2">{project.category}</span>
                  <h4 className="text-white text-xl font-bold">{project.title}</h4>
                  <p className="text-slate-300 text-sm">{project.city}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;