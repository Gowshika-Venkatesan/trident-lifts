import {
  ArrowUpRight,
  BadgeCheck,
  ClipboardCheck,
  Gauge,
  Handshake,
  PenTool,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import CallToAction from '../components/CallToAction';
import PageHero from '../components/PageHero';
import heroImage from '../assets/hero-elevator-luxe.png';
import detailImage from '../assets/observation-glass-lift.png';

const reasons = [
  {
    icon: <ClipboardCheck size={25} />,
    title: 'Requirement-first Planning',
    text: 'We study the building, user flow, number of stops, duty expectations and site conditions before suggesting a lift configuration.',
  },
  {
    icon: <PenTool size={25} />,
    title: 'Design and Engineering Coordination',
    text: 'Cabin finishes, doors, controls, lighting, shaft requirements and installation details are considered together, not separately.',
  },
  {
    icon: <ShieldCheck size={25} />,
    title: 'Safety-minded Execution',
    text: 'Installation decisions are guided by responsible engineering, site readiness, testing discipline and long-term maintainability.',
  },
  {
    icon: <Wrench size={25} />,
    title: 'Lifecycle Support',
    text: 'Our responsibility continues through maintenance, service guidance, modernization planning and practical technical support.',
  },
  {
    icon: <Gauge size={25} />,
    title: 'Manufacturing Understanding',
    text: 'The team brings production, quality and elevator manufacturing knowledge that helps turn concepts into reliable equipment.',
  },
  {
    icon: <Handshake size={25} />,
    title: 'Clear Communication',
    text: 'We keep the process understandable for owners, architects, builders and facility teams, from first discussion to handover.',
  },
];

const process = [
  'Understand the application and users',
  'Review site conditions and constraints',
  'Recommend the right technical configuration',
  'Coordinate design, materials and execution details',
  'Install, test, hand over and support the lift',
];

const WhyChooseUsPage = ({ onQuoteClick }) => (
  <>
    <PageHero
      eyebrow="Why Choose Us"
      title="Elevator Decisions Need Clarity, Care and Accountability."
      description="Trident brings practical engineering, design awareness and lifecycle thinking into one focused elevator relationship."
      image={heroImage}
    />

    <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto grid max-w-[1312px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
        <div>
          <p className="overline">Built around trust</p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            A Better Lift Starts with Better Thinking.
          </h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-slate-600">
          Choosing an elevator company is not only about the product. It is about how the requirement is understood, how the site is handled, how the installation is coordinated and how the equipment is supported after handover.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason, index) => (
          <article
            key={reason.title}
            className={`rounded-[2rem] p-8 transition hover:-translate-y-1 ${
              index === 0 ? 'bg-[#1167b1] text-white shadow-xl shadow-blue-950/15' : 'bg-white text-[#07111f] shadow-sm'
            }`}
          >
            <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${index === 0 ? 'bg-white/10 text-cyan-100' : 'bg-blue-50 text-[#1167b1]'}`}>
              {reason.icon}
            </span>
            <h3 className="mt-7 font-display text-2xl font-semibold">{reason.title}</h3>
            <p className={`mt-4 leading-7 ${index === 0 ? 'text-blue-50' : 'text-slate-600'}`}>{reason.text}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto grid max-w-[1312px] overflow-hidden rounded-[2.5rem] bg-[#07111f] text-white lg:grid-cols-[.95fr_1.05fr]">
        <img src={detailImage} alt="Front-facing glass observation lift" className="h-full min-h-[620px] w-full object-cover" />
        <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
          <p className="overline text-cyan-300">How we work</p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Practical Steps. Professional Delivery.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Every project moves through a clear path so the elevator decision is easier to understand and easier to execute.
          </p>
          <div className="mt-9 space-y-4">
            {process.map((item) => (
              <div key={item} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <BadgeCheck size={20} className="mt-0.5 shrink-0 text-cyan-300" />
                <p className="font-semibold text-slate-100">{item}</p>
              </div>
            ))}
          </div>
          <button type="button" onClick={onQuoteClick} className="mt-9 inline-flex items-center gap-2 self-start font-extrabold text-cyan-300 hover:text-white">
            Start with your requirement <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>

    <section className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1312px] gap-6 lg:grid-cols-3">
        {[
          ['For owners', 'A clearer way to compare lift options, budgets, timelines and long-term service responsibilities.'],
          ['For architects and builders', 'Better coordination around shaft planning, cabin intent, finishes, doors and installation requirements.'],
          ['For facility teams', 'A practical support relationship focused on uptime, maintainability and timely service guidance.'],
        ].map(([title, text]) => (
          <article key={title} className="rounded-[2rem] border border-slate-200 bg-white p-8">
            <h3 className="font-display text-3xl font-semibold">{title}</h3>
            <p className="mt-4 leading-7 text-slate-600">{text}</p>
          </article>
        ))}
      </div>
    </section>

    <CallToAction
      onQuoteClick={onQuoteClick}
      title="Choose a Lift Partner Who Thinks beyond the Equipment."
      text="Tell us about the building, the people using it and the stage of your project. We will help you begin with the right elevator decision."
    />
  </>
);

export default WhyChooseUsPage;
