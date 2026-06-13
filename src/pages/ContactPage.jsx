import { Clock3, Mail, MapPin, Phone } from 'lucide-react';
import PageHero from '../components/PageHero';
import EnquiryForm from '../sections/EnquiryForm';
import heroImage from '../assets/It.png';

const ContactPage = () => (
  <>
    <PageHero
      eyebrow="Contact Trident"
      title="Bring us into the conversation."
      description="Whether you are planning a new building, upgrading an existing elevator or looking for service support, begin with the details you already have."
      image={heroImage}
    />

    <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto grid max-w-[1312px] gap-10 lg:grid-cols-[.75fr_1.25fr]">
        <div>
          <p className="overline">Get in touch</p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">A useful first conversation starts with context.</h2>
          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
            Share your building type, number of floors, location, project stage and the kind of support you are looking for.
          </p>

          <div className="mt-10 space-y-4">
            {[
              [<Phone size={21} />, 'Project enquiries', 'Tell us what you are planning and when you need it.'],
              [<Mail size={21} />, 'Service enquiries', 'Share the equipment type and the support required.'],
              [<MapPin size={21} />, 'Site assessment', 'Provide the project location and preferred visit window.'],
              [<Clock3 size={21} />, 'Next step', 'Our team will review the requirement and respond.'],
            ].map(([icon, label, value]) => (
              <div key={label} className="flex gap-4 rounded-2xl bg-white p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1167b1]">{icon}</span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">{label}</p>
                  <p className="mt-1 font-semibold text-slate-700">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-xl shadow-slate-950/5">
          <EnquiryForm />
        </div>
      </div>
    </section>
  </>
);

export default ContactPage;
