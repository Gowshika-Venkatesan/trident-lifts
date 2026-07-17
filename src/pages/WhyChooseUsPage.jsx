import {
  ArrowUpRight,
  BadgeCheck,
  Gauge,
  Handshake,
  PenTool,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import CallToAction from '../components/CallToAction';
import PageHero from '../components/PageHero';
import heroImage from '../assets/hero-elevator-luxe.png';

const reasons = [
  {
    number: '01',
    title: 'Requirement-first Planning',
    text: 'We study the building, user flow, number of stops, duty expectations and site conditions before suggesting a lift configuration.',
    proof: 'The recommendation is based on use, not guesswork.',
  },
  {
    number: '02',
    icon: <PenTool size={25} />,
    title: 'Design and Engineering Coordination',
    text: 'Cabin finishes, doors, controls, lighting, shaft requirements and installation details are considered together, not separately.',
    proof: 'The lift feels connected to the building.',
  },
  {
    number: '03',
    icon: <ShieldCheck size={25} />,
    title: 'Safety-minded Execution',
    text: 'Installation decisions are guided by responsible engineering, site readiness, testing discipline and long-term maintainability.',
    proof: 'Execution stays practical, disciplined and site-aware.',
  },
  {
    number: '04',
    icon: <Wrench size={25} />,
    title: 'Lifecycle Support',
    text: 'Our responsibility continues through maintenance, service guidance, modernization planning and practical technical support.',
    proof: 'Support continues after the handover.',
  },
  {
    number: '05',
    icon: <Gauge size={25} />,
    title: 'Manufacturing Understanding',
    text: 'The team brings production, quality and elevator manufacturing knowledge that helps turn concepts into reliable equipment.',
    proof: 'Production and quality thinking shape the solution.',
  },
  {
    number: '06',
    icon: <Handshake size={25} />,
    title: 'Clear Communication',
    text: 'We keep the process understandable for owners, architects, builders and facility teams, from first discussion to handover.',
    proof: 'Every stakeholder knows what is happening next.',
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
      <div className="mx-auto max-w-[1312px]">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="overline">Built around trust</p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              A Better Lift Starts with Better Thinking.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We do not treat elevators as a catalogue choice. We connect the requirement, site, design, installation and service journey before recommending the right path.
            </p>
            <button type="button" onClick={onQuoteClick} className="link-arrow mt-8">
              Start with your requirement <ArrowUpRight size={18} />
            </button>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white">
            {reasons.map((reason) => (
              <article key={reason.title} className="grid gap-6 border-b border-slate-200 p-7 last:border-0 sm:grid-cols-[5rem_1fr] sm:p-9">
                <div>
                  <span className="font-display text-4xl font-semibold text-[#1167b1]">{reason.number}</span>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    {reason.icon && <span className="text-[#1167b1]">{reason.icon}</span>}
                    <h3 className="font-display text-2xl font-semibold">{reason.title}</h3>
                  </div>
                  <p className="mt-4 text-lg leading-8 text-slate-600">{reason.text}</p>
                  <p className="mt-4 rounded-2xl bg-[#e6f3f8] px-5 py-4 font-semibold text-[#0b3f6c]">{reason.proof}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-[#07111f] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto grid max-w-[1312px] gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="overline text-cyan-300">How we work</p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-6xl">
            Practical Steps. Professional Delivery.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Every project moves through a clear path so the elevator decision is easier to understand and easier to execute.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-0 h-full w-px bg-white/15" />
          <div className="space-y-5">
            {process.map((item, index) => (
              <div key={item} className="relative flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-5">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-300 font-black text-[#07111f]">
                  {index + 1}
                </span>
                <div>
                  <p className="font-display text-2xl font-semibold text-white">{item}</p>
                  <p className="mt-2 leading-7 text-slate-400">
                    {index === 0 && 'The project starts with usage, capacity, movement pattern and expected comfort.'}
                    {index === 1 && 'Site realities are reviewed early so the proposal stays practical.'}
                    {index === 2 && 'The lift type, capacity, finishes and technical details are shaped together.'}
                    {index === 3 && 'Design and installation details are aligned before execution pressure begins.'}
                    {index === 4 && 'The handover is treated as the beginning of the service relationship.'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1312px]">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ['For owners', 'A clearer way to compare lift options, budgets, timelines and long-term service responsibilities.'],
            ['For architects and builders', 'Better coordination around shaft planning, cabin intent, finishes, doors and installation requirements.'],
            ['For facility teams', 'A practical support relationship focused on uptime, maintainability and timely service guidance.'],
          ].map(([title, text]) => (
            <article key={title} className="rounded-[2rem] border border-slate-200 bg-white p-8">
              <BadgeCheck size={26} className="text-[#1167b1]" />
              <h3 className="mt-7 font-display text-3xl font-semibold">{title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
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
