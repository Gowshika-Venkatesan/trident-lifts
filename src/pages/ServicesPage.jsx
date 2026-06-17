import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import CallToAction from '../components/CallToAction';
import { services } from '../data/siteData';
import heroImage from '../assets/It.png';
import maintenanceImage from '../assets/ware.png';

const ServicesPage = ({ onQuoteClick }) => (
  <>
    <PageHero
      eyebrow="Lifecycle Services"
      title="Care That Keeps Every Journey Moving."
      description="A complete service relationship spanning planning, installation, preventive maintenance, support and modernization."
      image={heroImage}
    />

    <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1312px]">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="overline">What we do</p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-6xl">One Team across the Elevator Lifecycle.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:pt-12">
            Service quality begins with understanding the equipment, the building and the operational importance of every trip. Each scope is confirmed after the relevant assessment.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <article key={service.title} className={`rounded-[2rem] p-8 sm:p-10 ${index === 0 ? 'bg-[#1167b1] text-white' : 'bg-white'}`}>
              <div>
                <span className={index === 0 ? 'text-cyan-200' : 'text-[#1167b1]'}>{service.icon}</span>
              </div>
              <h3 className="mt-12 font-display text-3xl font-semibold">{service.title}</h3>
              <p className={`mt-4 text-lg leading-8 ${index === 0 ? 'text-blue-50' : 'text-slate-600'}`}>{service.text}</p>
              <button type="button" onClick={onQuoteClick} className={`mt-8 inline-flex items-center gap-2 font-extrabold ${index === 0 ? 'text-white' : 'text-[#1167b1]'}`}>
                Request this service <ArrowUpRight size={18} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto grid max-w-[1312px] overflow-hidden rounded-[2.5rem] bg-[#07111f] text-white lg:grid-cols-2">
        <img src={maintenanceImage} alt="Elevator service environment" className="h-full min-h-[620px] w-full object-cover" />
        <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
          <p className="overline text-cyan-300">Preventive thinking</p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">Maintenance Should Reduce Uncertainty.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            The final maintenance plan should reflect equipment type, usage, environment and operating expectations rather than a one-size-fits-all checklist.
          </p>
          <div className="mt-8 space-y-4">
            {['Scheduled inspection and servicing', 'Equipment condition observations', 'Clear fault reporting channel', 'Recommendations for ageing components'].map((item) => (
              <p key={item} className="flex items-center gap-3 text-slate-200">
                <CheckCircle2 size={18} className="shrink-0 text-cyan-300" /> {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>

    <CallToAction onQuoteClick={onQuoteClick} title="Need installation, maintenance or modernization?" />
  </>
);

export default ServicesPage;
