import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Ramesh Kumar",
      role: "Secretary, Green Heights Apartments",
      text: "The installation process was seamless. The TES team was professional and the new gearless lift is incredibly silent. Highly recommended for apartment modernizations.",
      location: "Bangalore"
    },
    {
      name: "Senthil V.",
      role: "Proprietor, SV Textiles",
      text: "We installed a freight lift for our warehouse in Coimbatore. It handles heavy loads effortlessly and the 24/7 support team is always responsive.",
      location: "Coimbatore"
    },
    {
      name: "Anitha Reddy",
      role: "Home Owner",
      text: "The glass observation lift they installed in our villa is a masterpiece. It added so much value to our home aesthetics. Brilliant engineering!",
      location: "Chennai"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#2563eb] font-bold uppercase tracking-[0.3em] text-xs">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3">What Our Clients Say</h2>
          <div className="w-20 h-1.5 bg-[#2563eb] mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-shadow"
            >
              <Quote className="absolute top-6 right-8 text-slate-200" size={40} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-slate-600 italic mb-6 leading-relaxed">
                "{review.text}"
              </p>

              <div>
                <h4 className="font-bold text-slate-900">{review.name}</h4>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  {review.role} • {review.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;