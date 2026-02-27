import React from 'react';
import { motion } from 'framer-motion';

const EnquiryForm = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          Quick Enquiry
        </h3>
        <p className="text-slate-500 text-sm mt-1">
          Get a professional consultation and quote within 24 hours.
        </p>
      </div>
      
      <form className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 ml-1">Full Name</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="w-full bg-slate-50 border border-slate-200 p-3 rounded-lg focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] outline-none transition text-slate-900 placeholder:text-slate-300"
              required
            />
          </div>
          
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 ml-1">Phone Number</label>
            <input 
              type="tel" 
              placeholder="+91 XXXXX XXXXX" 
              className="w-full bg-slate-50 border border-slate-200 p-3 rounded-lg focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] outline-none transition text-slate-900 placeholder:text-slate-300"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 ml-1">Select Service</label>
            <select className="w-full bg-slate-50 border border-slate-200 p-3 rounded-lg focus:border-[#2563eb] outline-none transition text-slate-700 cursor-pointer">
              <option>New Lift Installation</option>
              <option>Modernization</option>
              <option>Maintenance (AMC)</option>
              <option>Repair Services</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 ml-1">Requirements</label>
            <textarea 
              placeholder="Tell us about your building type or lift capacity..." 
              className="w-full bg-slate-50 border border-slate-200 p-3 rounded-lg h-28 focus:border-[#2563eb] outline-none transition text-slate-900 placeholder:text-slate-300 resize-none"
            ></textarea>
          </div>
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-blue-200 active:scale-95 flex justify-center items-center gap-2"
        >
          SUBMIT REQUEST
        </button>
      </form>

      <p className="text-[10px] text-center text-slate-400 mt-4 uppercase tracking-widest font-medium">
        🔒 Your data is safe with Trident Elevating Solutions
      </p>
    </motion.div>
  );
};

export default EnquiryForm;