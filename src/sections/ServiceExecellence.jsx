import { ArrowRight, ClipboardCheck, RefreshCw, Settings, Siren } from 'lucide-react';

const services = [
  {
    icon: <ClipboardCheck size={30} />,
    title: 'New Installation',
    text: 'Site assessment, technical selection, design coordination, installation planning and handover.',
  },
  {
    icon: <Settings size={30} />,
    title: 'Preventive Maintenance',
    text: 'Planned inspections and maintenance intended to support safety, reliability and equipment life.',
  },
  {
    icon: <Siren size={30} />,
    title: 'Breakdown Support',
    text: 'A clear service channel for fault reporting, response coordination and corrective work.',
  },
  {
    icon: <RefreshCw size={30} />,
    title: 'Modernization',
    text: 'Assessment-led upgrades for ageing controls, drives, fixtures, doors, cabins and safety systems.',
  },
];

const ServiceExcellence = ({ onQuoteClick }) => (
  <section id="services" className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white sm:py-28">
    <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-700/20 blur-3xl" />
    <div className="relative mx-auto max-w-7xl">
      <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-36">
          <span className="eyebrow text-blue-400">Lifecycle Services</span>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Service should be designed in,
            <span className="block text-slate-400">not added later.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Trident brings installation, maintenance and modernization into one clear service journey, with the scope shaped around your building and equipment.
          </p>
          <button type="button" onClick={onQuoteClick} className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-extrabold uppercase tracking-wider transition hover:bg-blue-500">
            Request service consultation <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {services.map(({ icon, title, text }, index) => (
            <article key={title} className={`rounded-3xl border p-7 sm:p-8 ${index === 0 ? 'border-blue-500 bg-blue-600' : 'border-white/10 bg-white/[0.04]'}`}>
              <span className={index === 0 ? 'text-white' : 'text-blue-400'}>{icon}</span>
              <h3 className="mt-7 text-2xl font-black">{title}</h3>
              <p className={`mt-3 leading-7 ${index === 0 ? 'text-blue-50' : 'text-slate-400'}`}>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ServiceExcellence;
