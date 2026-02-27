import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Clock, Users2 } from 'lucide-react';

const Stats = () => {
  const stats = [
    { label: "Installations", value: "1500+", icon: <CheckCircle size={24} /> },
    { label: "Years Experience", value: "20+", icon: <Clock size={24} /> },
    { label: "Happy Clients", value: "500+", icon: <Users2 size={24} /> },
    { label: "Design Awards", value: "15+", icon: <Award size={24} /> }
  ];

  return (
    <section className="bg-white py-12 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center space-y-2"
            >
              <div className="text-[#2563eb] mb-1">
                {stat.icon}
              </div>
              <p className="text-3xl font-black text-slate-900 tracking-tight">
                {stat.value}
              </p>
              <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;