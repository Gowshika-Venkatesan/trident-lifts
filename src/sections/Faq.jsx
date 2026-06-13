import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const questions = [
  {
    question: 'Which elevator is suitable for my building?',
    answer: 'That depends on building type, number of floors, expected traffic, available shaft space, capacity, usage pattern and budget. Trident begins with these requirements before recommending a configuration.',
  },
  {
    question: 'Can a lift be added to an existing home or building?',
    answer: 'Often yes, but feasibility depends on the available space, structure, access, pit and overhead conditions, electrical provision and applicable approvals. A site assessment is the correct first step.',
  },
  {
    question: 'What information is needed for an initial proposal?',
    answer: 'Share the project location, building type, number of floors or stops, preferred capacity, approximate shaft dimensions if available, project stage and expected timeline.',
  },
  {
    question: 'Do you provide maintenance and modernization?',
    answer: 'Yes. The website now supports enquiries for preventive maintenance, repairs and modernization in addition to new installation. Final service coverage and scope are confirmed after equipment and location assessment.',
  },
  {
    question: 'How long does installation take?',
    answer: 'The timeline varies by lift type, number of stops, customization, manufacturing scope, site readiness and approvals. A project-specific schedule should be issued with the final proposal.',
  },
  {
    question: 'Can the elevator cabin be customized?',
    answer: 'Cabin walls, flooring, ceilings, lighting, doors, fixtures and selected accessibility features can be discussed according to the chosen system and technical constraints.',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-white px-6 py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <span className="eyebrow">Frequently Asked Questions</span>
          <h2 className="section-title mt-4">Good decisions start with clear answers.</h2>
          <p className="mt-6 leading-7 text-slate-600">
            This section will grow into a practical planning resource for homeowners, architects and property teams.
          </p>
        </div>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-black text-slate-950">{item.question}</span>
                  <ChevronDown size={21} className={`shrink-0 text-blue-700 transition ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && <p className="max-w-3xl pb-7 leading-7 text-slate-600">{item.answer}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
