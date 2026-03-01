import React from 'react';
import { motion } from 'framer-motion';

const EnquiryForm = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full bg-white"
    >
      <form className="space-y-3">
        {/* Name Field */}
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1 ml-1">
            Full Name
          </label>
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-md focus:border-[#d70505] outline-none transition text-sm text-slate-900"
            required
          />
        </div>
        
        {/* Phone Field */}
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1 ml-1">
            Phone Number
          </label>
          <input 
            type="tel" 
            placeholder="+91 XXXXX XXXXX" 
            className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-md focus:border-[#d70505] outline-none transition text-sm text-slate-900"
            required
          />
        </div>

        {/* Service Field */}
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1 ml-1">
            Service
          </label>
          <select className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-md focus:border-[#d70505] outline-none transition text-sm text-slate-700 cursor-pointer">
            <option>New Installation</option>
            <option>Modernization</option>
            <option>Maintenance (AMC)</option>
            <option>Repair Services</option>
          </select>
        </div>

        {/* Requirements - Made much smaller */}
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1 ml-1">
            Message
          </label>
          <textarea 
            placeholder="Brief requirements..." 
            className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-md h-20 focus:border-[#d70505] outline-none transition text-sm text-slate-900 resize-none"
          ></textarea>
        </div>
        
        {/* Submit Button - Now uses your Red theme */}
        <button 
          type="submit" 
          className="w-full bg-[#0f172a] hover:bg-[#2563eb] text-white font-bold py-3 rounded-md transition-all shadow-md active:scale-95 text-xs tracking-widest uppercase"
        >
          Submit Request
        </button>
      </form>

      <p className="text-[9px] text-center text-slate-400 mt-3 uppercase tracking-tighter">
        🔒 Professional consultation within 24 hours
      </p>
    </motion.div>
  );
};

export default EnquiryForm;