import React, { useEffect, useState } from 'react';
import { HiX, HiPhone } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { ENQUIRY_COURSE_OPTIONS } from '../../constants/enquiryCourses';
import { PATHS } from '../../routes/paths';
import {
  validatePersonName,
  validatePhoneRequired,
  validateEmailOptional,
  sanitizeMessage,
} from '../../utils/contactValidation';

const ENQUIRY_API =
  import.meta.env.VITE_ENQUIRY_API_URL || '/api/submit-enquiry';

const INITIAL = {
  mobile: '',
  name: '',
  email: '',
  streamClass: '',
};

const CallBackModal = ({ open, onClose }) => {
  const [form, setForm] = useState(INITIAL);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setForm(INITIAL);
      setErr('');
      setDone(false);
    }
  }, [open]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErr('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr('');

    const nameErr = validatePersonName(form.name);
    const phoneErr = validatePhoneRequired(form.mobile, 'Mobile number');
    const emailErr = validateEmailOptional(form.email);
    if (!form.streamClass.trim()) {
      setErr('Please select stream and class.');
      return;
    }
    if (nameErr || phoneErr || emailErr) {
      setErr(nameErr || phoneErr || emailErr);
      return;
    }

    const mobile = form.mobile.trim();
    const msg = sanitizeMessage('Request a call back (Call Us button).');

    setLoading(true);
    try {
      const res = await fetch(ENQUIRY_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          parentPhone: mobile,
          studentPhone: mobile,
          email: form.email.trim(),
          branch: 'Chiplun',
          course: form.streamClass.trim(),
          board: 'State',
          medium: 'English Medium',
          message: msg,
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErr(data.error || 'Could not send your request. Please try again.');
        return;
      }
      setDone(true);
      setTimeout(() => {
        onClose();
      }, 2200);
    } catch {
      setErr(
        'Could not reach the server. If you are running locally, use `vercel dev` or deploy to Vercel to enable submissions.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="callback-modal-title"
    >
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-black/50 cursor-pointer"
        onClick={onClose}
      />
      <div
        className="relative z-[1] w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-gray-700 dark:bg-gray-900 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <h2
            id="callback-modal-title"
            className="font-serif text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl"
          >
            Request a call back
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="cursor-pointer rounded-lg p-1 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            <HiX className="h-6 w-6" />
          </button>
        </div>

        {done ? (
          <p className="text-center text-sm font-medium text-brand-dark dark:text-brand-light">
            Thank you — we will call you back soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Mobile number
              </label>
              <input
                name="mobile"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="Enter your Mobile number"
                value={form.mobile}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Name
              </label>
              <input
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Enter Name"
                value={form.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email address"
                value={form.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Stream and Class
              </label>
              <select
                name="streamClass"
                value={form.streamClass}
                onChange={handleChange}
                className="form-input"
                required
              >
                <option value="">Select Stream and Class</option>
                {ENQUIRY_COURSE_OPTIONS.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">
              By continuing, I agree to all Student&apos;s Tutorial{' '}
              <Link to={PATHS.CONTACT} className="text-brand hover:underline" onClick={onClose}>
                terms and contact policies
              </Link>
              .
            </p>

            {err ? <p className="text-sm text-red-600 dark:text-red-400">{err}</p> : null}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
            >
              <HiPhone className="h-5 w-5" aria-hidden />
              {loading ? 'Sending…' : 'Get a call back'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CallBackModal;
