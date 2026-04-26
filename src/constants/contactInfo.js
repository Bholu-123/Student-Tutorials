/** Shared contact copy for Contact section, Footer, and forms. */

export const INSTITUTE_MAPS_URL =
  'https://www.google.com/maps?ll=17.532567,73.522072&z=15&t=m&hl=en&gl=IN&mapclient=embed&cid=13857009869368808141';

export const HEAD_OFFICE_ADDRESS =
  'Gulzar Bungalow, back of swimming pool, Ramtirtha, Markandi, Chiplun, Maharashtra 415605';

export const DEVRUKH_BRANCH_ADDRESS =
  'P.S. Bane International School, Ratnasindhur Sahyadrinagar, At. Post. Sadavali, Devrukh';

export const BRANCH_LOCATIONS = 'Chiplun / Lavel / Pedhambe / Devrukh';

export const CONTACT_PHONES = [
  { tel: '+919272188068', display: '9272188068' },
  { tel: '+917387709241', display: '7387709241' },
  { tel: '+917559121626', display: '7559121626' },
];

/** E.164 without + (wa.me / WhatsApp send API). */
export const WHATSAPP_PHONE_E164 = '919272188068';

export const WHATSAPP_PREFILL_MESSAGE =
  "Hello, I'm interested in learning more about Student's Tutorial. Could you please provide me with more details regarding the courses? Thank you!";

export const WHATSAPP_CHAT_URL = `https://wa.me/${WHATSAPP_PHONE_E164}?text=${encodeURIComponent(WHATSAPP_PREFILL_MESSAGE)}`;
