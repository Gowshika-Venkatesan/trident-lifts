import {
  ArrowUpRight,
  BriefcaseBusiness,
  Compass,
  GraduationCap,
  PenTool,
  ShieldCheck,
  UserRound,
  Wrench,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CallToAction from '../components/CallToAction';
import heroImage from '../assets/hotel.png';
import detailImage from '../assets/premium_lift.png';

const directors = [
  {
    name: 'Lakshmi Narayanan',
    role: 'Founder & Director',
    intro: 'Mechanical engineer and management professional with deep production and elevator manufacturing experience.',
    highlights: [
      'B.E. in Mechanical Engineering and MBA.',
      'More than 10 years of overall production industry experience.',
      'Over 5 years in elevator manufacturing, production processes, quality standards and operations.',
      'Experienced across manufacturing companies in Tamil Nadu and Karnataka.',
      'Proficient in AutoCAD and Unigraphics (NX) for design, development and manufacturing support.',
    ],
  },
  {
    name: 'Mohamed Kasim',
    role: 'Founder & Director',
    intro: 'Elevator industry professional with broad installation exposure across multinational companies and overseas markets.',
    highlights: [
      'Qualified professional with a degree from a recognized university.',
      'More than 15 years of experience in the elevator industry.',
      'Extensive lift installation experience with multiple multinational companies.',
      'Worked across several overseas countries, bringing strong global industry exposure.',
      'Technical expertise supports a strong understanding and application of lift engineering concepts.',
    ],
  },
  {
    name: 'Vikram',
    role: 'Founder & Director',
    intro: 'Mechanical engineer with hands-on expertise across elevator installation, engineering and manufacturing support.',
    highlights: [
      'B.Tech in Mechanical Engineering from a recognized university in Karnataka.',
      'More than 5 years of experience in the elevator industry.',
      'Strong technical proficiency in lift design, manufacturing, production processes and installation management.',
      'Known for practical problem-solving and a deep understanding of elevator systems and technologies.',
      'Contributes to product development, technical support, operational efficiency and successful project execution.',
    ],
  },
];

const AboutPage = ({ onQuoteClick }) => (
  <>
    <PageHero
      eyebrow="About Trident"
      title="Engineering confidence into every journey."
      description="We approach vertical mobility as a long-term responsibility, bringing together technical clarity, thoughtful design and dependable care."
      image={heroImage}
    />

    <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto grid max-w-[1312px] gap-14 lg:grid-cols-2">
        <div>
          <p className="overline">Who we are</p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Built for people who expect more from an elevator company.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-slate-600">
          <p>
            Trident Elevating Solutions helps property owners, architects, developers and facility teams make better vertical mobility decisions.
          </p>
          <p>
            Our role begins before equipment is selected. We study the application, understand the building and connect performance, aesthetics, execution and maintainability into a coherent proposal.
          </p>
          <p>
            The standard is simple: understand the need, communicate clearly, engineer responsibly and remain accountable throughout the equipment lifecycle.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-white px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1312px] gap-5 md:grid-cols-2 lg:grid-cols-4">
        {[
          [<Compass size={28} />, 'Clarity first', 'We simplify complex choices and make the reasoning behind every recommendation visible.'],
          [<PenTool size={28} />, 'Design awareness', 'We consider how the elevator meets the building, not only how it moves through it.'],
          [<ShieldCheck size={28} />, 'Safety mindset', 'Planning, execution and service decisions begin with responsible engineering.'],
          [<Wrench size={28} />, 'Lifecycle thinking', 'Maintainability and future needs are considered from the beginning.'],
        ].map(([icon, title, text], index) => (
          <article key={title} className={`rounded-[2rem] p-8 ${index === 0 ? 'bg-[#1167b1] text-white' : 'bg-[#f2f3f1]'}`}>
            <span className={index === 0 ? 'text-cyan-200' : 'text-[#1167b1]'}>{icon}</span>
            <h3 className="mt-8 font-display text-2xl font-semibold">{title}</h3>
            <p className={`mt-4 leading-7 ${index === 0 ? 'text-blue-50' : 'text-slate-600'}`}>{text}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1312px]">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <p className="overline">Founders & directors</p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Led by hands-on elevator and manufacturing specialists.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            Trident is guided by professionals who combine mechanical engineering, production knowledge, site execution experience and practical leadership across elevator projects.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {directors.map((director, index) => (
            <article
              key={director.name}
              className={`overflow-hidden rounded-[2rem] border ${
                index === 0 ? 'border-[#1167b1] bg-[#1167b1] text-white' : 'border-slate-200 bg-white text-[#07111f]'
              }`}
            >
              <div className={`${index === 0 ? 'bg-[#07111f]/25' : 'bg-[#e6f3f8]'} relative flex aspect-[4/3] items-center justify-center`}>
                <div className={`flex h-28 w-28 items-center justify-center rounded-full border-2 border-dashed ${
                  index === 0 ? 'border-cyan-200/70 bg-white/10 text-cyan-100' : 'border-[#1167b1]/30 bg-white text-[#1167b1]'
                }`}>
                  <UserRound size={48} />
                </div>
                <span className={`absolute bottom-6 rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.16em] ${
                  index === 0 ? 'bg-white text-[#1167b1]' : 'bg-[#07111f] text-white'
                }`}>
                  Photo space
                </span>
              </div>

              <div className="p-7 sm:p-8">
                <p className={`text-xs font-black uppercase tracking-[0.18em] ${index === 0 ? 'text-cyan-100' : 'text-[#1167b1]'}`}>
                  {director.role}
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold">{director.name}</h3>
                <p className={`mt-4 leading-7 ${index === 0 ? 'text-blue-50' : 'text-slate-600'}`}>
                  {director.intro}
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full ${index === 0 ? 'bg-white/10 text-cyan-100' : 'bg-blue-50 text-[#1167b1]'}`}>
                    <GraduationCap size={20} />
                  </span>
                  <span className={`text-sm font-extrabold ${index === 0 ? 'text-white' : 'text-slate-900'}`}>Profile highlights</span>
                </div>

                <ul className="mt-5 space-y-3">
                  {director.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6">
                      <BriefcaseBusiness size={16} className={`mt-1 shrink-0 ${index === 0 ? 'text-cyan-100' : 'text-[#1167b1]'}`} />
                      <span className={index === 0 ? 'text-blue-50' : 'text-slate-600'}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto grid max-w-[1312px] gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <img src={detailImage} alt="Premium elevator cabin detail" className="min-h-[600px] w-full rounded-[2.5rem] object-cover" />
        <div className="lg:pl-10">
          <p className="overline">Our approach</p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">Listen. Study. Engineer. Deliver. Care.</h2>
          <div className="mt-8 space-y-6">
            {[
              ['01', 'Understand the application'],
              ['02', 'Assess the site and constraints'],
              ['03', 'Shape the technical and design proposal'],
              ['04', 'Coordinate installation and handover'],
              ['05', 'Support the equipment lifecycle'],
            ].map(([number, label]) => (
              <div key={number} className="flex items-center gap-5 border-b border-slate-200 pb-5">
                <span className="text-xs font-black tracking-widest text-[#1167b1]">{number}</span>
                <p className="font-display text-xl font-semibold">{label}</p>
              </div>
            ))}
          </div>
          <Link to="/contact" className="link-arrow mt-9">
            Talk to our team <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>

    <CallToAction onQuoteClick={onQuoteClick} title="Build your next journey with Trident." />
  </>
);

export default AboutPage;
