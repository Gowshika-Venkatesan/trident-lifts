import { ArrowUpRight, Building, Compass, Wrench } from 'lucide-react';

const About = ({ onQuoteClick }) => (
  <section id="about" className="bg-white px-6 py-24 sm:py-28">
    <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
      <div>
        <span className="eyebrow">Trident Elevating Solutions</span>
        <h2 className="section-title mt-4">
          Bengaluru expertise.
          <span className="block text-blue-700">Built around your building.</span>
        </h2>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
          We help homeowners, architects, developers, hospitals, commercial properties and industrial facilities choose the right vertical mobility solution from the start.
        </p>
        <p className="mt-5 max-w-2xl leading-7 text-slate-500">
          Our approach connects technical planning, cabin design, installation coordination and long-term service in one accountable process.
        </p>
        <button type="button" onClick={onQuoteClick} className="mt-8 inline-flex items-center gap-2 font-extrabold text-blue-700 hover:text-slate-950">
          Discuss your building <ArrowUpRight size={18} />
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { icon: <Compass size={28} />, title: 'Application-first', text: 'Recommendations shaped by traffic, floors, usage, available space and building type.' },
          { icon: <Building size={28} />, title: 'Design-aware', text: 'Cabin, door and finish choices coordinated with the architecture of your property.' },
          { icon: <Wrench size={28} />, title: 'Service-minded', text: 'Maintainability and lifecycle requirements considered before installation begins.' },
        ].map(({ icon, title, text }, index) => (
          <article key={title} className={`rounded-3xl border border-slate-200 p-7 ${index === 2 ? 'bg-slate-950 text-white sm:col-span-2' : 'bg-slate-50'}`}>
            <span className={index === 2 ? 'text-blue-400' : 'text-blue-700'}>{icon}</span>
            <h3 className="mt-5 text-xl font-black">{title}</h3>
            <p className={`mt-3 leading-7 ${index === 2 ? 'text-slate-300' : 'text-slate-600'}`}>{text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default About;
