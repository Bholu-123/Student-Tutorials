import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HiLocationMarker, HiPhone } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import SectionWrapper from '../common/SectionWrapper';
import Button from '../common/Button';
import {
  validatePersonName,
  validatePhoneRequired,
  validateEmailOptional,
  validateMessageField,
  sanitizeMessage,
} from '../../utils/contactValidation';
import {
  INSTITUTE_MAPS_URL,
  HEAD_OFFICE_ADDRESS,
  DEVRUKH_BRANCH_ADDRESS,
  BRANCH_LOCATIONS,
  CONTACT_PHONES,
  WHATSAPP_CHAT_URL,
} from '../../constants/contactInfo';
import { ENQUIRY_BRANCH_OPTIONS, ENQUIRY_COURSE_OPTIONS } from '../../constants/enquiryCourses';

const INITIAL = {
  name: '',
  parentPhone: '',
  studentPhone: '',
  email: '',
  branch: '',
  course: '',
  board: '',
  medium: '',
  message: '',
};

const INITIAL_FIELD_ERRORS = {
  name: '',
  parentPhone: '',
  studentPhone: '',
  email: '',
  branch: '',
  course: '',
  board: '',
  medium: '',
  message: '',
};

const ENQUIRY_API =
  import.meta.env.VITE_ENQUIRY_API_URL || '/api/submit-enquiry';

const inputErrorClass =
  'border-red-500 dark:border-red-500 focus:ring-red-500 focus:border-red-500';

const Req = () => <span className="text-red-600 dark:text-red-400" aria-hidden> *</span>;

