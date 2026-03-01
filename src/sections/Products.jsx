import React from 'react';
import ProductCard from '../components/ProductCard';
import { 
  Users, Home, Building2, Factory, 
  Accessibility, Building, PackageSearch, View, Box 
} from 'lucide-react';
import passengerImg from '../assets/premium_lift.png';
import homeImg from '../assets/home_lift.png';
import hospitalImg from '../assets/hospital_lift.png'; 
import freightImg from '../assets/goods_lift.png';
import { image, p, pre } from 'framer-motion/client';



const Products = () => {
  // AI-Generated Product Descriptions & Niche Categories
  const liftTypes = [
    // --- Original 4 Products ---
    {
      title: "Passenger Lifts",
      description: "Smart, high-speed vertical transit solutions for luxury apartments and high-rise commercial complexes.",
      icon: <Users size={24} />,
      image: passengerImg
    },
    {
      title: "Home Elevators",
      description: "Ultra-quiet, pit-less elevator technology designed specifically for private residences and villas.",
      icon: <Home size={24} />,
      image: homeImg
    },
    {
      title: "Hospital Lifts",
      description: "Engineered for precise floor leveling and spacious cabins to accommodate stretchers and medical equipment.",
      icon: <Building2 size={24} />,
      image: hospitalImg
    },
    {
      title: "Freight & Goods Lifts",
      description: "Robust, heavy-duty engineering built to transport industrial loads with maximum safety and efficiency.",
      icon: <Factory size={24} />,
      image: freightImg
    },

    
    {
      title: "Observation Lifts",
      description: "Architectural masterpieces featuring glass cabins, offering panoramic views while enhancing building aesthetics.",
      icon: <View size={24} />,
      image: passengerImg
    },
    {
      title: "Stair Lifts & Platform Lifts",
      description: "Specialized accessibility solutions for multi-story buildings, ensuring inclusive mobility for all occupants.",
      icon: <Accessibility size={24} />,
      image: homeImg
    },
    {
      title: "Dumbwaiters & Service Lifts",
      description: "Efficient, compact vertical transportation for moving small loads, documents, or food in commercial and hospitality environments.",
      icon: <Box size={24} />,
      image: passengerImg
    },
    {
      title: "Car Elevators",
      description: "Automated vehicle parking and retrieval systems, optimized for space-efficient urban development.",
      icon: <PackageSearch size={24} />,
      image: homeImg
    },
    {
      title: "High-Rise Commercial Lifts",
      description: "Utilizing advanced AI-driven dispatch algorithms and high-speed tech for maximum efficiency in landmark towers.",
      icon: <Building size={24} />,
      image: hospitalImg
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#2563eb] font-bold uppercase tracking-[0.3em] text-xs">Our Product Line</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3">World-Class Solutions</h2>
          <div className="w-20 h-1.5 bg-[#2563eb] mx-auto mt-6 rounded-full" />
        </div>

        {/* Updated Grid for More Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {liftTypes.map((lift, index) => (
            <ProductCard key={index} {...lift} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;