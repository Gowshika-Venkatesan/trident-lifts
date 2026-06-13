import { ArrowRight, ArrowUpRight, Check, MoveUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { products, services } from '../data/siteData';
import heroImage from '../assets/Lift.png';
import featureImage from '../assets/Lux.png';
import serviceImage from '../assets/It.png';

const HomePage = ({ onQuoteClick }) => (
  <>
    <section className="relative flex min-h-[780px] items-end overflow-hidden bg-[#07111f] pt-28 text-white lg:min-h-screen">
      <img src={heroImage} alt="Premium Trident elevator interior" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07111f] via-[#07111f]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/90 via-transparent to-[#07111f]/30" />
      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-16 sm:px-10 lg:px-16 lg:pb-20">
        <div className="max-w-4xl">
          <p className="overline text-cyan-300">Trident Elevating Solutions</p>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.94] tracking-[-0.055em] sm:text-7xl lg:text-[6.8rem]">
            Movement,
            <span className="block text-cyan-300">beautifully engineered.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            Elevators shaped around the building, the journey and the people who make it matter.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <button type="button" onClick={onQuoteClick} className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#1167b1] px-7 py-4 text-sm font-extrabold uppercase tracking-wider text-white transition hover:bg-cyan-600">
              Start your project
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            <Link to="/products" className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-extrabold uppercase tracking-wider text-white backdrop-blur transition hover:bg-white hover:text-[#07111f]">
              Explore elevators
            </Link>
          </div>
        </div>

        <div className="mt-14 grid max-w-3xl gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 sm:grid-cols-3">
          {['Application-led planning', 'Refined cabin design', 'Lifecycle support'].map((label) => (
            <div key={label} className="flex items-center gap-3 bg-[#07111f]/65 px-5 py-4 text-sm font-semibold backdrop-blur">
              <Check size={17} className="text-cyan-300" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto grid max-w-[1312px] gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
        <div>
          <p className="overline">Our point of view</p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.04] tracking-tight sm:text-6xl">
            An elevator is part machine, part architecture and entirely human.
          </h2>
        </div>
        <div className="lg:pb-2">
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            We bring technical planning, design coordination, installation and long-term care into one considered process. The result is movement that feels effortless because the thinking behind it was not.
          </p>
          <Link to="/about" className="link-arrow mt-7">
            Discover Trident <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>

    <section className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-[1312px]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="overline">Elevator portfolio</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-6xl">Made for the way you move.</h2>
          </div>
          <Link to="/products" className="link-arrow">
            View every product <ArrowRight size={18} />
          </Link>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((product, index) => (
            <Link key={product.slug} to="/products" className={`image-card group relative overflow-hidden rounded-[2rem] ${index === 0 ? 'lg:col-span-2' : ''}`}>
              <img src={product.image} alt={product.title} className="h-full min-h-[430px] w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
                <p className="overline text-cyan-300">{product.eyebrow}</p>
                <div className="mt-2 flex items-end justify-between gap-5">
                  <h3 className="font-display text-3xl font-semibold sm:text-4xl">{product.title}</h3>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#07111f] transition group-hover:-translate-y-1 group-hover:translate-x-1">
                    <MoveUpRight size={20} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto grid max-w-[1312px] overflow-hidden rounded-[2.5rem] bg-[#07111f] text-white lg:grid-cols-2">
        <div className="p-8 sm:p-12 lg:p-16">
          <p className="overline text-cyan-300">Complete lifecycle care</p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">The relationship continues after handover.</h2>
          <p className="mt-6 leading-8 text-slate-300">
            Installation, preventive maintenance, responsive support and modernization are considered as one connected service journey.
          </p>
          <div className="mt-9 grid gap-3">
            {services.map((service) => (
              <div key={service.title} className="flex items-center justify-between border-b border-white/10 py-4">
                <span className="font-bold">{service.title}</span>
                <span className="text-xs font-black tracking-widest text-cyan-300">{service.number}</span>
              </div>
            ))}
          </div>
          <Link to="/services" className="mt-9 inline-flex items-center gap-2 font-extrabold text-cyan-300 hover:text-white">
            Explore our services <ArrowUpRight size={18} />
          </Link>
        </div>
        <img src={serviceImage} alt="Commercial elevator solution" className="h-full min-h-[560px] w-full object-cover" />
      </div>
    </section>

    <section className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto grid max-w-[1312px] gap-8 lg:grid-cols-[1.15fr_.85fr]">
        <img src={featureImage} alt="Architectural observation elevator" className="h-full min-h-[540px] w-full rounded-[2.5rem] object-cover" />
        <div className="flex flex-col justify-center rounded-[2.5rem] bg-[#e6f3f8] p-8 sm:p-12">
          <p className="overline">Design without compromise</p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">The lift can belong to the architecture.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Materials, lighting, doors, controls and cabin details come together to create an experience that feels intentional from every angle.
          </p>
          <Link to="/gallery" className="link-arrow mt-8">
            Enter the gallery <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>

    <CallToAction onQuoteClick={onQuoteClick} />
  </>
);

export default HomePage;
