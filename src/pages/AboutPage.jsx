import { ArrowUpRight, Compass, PenTool, ShieldCheck, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CallToAction from '../components/CallToAction';
import heroImage from '../assets/hotel.png';
import detailImage from '../assets/premium_lift.png';

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
