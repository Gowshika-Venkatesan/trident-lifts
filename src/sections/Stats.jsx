import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, CheckCircle, Clock, Users2 } from 'lucide-react';

// Counter Component for the "Running" effect
const CountUp = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        const easeOutQuad = (t) => t * (2 - t);
        setCount(Math.floor(easeOutQuad(percentage) * target));

        if (progress < duration) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
};

const Stats = () => {
  const stats = [
    { label: "Installations", value: 1500, suffix: "+", icon: <CheckCircle size={24} /> },
    { label: "Years Experience", value: 20, suffix: "+", icon: <Clock size={24} /> },
    { label: "Happy Clients", value: 500, suffix: "+", icon: <Users2 size={24} /> },
    { label: "Design Awards", value: 15, suffix: "+", icon: <Award size={24} /> }
  ];

  return (
    <section className="bg-white py-16 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, 
              }}
            
              whileHover={{ y: -10 }}
              className="group flex flex-col items-center text-center p-6 rounded-2xl transition-all hover:bg-slate-50 cursor-default"
            >
              {/* Using Blue Theme #2563eb */}
              <div className="text-[#2563eb] mb-3 p-3 bg-blue-50 rounded-full transition-colors group-hover:bg-[#2563eb] group-hover:text-white">
                {stat.icon}
              </div>
              
              <p className="text-4xl font-black text-slate-900 tracking-tight">
                <CountUp target={stat.value} />{stat.suffix}
              </p>
              
              <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400 mt-2">
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