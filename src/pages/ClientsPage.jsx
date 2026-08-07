import { ArrowUpRight, Building2, Hotel, ShoppingBag, Store } from 'lucide-react';
import CallToAction from '../components/CallToAction';
import PageHero from '../components/PageHero';
import { clients } from '../data/siteData';
import heroImage from '../assets/hero-elevator-luxe.png';

const sectors = [
  {
    icon: <Hotel size={24} />,
    title: 'Hospitality',
    text: 'Guest-first movement for restaurants, hotels and destination spaces.',
  },
  {
    icon: <ShoppingBag size={24} />,
    title: 'Retail',
    text: 'Dependable passenger and service movement shaped around customer flow.',
  },
  {
    icon: <Building2 size={24} />,
    title: 'Commercial',
    text: 'Professional vertical mobility for workplaces and mixed-use properties.',
  },
  {
    icon: <Store size={24} />,
    title: 'Multi-location brands',
    text: 'A consistent planning approach for brands growing across new locations.',
  },
];

const ClientsPage = ({ onQuoteClick }) => (
  <>
    <PageHero
      eyebrow="Our clients"
      title="Trusted Movement for Places People Remember."
      description="We bring technical clarity, refined design and dependable lifecycle support to every relationship."
      image={heroImage}
    />

    <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1312px]">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <p className="overline">Selected showcase</p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Relationships Designed to Go Beyond Handover.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            Every site has its own traffic, architectural and operational demands. Trident brings these requirements together into an elevator solution that can be understood, delivered and supported with confidence.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client, index) => (
            <article
              key={client.id}
              className={`group flex min-h-72 flex-col justify-between rounded-[2rem] border p-7 transition duration-300 hover:-translate-y-1 ${
                index === 0
                  ? 'border-[#1167b1] bg-[#1167b1] text-white'
                  : 'border-slate-200 bg-white text-[#07111f] hover:border-cyan-300 hover:shadow-xl'
              }`}
            >
              <div className="flex min-h-32 items-center justify-center rounded-[1.4rem] bg-white p-6">
                <img src={client.logo} alt={`${client.name} logo`} className="max-h-24 max-w-[85%] object-contain" />
              </div>
              <div className="mt-7 flex items-end justify-between gap-5">
                <div>
                  <p className={`text-xs font-black ${index === 0 ? 'text-cyan-100' : 'text-[#1167b1]'}`}>
                    {client.sector}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{client.name}</h3>
                </div>
                <ArrowUpRight size={20} className={index === 0 ? 'text-cyan-200' : 'text-[#1167b1]'} />
              </div>
            </article>
          ))}

          <article className="flex min-h-72 flex-col justify-between rounded-[2rem] bg-[#e6f3f8] p-8">
            <span className="overline text-[#1167b1]">Your project</span>
            <div>
              <h3 className="font-display text-3xl font-semibold leading-tight">The Next Successful Relationship Can Begin Here.</h3>
              <button type="button" onClick={onQuoteClick} className="link-arrow mt-6">
                Discuss your lift <ArrowUpRight size={18} />
              </button>
            </div>
          </article>
        </div>

      </div>
    </section>

    <section className="bg-white px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1312px]">
        <p className="overline">Where we add value</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector) => (
            <article key={sector.title} className="rounded-[1.8rem] bg-[#f2f3f1] p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#1167b1]">{sector.icon}</span>
              <h3 className="mt-7 font-display text-2xl font-semibold">{sector.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{sector.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <CallToAction
      onQuoteClick={onQuoteClick}
      title="A Better Elevator Relationship Starts with a Better Conversation."
    />
  </>
);

export default ClientsPage;