const ContactSection = () => {
  const [searchParams] = useSearchParams();
  const allowedCourseValues = useMemo(
    () => new Set(ENQUIRY_COURSE_OPTIONS.map((o) => o.value)),
    []
  );

  const [form, setForm] = useState(INITIAL);
  const [fieldErrors, setFieldErrors] = useState(INITIAL_FIELD_ERRORS);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const raw = searchParams.get('course');
    if (raw == null || raw === '') return;
    const decoded = decodeURIComponent(raw).trim();
    if (allowedCourseValues.has(decoded)) {
      setForm((prev) => ({ ...prev, course: decoded }));
    }
  }, [searchParams, allowedCourseValues]);

  const handleChange = (e) => {
    const { name } = e.target;
    setForm((prev) => ({ ...prev, [name]: e.target.value }));
    setFieldErrors((prev) => ({ ...prev, [name]: '' }));
    setError('');
  };

  const runValidation = () => {
    const mediumErr = !form.medium.trim() ? 'Please select a medium' : '';
    const branchErr = !form.branch.trim() ? 'Please select a branch' : '';
    const boardErr = !form.board.trim() ? 'Please select a board' : '';
    const errs = {
      name: validatePersonName(form.name),
      parentPhone: validatePhoneRequired(form.parentPhone, "Parent's contact number"),
      studentPhone: validatePhoneRequired(form.studentPhone, "Student's contact number"),
      email: validateEmailOptional(form.email),
      branch: branchErr,
      course: '',
      board: boardErr,
      medium: mediumErr,
      message: validateMessageField(form.message),
    };
    setFieldErrors(errs);
    const first = Object.entries(errs).find(([, v]) => v);
    return first ? first[1] : null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

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
          name: form.name.trim(),
          parentPhone: form.parentPhone.trim(),
          studentPhone: form.studentPhone.trim(),
          email: form.email.trim(),
          branch: form.branch,
          course: form.course.trim(),
          board: form.board,
          medium: form.medium,
          message: cleanMessage,
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
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
    <SectionWrapper id="contact" className="section-stripe-white">
      <h2 className="section-title">Contact Us</h2>
      <div className="title-divider" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                <HiLocationMarker size={18} className="text-brand" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                  Head office
                </p>
                <a
                  href={INSTITUTE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-700 dark:text-gray-300 hover:text-brand cursor-pointer"
                >
                  {HEAD_OFFICE_ADDRESS}
                </a>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                <HiLocationMarker size={18} className="text-brand" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                  Devrukh branch
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{DEVRUKH_BRANCH_ADDRESS}</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                <HiLocationMarker size={18} className="text-brand" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                  Our branches
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{BRANCH_LOCATIONS}</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                <HiPhone size={18} className="text-brand" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                  Phone
                </p>
                <div className="text-sm text-gray-700 dark:text-gray-300 flex flex-col gap-1">
                  {CONTACT_PHONES.map(({ tel, display }) => (
                    <a key={tel} href={`tel:${tel}`} className="hover:text-brand cursor-pointer">
                      {display}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                <FaWhatsapp size={18} className="text-brand" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                  WhatsApp
                </p>
                <a
                  href={WHATSAPP_CHAT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-brand cursor-pointer"
                >
                  9272188068
                </a>
              </div>
            </div>
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

        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 md:p-8">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 pb-4 border-b border-gray-200 dark:border-gray-700">
              <span className="font-semibold text-gray-800 dark:text-gray-200">Required fields</span>
              {' '}are marked with a red asterisk (<Req />
              ). Email and course are optional.
            </p>
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
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                  <Req />
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Full name"
                  autoComplete="name"
                  aria-invalid={!!fe.name}
                  className={`form-input ${fe.name ? inputErrorClass : ''}`}
                />
                {fe.name && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{fe.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Parent&apos;s contact number
                  <Req />
                </label>
                <input
                  name="parentPhone"
                  type="tel"
                  inputMode="numeric"
                  value={form.parentPhone}
                  onChange={handleChange}
                  required
                  placeholder="10-digit mobile"
                  autoComplete="tel"
                  aria-invalid={!!fe.parentPhone}
                  className={`form-input ${fe.parentPhone ? inputErrorClass : ''}`}
                />
                {fe.parentPhone && (
                  <p className="mt-1 text-xs text-red-600 dark:text-red-400">{fe.parentPhone}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Student&apos;s contact number
                  <Req />
                </label>
                <input
                  name="studentPhone"
                  type="tel"
                  inputMode="numeric"
                  value={form.studentPhone}
                  onChange={handleChange}
                  required
                  placeholder="10-digit mobile"
                  autoComplete="tel"
                  aria-invalid={!!fe.studentPhone}
                  className={`form-input ${fe.studentPhone ? inputErrorClass : ''}`}
                />
                {fe.studentPhone && (
                  <p className="mt-1 text-xs text-red-600 dark:text-red-400">{fe.studentPhone}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email ID
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@example.com (optional)"
                  autoComplete="email"
                  aria-invalid={!!fe.email}
                  className={`form-input ${fe.email ? inputErrorClass : ''}`}
                />
                {fe.email && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{fe.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Branch
                  <Req />
                </label>
                <select
                  name="branch"
                  value={form.branch}
                  onChange={handleChange}
                  required
                  aria-invalid={!!fe.branch}
                  className={`form-input ${fe.branch ? inputErrorClass : ''}`}
                >
                  <option value="">Select branch</option>
                  {ENQUIRY_BRANCH_OPTIONS.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                {fe.branch && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{fe.branch}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Course</label>
                <select
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  aria-invalid={!!fe.course}
                  className={`form-input ${fe.course ? inputErrorClass : ''}`}
                >
                  <option value="">Select course (optional)</option>
                  {ENQUIRY_COURSE_OPTIONS.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                {fe.course && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{fe.course}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Board
                  <Req />
                </label>
                <select
                  name="board"
                  value={form.board}
                  onChange={handleChange}
                  required
                  aria-invalid={!!fe.board}
                  className={`form-input ${fe.board ? inputErrorClass : ''}`}
                >
                  <option value="">Select board</option>
                  <option value="State">State</option>
                  <option value="CBSE">CBSE</option>
                </select>
                {fe.board && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{fe.board}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Medium
                  <Req />
                </label>
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
                  <option value="Semi English">Semi English</option>
                </select>
                {fe.medium && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{fe.medium}</p>}
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
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
                    <p className="mt-1 text-xs text-red-600 dark:text-red-400">{fe.message}</p>
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
