import React, { useState, useRef } from 'react';
import { HiLocationMarker, HiPhone } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import SectionWrapper from '../common/SectionWrapper';
import Button from '../common/Button';

const INITIAL = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  medium: '',
  standard: '',
  message: '',
};

const ENQUIRY_API =
  import.meta.env.VITE_ENQUIRY_API_URL || '/api/submit-enquiry';

const ContactSection = () => {
  const [form, setForm] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const honeypotRef = useRef(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (honeypotRef.current?.value) {
      setForm(INITIAL);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(ENQUIRY_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          phone: form.phone,
          email: form.email,
          medium: form.medium,
          standard: form.standard,
          message: form.message,
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
          _honeypot: honeypotRef.current?.value || '',
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || 'Could not send your request. Please try again.');
        return;
      }

      setForm(INITIAL);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError(
        'Could not reach the server. If you are running locally, use `vercel dev` or deploy to Vercel to enable submissions.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-gray-50 dark:bg-gray-900">
      <h2 className="section-title">Contact Us</h2>
      <div className="title-divider" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Info + Map */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            {[
              {
                Icon: HiLocationMarker,
                label: 'Address',
                content: (
                  <>
                    Ramtirth Markandi near municipal swimming pool,
                    <br />
                    Chiplun, Maharashtra 415605
                  </>
                ),
              },
              {
                Icon: HiPhone,
                label: 'Phone',
                content: (
                  <a href="tel:09272188068" className="hover:text-brand transition-colors">
                    092721 88068
                  </a>
                ),
              },
              {
                Icon: FaWhatsapp,
                label: 'WhatsApp',
                content: (
                  <a
                    href="https://wa.me/919272188068"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand transition-colors"
                  >
                    092721 88068
                  </a>
                ),
              },
            ].map(({ Icon, label, content }) => (
              <div
                key={label}
                className="flex gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-brand" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-0.5">
                    {label}
                  </p>
                  <div className="text-sm text-gray-700 dark:text-gray-300">{content}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl overflow-hidden shadow-sm flex-1 min-h-[200px]">
            <iframe
              title="Student's Tutorial Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.4765683308688!2d73.51952261487844!3d17.532482787991835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc20628f62d7d99%3A0xc04dfd0f00cf52cd!2sStudents%20Tutorial!5e0!3m2!1sen!2sin!4v1642522536115!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ minHeight: '220px', border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 md:p-8">
            {submitted && (
              <div className="mb-5 px-4 py-3 rounded-lg bg-green-50 dark:bg-green-900/30
                              border border-green-200 dark:border-green-700 text-green-700 dark:text-green-300 text-sm">
                Thank you! We'll get back to you shortly.
              </div>
            )}
            {error && (
              <div
                role="alert"
                className="mb-5 px-4 py-3 rounded-lg bg-red-50 dark:bg-red-900/30
                           border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm"
              >
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                ref={honeypotRef}
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="sr-only"
                aria-hidden
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name</label>
                <input name="firstName" value={form.firstName} onChange={handleChange} required placeholder="Enter first name" className="form-input" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name</label>
                <input name="lastName" value={form.lastName} onChange={handleChange} required placeholder="Enter last name" className="form-input" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Contact No.</label>
                <input name="phone" value={form.phone} onChange={handleChange} required placeholder="Enter contact number" className="form-input" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email ID</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Enter email address" className="form-input" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Medium</label>
                <select name="medium" value={form.medium} onChange={handleChange} required className="form-input">
                  <option value="">Select Medium</option>
                  <option>English Medium</option>
                  <option>Marathi Medium</option>
                  <option>Hindi Medium</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Standard</label>
                <select name="standard" value={form.standard} onChange={handleChange} required className="form-input">
                  <option value="">Select Standard</option>
                  <option>8th</option>
                  <option>9th</option>
                  <option>10th</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Any questions or remarks..." className="form-input resize-none" />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" className="w-full sm:w-auto" disabled={loading}>
                  {loading ? 'Sending…' : 'Request a Callback'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
