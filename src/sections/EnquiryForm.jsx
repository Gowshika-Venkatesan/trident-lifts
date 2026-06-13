import { useState } from 'react';
import { CheckCircle2, LoaderCircle } from 'lucide-react';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  city: 'Bengaluru',
  service: 'New elevator installation',
  buildingType: 'Residential apartment',
  floors: '',
  message: '',
};

const EnquiryForm = ({ onSuccess }) => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setStatus('loading');
    setError('');

    const endpoint = import.meta.env.VITE_FORM_ENDPOINT;
    if (!endpoint) {
      setStatus('error');
      setError('The enquiry inbox is being connected. Please use the contact details that will be published before launch.');
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'Trident website' }),
      });
      if (!response.ok) throw new Error('Submission failed');
      setStatus('success');
      setForm(initialForm);
      onSuccess?.();
    } catch {
      setStatus('error');
      setError('We could not send your request. Please try again shortly.');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center p-10 text-center">
        <CheckCircle2 size={58} className="text-emerald-600" />
        <h2 id="quote-title" className="mt-6 text-3xl font-black">Request received</h2>
        <p className="mt-3 text-slate-600">Thank you. The Trident team will review your requirements and contact you.</p>
      </div>
    );
  }

  return (
    <div className="p-6 sm:p-9">
      <span className="eyebrow">Project Enquiry</span>
      <h2 id="quote-title" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Tell us about your lift requirement.</h2>
      <p className="mt-3 max-w-xl leading-7 text-slate-600">A few project details help us prepare for a useful first conversation.</p>

      <form onSubmit={submitForm} className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="field-label">
          Full name *
          <input className="field-input" name="name" value={form.name} onChange={updateField} autoComplete="name" required />
        </label>
        <label className="field-label">
          Phone number *
          <input className="field-input" type="tel" name="phone" value={form.phone} onChange={updateField} autoComplete="tel" pattern="[0-9+\-\s()]{8,18}" required />
        </label>
        <label className="field-label">
          Email
          <input className="field-input" type="email" name="email" value={form.email} onChange={updateField} autoComplete="email" />
        </label>
        <label className="field-label">
          Project city *
          <input className="field-input" name="city" value={form.city} onChange={updateField} autoComplete="address-level2" required />
        </label>
        <label className="field-label">
          Requirement *
          <select className="field-input" name="service" value={form.service} onChange={updateField}>
            <option>New elevator installation</option>
            <option>Home elevator</option>
            <option>Maintenance / AMC</option>
            <option>Repair support</option>
            <option>Modernization</option>
          </select>
        </label>
        <label className="field-label">
          Building type *
          <select className="field-input" name="buildingType" value={form.buildingType} onChange={updateField}>
            <option>Residential apartment</option>
            <option>Villa / individual home</option>
            <option>Commercial / office</option>
            <option>Hospital / healthcare</option>
            <option>Hotel / hospitality</option>
            <option>Factory / warehouse</option>
            <option>Other</option>
          </select>
        </label>
        <label className="field-label">
          Floors / stops
          <input className="field-input" name="floors" value={form.floors} onChange={updateField} placeholder="Example: G+4" />
        </label>
        <label className="field-label sm:col-span-2">
          Additional details
          <textarea className="field-input min-h-28 resize-y" name="message" value={form.message} onChange={updateField} placeholder="Shaft size, capacity, project stage or preferred timeline" />
        </label>

        {error && <p className="rounded-xl bg-amber-50 p-4 text-sm font-semibold leading-6 text-amber-800 sm:col-span-2">{error}</p>}

        <div className="sm:col-span-2">
          <button type="submit" disabled={status === 'loading'} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-4 text-sm font-extrabold uppercase tracking-wider text-white transition hover:bg-slate-950 disabled:cursor-wait disabled:opacity-70">
            {status === 'loading' && <LoaderCircle size={18} className="animate-spin" />}
            Send project request
          </button>
          <p className="mt-3 text-center text-xs leading-5 text-slate-500">By submitting, you agree to be contacted about this enquiry.</p>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
