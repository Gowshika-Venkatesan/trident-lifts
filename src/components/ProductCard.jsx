import { ArrowUpRight } from 'lucide-react';

const ProductCard = ({ title, description, detail, icon, image, onEnquire }) => (
  <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl">
    <div className="relative h-60 overflow-hidden">
      <img src={image} alt={title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 to-transparent" />
      <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-lg">
        {icon}
      </div>
    </div>
    <div className="p-7">
      <h3 className="text-2xl font-black text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
      <p className="mt-4 border-l-2 border-blue-600 pl-4 text-sm leading-6 text-slate-500">{detail}</p>
      <button type="button" onClick={onEnquire} className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-blue-700 hover:text-slate-950">
        Ask about this solution <ArrowUpRight size={17} />
      </button>
    </div>
  </article>
);

export default ProductCard;
