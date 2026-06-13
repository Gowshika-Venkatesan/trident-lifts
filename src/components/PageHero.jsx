const PageHero = ({ eyebrow, title, description, image }) => (
  <section className="relative flex min-h-[570px] items-end overflow-hidden bg-[#07111f] pt-24 text-white">
    <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#07111f] via-[#07111f]/90 to-[#07111f]/20" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-[#07111f]/30" />
    <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-20 sm:px-10 lg:px-16 lg:pb-24">
      <span className="overline text-cyan-300">{eyebrow}</span>
      <h1 className="mt-5 max-w-5xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
        {title}
      </h1>
      <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">{description}</p>
    </div>
  </section>
);

export default PageHero;
