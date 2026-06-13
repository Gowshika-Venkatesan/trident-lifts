import { ArrowUpRight, Check } from 'lucide-react';
import PageHero from '../components/PageHero';
import CallToAction from '../components/CallToAction';
import { products } from '../data/siteData';
import heroImage from '../assets/premium_lift.png';

const ProductsPage = ({ onQuoteClick }) => (
  <>
    <PageHero
      eyebrow="Elevator Portfolio"
      title="A solution for every kind of movement."
      description="From private homes to demanding industrial environments, each elevator is considered as a response to a specific building and use case."
      image={heroImage}
    />

    <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1312px]">
        <div className="max-w-3xl">
          <p className="overline">Our products</p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Select the application. We will help shape the right configuration.
          </h2>
        </div>

        <div className="mt-16 space-y-7">
          {products.map((product, index) => (
            <article key={product.slug} id={product.slug} className="grid overflow-hidden rounded-[2.5rem] bg-white shadow-sm lg:grid-cols-2">
              <div className={`relative min-h-[480px] ${index % 2 ? 'lg:order-2' : ''}`}>
                <img src={product.image} alt={product.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#1167b1] shadow-xl">
                  {product.icon}
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                <p className="overline">{product.eyebrow}</p>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{product.title}</h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">{product.description}</p>
                <p className="mt-5 leading-7 text-slate-500">{product.detail}</p>
                <div className="mt-8 grid gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-2">
                  {['Application assessment', 'Cabin design options', 'Technical configuration', 'Service planning'].map((item) => (
                    <span key={item} className="flex items-center gap-2">
                      <Check size={16} className="text-[#1167b1]" /> {item}
                    </span>
                  ))}
                </div>
                <button type="button" onClick={onQuoteClick} className="link-arrow mt-9 self-start">
                  Discuss this elevator <ArrowUpRight size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <CallToAction onQuoteClick={onQuoteClick} title="Not sure which elevator fits?" text="Share your building type, number of floors and expected usage. We will help you begin with the right questions." />
  </>
);

export default ProductsPage;
