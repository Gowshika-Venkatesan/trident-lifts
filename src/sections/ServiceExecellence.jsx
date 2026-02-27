import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Headphones, Zap, PenTool } from 'lucide-react';

const ServiceExcellence = () => {
  const services = [
    {
      title: "24/7 Rapid Response",
      desc: "Our dedicated technical team is on standby 24/7 to ensure zero downtime for your elevators.",
      icon: <Headphones size={32} />
    },
    {
      title: "Safety Certified",
      desc: "Every installation undergoes a 50-point safety check to meet international vertical transit standards.",
      icon: <ShieldCheck size={32} />
    },
    {
      title: "Modernization",
      desc: "Upgrade your old lifts with our latest gearless technology for smoother and faster travel.",
      icon: <Zap size={32} />
    },
    {
      title: "Expert AMC",
      desc: "Comprehensive Annual Maintenance Contracts tailored to keep your systems at peak performance.",
      icon: <PenTool size={32} />
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#2563eb] font-bold uppercase tracking-widest text-sm">Service Excellence</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6 leading-tight">
              Safety and Reliability <br />
              <span className="text-slate-400">In Every Floor.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              At Trident Elevating Solutions, we believe that an elevator is only as good as the service behind it. Our engineering team ensures your peace of mind with world-class maintenance.
            </p>
            <button className="border-2 border-[#2563eb] text-white px-8 py-3 rounded-full font-bold hover:bg-[#2563eb] transition-all">
              Learn About AMC
            </button>
          </motion.div>

          {/* Right Side: Service Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-[#2563eb]/50 transition-all group"
              >
                <div className="text-[#2563eb] mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceExcellence;