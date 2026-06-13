import { ArrowRight } from 'lucide-react';

const steps = [
  ['01', 'Tell us about the building', 'Share the location, building type, number of floors, expected usage and project stage.'],
  ['02', 'Site and requirement study', 'We assess the available space, movement needs, access, civil readiness and relevant constraints.'],
  ['03', 'Technical proposal', 'You receive a suitable configuration, scope, design direction and commercial proposal.'],
  ['04', 'Execution and handover', 'The approved solution moves through coordination, installation, testing and handover.'],
  ['05', 'Ongoing care', 'A suitable maintenance plan supports performance throughout the equipment lifecycle.'],
];

const Process = ({ onQuoteClick }) => (
  <section className="bg-white px-6 py-24 sm:py-28">
    <div className="mx-auto max-w-7xl">
      <div className="max-w-3xl">
        <span className="eyebrow">How It Works</span>
        <h2 className="section-title mt-4">A clear path from first conversation to first ride.</h2>
      </div>
      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 md:grid-cols-5">
        {steps.map(([number, title, text]) => (
          <article key={number} className="bg-white p-7">
            <span className="text-sm font-black tracking-widest text-blue-700">{number}</span>
            <h3 className="mt-7 text-lg font-black leading-6">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
          </article>
        ))}
      </div>
      <button type="button" onClick={onQuoteClick} className="mt-9 inline-flex items-center gap-2 font-extrabold text-blue-700 hover:text-slate-950">
        Start with your requirements <ArrowRight size={18} />
      </button>
    </div>
  </section>
);

export default Process;
