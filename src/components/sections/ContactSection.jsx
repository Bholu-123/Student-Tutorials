import React, { useState, useRef } from 'react';
import { HiLocationMarker, HiPhone } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import SectionWrapper from '../common/SectionWrapper';
import Button from '../common/Button';
import {
  validateFirstName,
  validateLastName,
  validatePhoneField,
  validateEmailField,
  validateMessageField,
  sanitizeMessage,
} from '../../utils/contactValidation';

const INITIAL = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  medium: '',
  standard: '',
  message: '',
};

const INITIAL_FIELD_ERRORS = {
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

const inputErrorClass =
  'border-red-500 dark:border-red-500 focus:ring-red-500 focus:border-red-500';

const ContactSection = () => {
  const [form, setForm] = useState(INITIAL);
  const [fieldErrors, setFieldErrors] = useState(INITIAL_FIELD_ERRORS);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const honeypotRef = useRef(null);

  const handleChange = (e) => {
    const { name } = e.target;
    setForm((prev) => ({ ...prev, [name]: e.target.value }));
    setFieldErrors((prev) => ({ ...prev, [name]: '' }));
    setError('');
  };

  const runValidation = () => {
    const mediumErr = !form.medium.trim() ? 'Please select a medium' : '';
    const standardErr = !form.standard.trim() ? 'Please select a standard' : '';
    const errs = {
      firstName: validateFirstName(form.firstName),
      lastName: validateLastName(form.lastName),
      phone: validatePhoneField(form.phone),
      email: validateEmailField(form.email),
      medium: mediumErr,
      standard: standardErr,
      message: validateMessageField(form.message),
    };
    setFieldErrors(errs);
    const first = Object.entries(errs).find(([, v]) => v);
    return first ? first[1] : null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (honeypotRef.current?.value) {
      setForm(INITIAL);
      setFieldErrors(INITIAL_FIELD_ERRORS);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      return;
    }

    const firstError = runValidation();
    if (firstError) {
      setError('Please fix the errors below.');
      return;
    }

    const cleanMessage = sanitizeMessage(form.message);

    setLoading(true);
    try {
      const res = await fetch(ENQUIRY_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          medium: form.medium,
          standard: form.standard,
          message: cleanMessage,
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
      setFieldErrors(INITIAL_FIELD_ERRORS);
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

  const fe = fieldErrors;

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
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
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
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4" noValidate>
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
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Enter first name"
                  autoComplete="given-name"
                  aria-invalid={!!fe.firstName}
                  className={`form-input ${fe.firstName ? inputErrorClass : ''}`}
                />
                {fe.firstName && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{fe.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name</label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Enter last name"
                  autoComplete="family-name"
                  aria-invalid={!!fe.lastName}
                  className={`form-input ${fe.lastName ? inputErrorClass : ''}`}
                />
                {fe.lastName && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{fe.lastName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Contact No.</label>
                <input
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="10-digit mobile (e.g. 9876543210)"
                  autoComplete="tel"
                  aria-invalid={!!fe.phone}
                  className={`form-input ${fe.phone ? inputErrorClass : ''}`}
                />
                {fe.phone && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{fe.phone}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email ID</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="name@example.com"
                  autoComplete="email"
                  aria-invalid={!!fe.email}
                  className={`form-input ${fe.email ? inputErrorClass : ''}`}
                />
                {fe.email && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{fe.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Medium</label>
                <select
                  name="medium"
                  value={form.medium}
                  onChange={handleChange}
                  required
                  aria-invalid={!!fe.medium}
                  className={`form-input ${fe.medium ? inputErrorClass : ''}`}
                >
                  <option value="">Select Medium</option>
                  <option value="English Medium">English Medium</option>
                  <option value="Marathi Medium">Marathi Medium</option>
                  <option value="Hindi Medium">Hindi Medium</option>
                </select>
                {fe.medium && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{fe.medium}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Standard</label>
                <select
                  name="standard"
                  value={form.standard}
                  onChange={handleChange}
                  required
                  aria-invalid={!!fe.standard}
                  className={`form-input ${fe.standard ? inputErrorClass : ''}`}
                >
                  <option value="">Select Standard</option>
                  <option value="8th">8th</option>
                  <option value="9th">9th</option>
                  <option value="10th">10th</option>
                </select>
                {fe.standard && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{fe.standard}</p>}
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any questions or remarks… (max 2000 characters, no HTML)"
                  maxLength={2000}
                  aria-invalid={!!fe.message}
                  className={`form-input resize-none ${fe.message ? inputErrorClass : ''}`}
                />
                <div className="flex justify-between gap-2 mt-1">
                  {fe.message ? (
                    <p className="text-xs text-red-600 dark:text-red-400">{fe.message}</p>
                  ) : (
                    <span />
                  )}
                  <span className="text-xs text-gray-500 dark:text-gray-400 tabular-nums">
                    {form.message.length}/2000
                  </span>
                </div>
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
