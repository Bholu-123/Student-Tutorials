/**
 * Client-side validation (mirror api/validation-enquiry.js for consistent UX).
 */

const BLOCKED_WORDS = [
  'fuck', 'fuk', 'fck', 'shit', 'bitch', 'bastard', 'asshole', 'dick', 'cunt', 'slut', 'whore',
  'nazi', 'kys', 'rape', 'nigger', 'retard',
];

const BLOCKED_PHRASES = ['kill yourself', 'kill urself'];

function normalizeIndianMobile(raw) {
  let s = String(raw).replace(/[\s\-().]/g, '');
  if (s.startsWith('+91')) s = s.slice(3);
  else if (s.startsWith('91') && s.length === 12) s = s.slice(2);
  return s;
}

export function isValidPhone(raw) {
  const s = normalizeIndianMobile(raw);
  if (/^\d{10}$/.test(s) && /^[6-9]\d{9}$/.test(s)) return true;
  const compact = String(raw).replace(/[\s\-().]/g, '');
  if (/^\+[1-9]\d{7,14}$/.test(compact)) return true;
  return false;
}

const EMAIL_RE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export function isValidEmail(email) {
  const e = String(email).trim();
  if (e.length > 254) return false;
  return EMAIL_RE.test(e);
}

export function sanitizeMessage(raw) {
  return String(raw ?? '')
    .replace(/<[^>]*>/g, '')
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 2000);
}

export function messageContainsAbuse(text) {
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

export function validatePersonName(v) {
  const s = String(v ?? '').trim();
  if (s.length < 2) return 'Name is required';
  if (s.length > 120) return 'Name is too long';
  if (/[<>{}[\]\\]/.test(s)) return 'Remove special characters from name';
  return '';
}

/** @deprecated use validatePersonName */
export function validateFirstName(v) {
  const s = String(v ?? '').trim();
  if (s.length < 1) return 'First name is required';
  if (s.length > 80) return 'First name is too long';
  if (/[<>{}[\]\\]/.test(s)) return 'Remove special characters from first name';
  return '';
}

/** @deprecated use validatePersonName */
export function validateLastName(v) {
  const s = String(v ?? '').trim();
  if (s.length < 1) return 'Last name is required';
  if (s.length > 80) return 'Last name is too long';
  if (/[<>{}[\]\\]/.test(s)) return 'Remove special characters from last name';
  return '';
}

export function validateEmailOptional(v) {
  const s = String(v ?? '').trim();
  if (!s) return '';
  if (!isValidEmail(s)) return 'Enter a valid email address';
  return '';
}

export function validatePhoneRequired(v, fieldLabel) {
  if (!String(v ?? '').trim()) return `${fieldLabel} is required`;
  if (!isValidPhone(v)) {
    return 'Enter a valid 10-digit mobile (e.g. 9876543210) or +country code for international';
  }
  return '';
}

/** @deprecated use validatePhoneRequired for explicit labels */
export function validatePhoneField(v) {
  return validatePhoneRequired(v, 'Contact number');
}

export function validateEmailField(v) {
  if (!String(v ?? '').trim()) return 'Email is required';
  if (!isValidEmail(v)) return 'Enter a valid email address';
  return '';
}

export function validateMessageField(v) {
  const clean = sanitizeMessage(v);
  if (messageContainsAbuse(clean)) {
    return 'Your message contains language we cannot accept. Please use respectful wording.';
  }
  return '';
}
