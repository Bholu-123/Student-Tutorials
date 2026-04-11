/**
 * Server-side validation & sanitization for contact enquiries.
 * Keep in sync with src/utils/contactValidation.js for UX parity.
 */

const TIMEZONE = process.env.ENQUIRY_TIMEZONE || 'Asia/Kolkata';

/** Output like: Sun 5 Apr 1:27pm (IST by default) */
function formatSubmittedAt(date = new Date()) {
  const f = new Intl.DateTimeFormat('en-GB', {
    timeZone: TIMEZONE,
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
  const parts = f.formatToParts(date);
  const get = (t) => parts.find((p) => p.type === t)?.value ?? '';
  const wd = get('weekday');
  const day = get('day');
  const month = get('month');
  const hour = get('hour');
  const minute = get('minute');
  const ap = (get('dayPeriod') || '').toLowerCase();
  return `${wd} ${day} ${month} ${hour}:${minute}${ap}`;
}

function normalizeIndianMobile(raw) {
  let s = String(raw).replace(/[\s\-().]/g, '');
  if (s.startsWith('+91')) s = s.slice(3);
  else if (s.startsWith('91') && s.length === 12) s = s.slice(2);
  return s;
}

function isValidPhone(raw) {
  const s = normalizeIndianMobile(raw);
  if (/^\d{10}$/.test(s) && /^[6-9]\d{9}$/.test(s)) return true;
  const compact = String(raw).replace(/[\s\-().]/g, '');
  if (/^\+[1-9]\d{7,14}$/.test(compact)) return true;
  return false;
}

const EMAIL_RE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

function isValidEmail(email) {
  const e = String(email).trim();
  if (e.length > 254) return false;
  return EMAIL_RE.test(e);
}

function sanitizeMessage(raw) {
  let s = String(raw ?? '')
    .replace(/<[^>]*>/g, '')
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return s.slice(0, 2000);
}

/** Single words: word boundaries. Phrases: substring after normalizing spaces. */
const BLOCKED_WORDS = [
  'fuck', 'fuk', 'fck', 'shit', 'bitch', 'bastard', 'asshole', 'dick', 'cunt', 'slut', 'whore',
  'nazi', 'kys', 'rape', 'nigger', 'retard',
];

const BLOCKED_PHRASES = ['kill yourself', 'kill urself'];

function messageContainsAbuse(text) {
  const lower = text.toLowerCase().replace(/\s+/g, ' ');
  for (const phrase of BLOCKED_PHRASES) {
    if (lower.includes(phrase)) return true;
  }
  for (const term of BLOCKED_WORDS) {
    const esc = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (new RegExp(`\\b${esc}\\b`, 'i').test(lower)) return true;
  }
  return false;
}

function validateName(raw, label) {
  const s = String(raw ?? '').trim();
  if (s.length < 2 || s.length > 120) return `${label} must be 2–120 characters`;
  if (/[<>{}[\]\\]/.test(s)) return `${label} contains invalid characters`;
  return null;
}

function validateEnquiry(body) {
  if (!body || typeof body !== 'object') return { error: 'Invalid request' };

  const {
    name,
    parentPhone,
    studentPhone,
    email = '',
    medium,
    branch,
    course = '',
    message = '',
  } = body;

  if (!name || !parentPhone || !studentPhone || !medium || !branch) {
    return { error: 'Please fill all required fields' };
  }

  let err = validateName(name, 'Name');
  if (err) return { error: err };

  if (!isValidPhone(parentPhone)) {
    return { error: "Enter a valid parent's phone (10-digit Indian mobile or +country code)" };
  }
  if (!isValidPhone(studentPhone)) {
    return { error: "Enter a valid student's phone (10-digit Indian mobile or +country code)" };
  }

  const emailTrim = String(email).trim();
  if (emailTrim && !isValidEmail(emailTrim)) {
    return { error: 'Enter a valid email address' };
  }

  const cleanMessage = sanitizeMessage(message);
  if (messageContainsAbuse(cleanMessage)) {
    return { error: 'Your message contains language we cannot accept. Please revise and try again.' };
  }

  return {
    clean: {
      name: String(name).trim().slice(0, 120),
      parentPhone: String(parentPhone).trim().slice(0, 32),
      studentPhone: String(studentPhone).trim().slice(0, 32),
      email: emailTrim.slice(0, 254),
      medium: String(medium).trim().slice(0, 64),
      branch: String(branch).trim().slice(0, 64),
      course: String(course).trim().slice(0, 64),
      message: cleanMessage,
    },
  };
}

module.exports = {
  formatSubmittedAt,
  isValidPhone,
  isValidEmail,
  sanitizeMessage,
  messageContainsAbuse,
  validateEnquiry,
};
