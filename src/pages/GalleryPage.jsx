import { useState } from 'react';
import { Camera, MoveUpRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import CallToAction from '../components/CallToAction';
import { galleryItems } from '../data/siteData';
import heroImage from '../assets/Lux.png';

const categories = ['All', 'Residential', 'Commercial', 'Hospitality', 'Industrial'];

const GalleryPage = ({ onQuoteClick }) => {
  const [filter, setFilter] = useState('All');
  const visibleItems = filter === 'All' ? galleryItems : galleryItems.filter((item) => item.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Project Gallery"
        title="Elevators made to be experienced."
        description="A dedicated space for completed Trident installations, cabin details, architectural integration and project stories."
        image={heroImage}
      />

      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1312px]">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="overline">Selected work</p>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-6xl">A growing record of spaces we elevate.</h2>
              <p className="mt-6 max-w-2xl leading-7 text-slate-600">
                Explore premium cabin directions and elevator environments across residential, commercial, hospitality and industrial applications.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`rounded-full px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider transition ${
                    filter === category ? 'bg-[#07111f] text-white' : 'border border-slate-300 bg-transparent text-slate-600 hover:border-[#1167b1] hover:text-[#1167b1]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item) => (
              <article key={item.id} className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#07111f]">
                <img src={item.image} alt={item.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-7 text-white">
                  <div>
                    <p className="overline text-cyan-300">{item.category}</p>
                    <h3 className="mt-2 font-display text-3xl font-semibold">{item.title}</h3>
                    <p className="mt-2 max-w-xs text-sm leading-6 text-slate-300">{item.subtitle}</p>
                    {item.concept && <span className="mt-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest">Design concept</span>}
                  </div>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#07111f]">
                    <MoveUpRight size={20} />
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center rounded-[2rem] border border-slate-200 bg-white px-8 py-14 text-center shadow-sm">
            <Camera size={34} className="text-[#1167b1]" />
            <h3 className="mt-5 font-display text-3xl font-semibold">From design direction to delivered experience.</h3>
            <p className="mt-3 max-w-xl leading-7 text-slate-600">
              Trident works with each project&apos;s architecture, traffic needs and operational goals to shape the right cabin and elevator configuration.
            </p>
          </div>
        </div>
      </section>

      <CallToAction onQuoteClick={onQuoteClick} title="Imagine your project in this gallery." />
    </>
  );
};

export default GalleryPage;
