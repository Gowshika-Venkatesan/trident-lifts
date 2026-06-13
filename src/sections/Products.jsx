import { Accessibility, Building2, Factory, HeartPulse, Home, Users } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import passengerImg from '../assets/premium_lift.png';
import homeImg from '../assets/home_lift.png';
import hospitalImg from '../assets/hospital_lift.png';
import freightImg from '../assets/goods_lift.png';
import observationImg from '../assets/Lux.png';
import commercialImg from '../assets/It.png';

const liftTypes = [
  {
    title: 'Passenger Elevators',
    description: 'Comfortable, efficient mobility for apartments, offices, hotels and mixed-use buildings.',
    detail: 'Configured around traffic, capacity, travel and interior requirements.',
    icon: <Users size={24} />,
    image: passengerImg,
  },
  {
    title: 'Home Elevators',
    description: 'Compact, elegant lift solutions for villas, bungalows and existing residences.',
    detail: 'Options can be assessed for space, civil work, access and desired finishes.',
    icon: <Home size={24} />,
    image: homeImg,
  },
  {
    title: 'Hospital Elevators',
    description: 'Purpose-planned movement for patients, stretchers, attendants and medical teams.',
    detail: 'Door width, cabin dimensions, levelling and operational flow are carefully considered.',
    icon: <HeartPulse size={24} />,
    image: hospitalImg,
  },
  {
    title: 'Goods & Freight Lifts',
    description: 'Robust vertical transport for factories, warehouses, kitchens and commercial operations.',
    detail: 'Designed around load, loading method, duty cycle and site conditions.',
    icon: <Factory size={24} />,
    image: freightImg,
  },
  {
    title: 'Observation Elevators',
    description: 'Panoramic elevator concepts that turn vertical movement into an architectural feature.',
    detail: 'Glass, structure, lighting and finishes coordinated with the building design.',
    icon: <Building2 size={24} />,
    image: observationImg,
  },
  {
    title: 'Accessibility Solutions',
    description: 'Practical mobility solutions for elderly users, wheelchair users and inclusive buildings.',
    detail: 'A site assessment helps determine the most appropriate platform or lift configuration.',
    icon: <Accessibility size={24} />,
    image: commercialImg,
  },
];

const Products = ({ onQuoteClick }) => (
  <section id="solutions" className="bg-slate-50 px-6 py-24 sm:py-28">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
        <div>
          <span className="eyebrow">Elevator Solutions</span>
          <h2 className="section-title mt-4 max-w-3xl">The right lift for every kind of movement.</h2>
        </div>
        <p className="max-w-md leading-7 text-slate-600">
          Each solution begins with a technical discussion. Final specifications depend on your building, applicable requirements and site survey.
        </p>
      </div>

      <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {liftTypes.map((lift) => (
          <ProductCard key={lift.title} {...lift} onEnquire={onQuoteClick} />
        ))}
      </div>
    </div>
  </section>
);

export default Products;
