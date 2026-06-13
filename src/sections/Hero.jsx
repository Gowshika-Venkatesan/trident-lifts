import { ArrowRight, CheckCircle2, MapPin, ShieldCheck } from 'lucide-react';
import heroBg from '../assets/Lift.png';

const Hero = ({ onQuoteClick }) => (
  <section id="home" className="relative flex min-h-[760px] items-center overflow-hidden pt-28 lg:min-h-screen">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Contemporary elevator cabin by Trident Elevating Solutions" className="h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/88 to-slate-950/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
    </div>

    <div className="relative mx-auto w-full max-w-7xl px-6 py-24">
      <div className="max-w-3xl">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-200 backdrop-blur">
          <MapPin size={15} />
          Bengaluru, Karnataka
        </div>
        <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Better lifts begin with
          <span className="block text-blue-400">better engineering.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
          New elevator installation, modernization and lifecycle service designed around your building, its people and Bengaluru&apos;s demands.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <button
            type="button"
            onClick={onQuoteClick}
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-2xl shadow-blue-950/40 transition hover:bg-blue-500"
          >
            Plan your lift
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href="#solutions"
            className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-extrabold uppercase tracking-wider text-white backdrop-blur transition hover:bg-white hover:text-slate-950"
          >
            Explore solutions
          </a>
        </div>

        <div className="mt-12 grid max-w-2xl gap-4 border-t border-white/20 pt-7 sm:grid-cols-3">
          {[
            [<ShieldCheck size={19} />, 'Safety-led planning'],
            [<CheckCircle2 size={19} />, 'Tailored specifications'],
            [<CheckCircle2 size={19} />, 'Lifecycle support'],
          ].map(([icon, label]) => (
            <div key={label} className="flex items-center gap-3 text-sm font-semibold text-slate-200">
              <span className="shrink-0 text-blue-400">{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
