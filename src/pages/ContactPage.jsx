import { Building2, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import PageHero from '../components/PageHero';
import EnquiryForm from '../sections/EnquiryForm';
import { businessDetails } from '../data/siteData';
import heroImage from '../assets/It.png';

const ContactPage = () => (
  <>
    <PageHero
      eyebrow="Contact Trident"
      title="Bring Us into the Conversation."
      description="Whether you are planning a new building, upgrading an existing elevator or looking for service support, begin with the details you already have."
      image={heroImage}
    />

    <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto grid max-w-[1312px] gap-10 lg:grid-cols-[.75fr_1.25fr]">
        <div>
          <p className="overline">Get in touch</p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">A Useful First Conversation Starts with Context.</h2>
          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
            Share your building type, number of floors, location, project stage and the kind of support you are looking for.
          </p>

          <div className="mt-10 space-y-4">
            {[
              [<Phone size={21} />, 'Customer care', businessDetails.customerCare, `tel:${businessDetails.customerCareHref}`],
              [<MessageCircle size={21} />, 'WhatsApp', businessDetails.whatsapp, `https://wa.me/${businessDetails.whatsappHref}?text=Hello%20Trident%20Elevating%20Solutions%2C%20I%20would%20like%20to%20discuss%20a%20lift%20requirement.`],
              [<Mail size={21} />, 'Email', businessDetails.email, `mailto:${businessDetails.email}`],
            ].map(([icon, label, value, href]) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="flex gap-4 rounded-2xl bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1167b1]">{icon}</span>
                <div>
                  <p className="text-xs font-black text-slate-400">{label}</p>
                  <p className="mt-1 font-semibold text-slate-700">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-xl shadow-slate-950/5">
          <EnquiryForm />
        </div>
      </div>
    </section>

    <section className="bg-white px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1312px]">
        <div className="max-w-3xl">
          <p className="overline">Visit Trident</p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-6xl">Two Locations. One Committed Team.</h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {[
            [<Building2 size={27} />, 'Factory', businessDetails.factoryAddress, businessDetails.factoryMapQuery],
            [<MapPin size={27} />, 'Branch office', businessDetails.branchAddress, businessDetails.branchAddress],
          ].map(([icon, title, address, mapQuery]) => (
            <a
              key={title}
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[2rem] bg-[#f4f6f8] p-8 transition hover:bg-[#e6f3f8] sm:p-10"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#1167b1] shadow-sm">{icon}</span>
              <p className="overline mt-8">{title}</p>
              <h3 className="mt-3 max-w-xl font-display text-2xl font-semibold leading-9">{address}</h3>
              <p className="mt-6 font-extrabold text-[#1167b1]">Open in Google Maps</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default ContactPage;
