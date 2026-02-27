import React from 'react'
import Navbar from './sections/Navbar'
import EnquiryForm from './sections/EnquiryForm'
import Products from './sections/Products'
import Stats from './sections/Stats' 
import FloatingContact from './components/FloatingContact'
import ClientLogos from './sections/ClientLogos';
import Footer from './sections/Footer'
import ServiceExcellence from './sections/ServiceExecellence';
import Testimonials from './sections/Testimonials';
import Gallery from './sections/Gallery'

function App() {
  return (
    /* Added overflow-hidden on main to prevent mobile horizontal scrolling */
    <main className="relative min-h-screen bg-white pb-20 overflow-x-hidden">
      <Navbar />
      
      {/* HERO SECTION - Updated for Mobile Padding */}
      <section className="relative pt-32 md:pt-40 pb-16 px-6 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-center lg:text-left">
            <span className="text-[#2563eb] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
              Elevating India's Infrastructure
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Modern Lifts for <span className="text-[#2563eb]">Modern Living.</span>
            </h1>
            <p className="text-slate-600 text-base md:text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Trident Elevating Solutions provides world-class elevator technology with a focus on safety and durability.
            </p>
          </div>

          {/* Form remains centered on mobile, right-aligned on desktop */}
          <div className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0">
             <EnquiryForm />
          </div>
        </div>
      </section>

      {/* 2. Place Stats here for trust building */}
      <Stats />
      <ClientLogos />
      <Products />
      <ServiceExcellence />
      <Gallery />
      <Testimonials />
      <Footer />
      
      <FloatingContact />
    </main>
  )
}

export default App