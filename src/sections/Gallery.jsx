import { useState } from 'react';
import lux from '../assets/Lux.png';
import it from '../assets/It.png';
import freight from '../assets/frigh.png';
import hotel from '../assets/hotel.png';
import warehouse from '../assets/ware.png';
import home from '../assets/home_lift.png';

const categories = ['All', 'Residential', 'Commercial', 'Industrial'];

const concepts = [
  { id: 1, category: 'Residential', title: 'Luxury home elevator', label: 'Residential concept', image: lux },
  { id: 2, category: 'Commercial', title: 'Office mobility solution', label: 'Commercial concept', image: it },
  { id: 3, category: 'Industrial', title: 'Heavy-duty freight lift', label: 'Industrial concept', image: freight },
  { id: 4, category: 'Commercial', title: 'Hospitality elevator', label: 'Commercial concept', image: hotel },
  { id: 5, category: 'Industrial', title: 'Warehouse goods movement', label: 'Industrial concept', image: warehouse },
  { id: 6, category: 'Residential', title: 'Compact villa elevator', label: 'Residential concept', image: home },
];

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const visibleConcepts = filter === 'All' ? concepts : concepts.filter((item) => item.category === filter);

  return (
    <section id="projects" className="bg-slate-50 px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Design Direction</span>
            <h2 className="section-title mt-4">Solutions imagined for different spaces.</h2>
          </div>
          <div className="flex flex-wrap gap-2" aria-label="Filter solution gallery">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setFilter(category)}
                className={`rounded-full px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider transition ${
                  filter === category ? 'bg-slate-950 text-white' : 'border border-slate-200 bg-white text-slate-600 hover:border-blue-600 hover:text-blue-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-500">
          These images illustrate solution categories. Verified Trident project case studies will be added here with actual locations, specifications and customer approval.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleConcepts.map((item) => (
            <article key={item.id} className="group relative h-[380px] overflow-hidden rounded-3xl bg-slate-900 shadow-lg">
              <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-300">{item.label}</span>
                <h3 className="mt-2 text-2xl font-black">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
