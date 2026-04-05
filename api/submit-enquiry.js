/**
 * Vercel Node serverless: append enquiry row to Google Sheets.
 *
 * Setup (once):
 * 1. Google Cloud Console → new project → enable "Google Sheets API".
 * 2. IAM → Service Accounts → create key (JSON). Copy client_email + private_key.
 * 3. Open your Sheet → Share → add the service account email as Editor.
 * 4. Copy the Sheet ID from the URL: docs.google.com/spreadsheets/d/{SHEET_ID}/edit
 * 5. Row 1 in the sheet: headers (optional but recommended):
 *    Submitted At | First Name | Last Name | Phone | Email | Medium | Standard | Message | Page URL
 * 6. Vercel → Project → Settings → Environment Variables:
 *    GOOGLE_SHEET_ID, GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_TAB (optional, default Sheet1)
 */

const { google } = require('googleapis');
const {
  formatSubmittedAt,
  validateEnquiry,
} = require('./validation-enquiry');

/** A1 range: quote tab names with spaces/special chars (Sheets API). */
function sheetA1Range(tabName, cols) {
  const name = String(tabName).trim();
  const needsQuotes = /[^A-Za-z0-9_]/.test(name);
  const escaped = name.replace(/'/g, "''");
  const sheet = needsQuotes ? `'${escaped}'` : name;
  return `${sheet}!${cols}`;
}

function getSheetsClient() {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const rawKey = process.env.GOOGLE_PRIVATE_KEY;
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!clientEmail || !rawKey || !sheetId) {
    const missing = [
      !clientEmail && 'GOOGLE_CLIENT_EMAIL',
      !rawKey && 'GOOGLE_PRIVATE_KEY',
      !sheetId && 'GOOGLE_SHEET_ID',
    ].filter(Boolean);
    throw new Error(`Missing env: ${missing.join(', ')}`);
  }

  const privateKey = rawKey.replace(/\\n/g, '\n');

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return { sheets: google.sheets({ version: 'v4', auth }), sheetId };
}

module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body;
  } catch {
    return res.status(400).json({ ok: false, error: 'Invalid JSON' });
  }

  if (body && body._honeypot) {
    return res.status(200).json({ ok: true });
  }

  const { error, clean } = validateEnquiry(body);
  if (error) {
    return res.status(400).json({ ok: false, error });
  }

  const {
    firstName,
    lastName,
    phone,
    email,
    medium,
    standard,
    message,
  } = clean;
  const pageUrl = String(body.pageUrl ?? '').trim().slice(0, 2000);

  const tab = process.env.GOOGLE_SHEET_TAB || 'Sheet1';
  const range = sheetA1Range(tab, 'A:I');
  const submittedAt = formatSubmittedAt();

  const row = [
    submittedAt,
    firstName,
    lastName,
    phone,
    email,
    medium,
    standard,
    message,
    pageUrl,
  ];

  try {
    const { sheets, sheetId } = getSheetsClient();
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: { values: [row] },
    });
  } catch (err) {
    console.error('Sheets append error:', err.message);
    return res.status(502).json({ ok: false, error: 'Could not save enquiry. Try again later.' });
  }

  return res.status(200).json({ ok: true });
};
