import { ArrowUpRight } from 'lucide-react';

const CallToAction = ({ onQuoteClick, title = 'Let us move your project forward.', text = 'Tell us about the building, the people it serves and where you are in the planning process.' }) => (
  <section className="px-6 py-10 sm:px-10 lg:px-16 lg:py-16">
    <div className="mx-auto flex max-w-[1312px] flex-col justify-between gap-8 overflow-hidden rounded-[2.5rem] bg-[#1167b1] px-8 py-12 text-white sm:px-12 lg:flex-row lg:items-center lg:px-16 lg:py-16">
      <div>
        <p className="overline text-cyan-100">Start a conversation</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{title}</h2>
        <p className="mt-4 max-w-2xl leading-7 text-blue-50">{text}</p>
      </div>
      <button type="button" onClick={onQuoteClick} className="group inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full bg-white px-7 py-4 text-sm font-extrabold uppercase tracking-wider text-[#07111f] transition hover:bg-cyan-100 lg:self-auto">
        Plan your lift
        <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </button>
    </div>
  </section>
);

export default CallToAction;
