import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <section className="flex min-h-[75vh] items-center justify-center px-6 pt-32 text-center">
    <div>
      <p className="overline">404</p>
      <h1 className="mt-5 font-display text-5xl font-semibold tracking-tight sm:text-7xl">This floor does not exist.</h1>
      <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">The page may have moved, or the address may be incorrect.</p>
      <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#07111f] px-6 py-3.5 font-extrabold text-white">
        <ArrowLeft size={18} /> Return home
      </Link>
    </div>
  </section>
);

export default NotFoundPage;
