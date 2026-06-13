import { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import PageHero from '../components/PageHero';
import CallToAction from '../components/CallToAction';
import { faqs } from '../data/siteData';
import heroImage from '../assets/hospital_lift.png';

const FaqPage = ({ onQuoteClick }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <PageHero
        eyebrow="Planning FAQ"
        title="Clear answers before important decisions."
        description="A practical starting point for homeowners, architects, developers and property teams planning elevator work."
        image={heroImage}
      />

      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1312px] gap-14 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <MessageCircleQuestion size={36} className="text-[#1167b1]" />
            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight sm:text-5xl">Start with the right questions.</h2>
            <p className="mt-5 leading-7 text-slate-600">
              Final specifications, feasibility, pricing and timelines require project information and, where relevant, a site assessment.
            </p>
            <button type="button" onClick={onQuoteClick} className="link-arrow mt-8">
              Ask about your project
            </button>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white px-6 sm:px-9">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <article key={item.question} className="border-b border-slate-200 last:border-0">
                  <button type="button" onClick={() => setOpenIndex(isOpen ? -1 : index)} className="flex w-full items-center justify-between gap-6 py-7 text-left" aria-expanded={isOpen}>
                    <span className="font-display text-xl font-semibold sm:text-2xl">{item.question}</span>
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition ${isOpen ? 'rotate-180 bg-[#1167b1] text-white' : 'bg-slate-100 text-slate-700'}`}>
                      <ChevronDown size={19} />
                    </span>
                  </button>
                  {isOpen && <p className="max-w-3xl pb-8 text-lg leading-8 text-slate-600">{item.answer}</p>}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CallToAction onQuoteClick={onQuoteClick} title="Your building may need a more specific answer." />
    </>
  );
};

export default FaqPage;
