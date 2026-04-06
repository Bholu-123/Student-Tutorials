import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle } from 'react-icons/fa';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { PATHS } from '../../routes/paths';
import { BRAND } from '../../constants/mediaPaths';

/** Institute on Google Maps (Student's Tutorial, Chiplun). */
const INSTITUTE_MAPS_URL =
  'https://www.google.com/maps?ll=17.532567,73.522072&z=15&t=m&hl=en&gl=IN&mapclient=embed&cid=13857009869368808141';

const SOCIAL = [
  { Icon: FaFacebookF, href: 'https://www.facebook.com/', label: 'Facebook' },
  { Icon: FaInstagram, href: 'https://www.instagram.com/', label: 'Instagram' },
  { Icon: FaTwitter, href: 'https://twitter.com/', label: 'Twitter' },
  { Icon: FaGoogle, href: 'https://www.google.com/search?q=Student%27s+Tutorial+Chiplun', label: 'Google' },
];

const INSTITUTE_LINKS = [
  { to: PATHS.HOME, label: 'Home' },
  { to: PATHS.GALLERY, label: 'Gallery' },
  { to: PATHS.COURSE_SSC, label: 'Courses' },
];

const SERVICE_LINKS = [
  { to: PATHS.COURSE_SSC, label: 'Courses' },
  { to: PATHS.GALLERY_EVENTS, label: 'Our Events' },
  { to: PATHS.CONTACT, label: 'Contact Us' },
];

const linkRow = 'text-sm hover:text-brand transition-colors duration-200 cursor-pointer outline-none';

const Footer = () => (
  <footer className="relative z-10 bg-gray-900 dark:bg-gray-950 text-gray-400">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <img
            src={BRAND.logo}
            alt="Student's Tutorial"
            className="h-16 w-auto mb-4 brightness-200"
          />
          <p className="text-sm leading-relaxed">
            Empowering students with curated study material, experienced faculty
            and a competitive learning environment.
          </p>
          <div className="flex gap-3 mt-5">
            {SOCIAL.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-brand flex items-center justify-center
                           text-white hover:bg-brand-dark hover:-translate-y-1
                           transition-all duration-200 shadow cursor-pointer"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Institute */}
        <div>
          <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">
            Institute
          </h3>
          <ul className="space-y-2 list-none p-0 m-0">
            {INSTITUTE_LINKS.map(({ to, label }) => (
              <li key={label}>
                <NavLink to={to} className={linkRow}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">
            Services
          </h3>
          <ul className="space-y-2 list-none p-0 m-0">
            {SERVICE_LINKS.map(({ to, label }) => (
              <li key={label}>
                <NavLink to={to} className={linkRow}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">
            Get In Touch
          </h3>
          <ul className="space-y-3 text-sm list-none p-0 m-0">
            <li>
              <a
                href={INSTITUTE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 rounded-md -mx-1 px-1 py-0.5 transition-colors
                           hover:text-brand cursor-pointer outline-none focus-visible:ring-2
                           focus-visible:ring-brand focus-visible:ring-offset-2
                           focus-visible:ring-offset-gray-900"
              >
                <HiLocationMarker size={18} className="text-brand flex-shrink-0 mt-0.5" aria-hidden />
                <span>
                  Ramtirth Markandi near municipal swimming pool,
                  <br />
                  Chiplun, Maharashtra 415605
                </span>
              </a>
            </li>
            <li className="flex items-center gap-3">
              <HiPhone size={18} className="text-brand flex-shrink-0" aria-hidden />
              <a href="tel:+919272188068" className={`${linkRow} inline`}>
                092721 88068
              </a>
            </li>
            <li className="flex items-center gap-3">
              <HiMail size={18} className="text-brand flex-shrink-0" aria-hidden />
              <a href="mailto:info@studentstutorial.com" className={`${linkRow} inline break-all`}>
                info@studentstutorial.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-800 py-5 text-center text-xs text-gray-600 px-4">
      © {new Date().getFullYear()} Student's Tutorial. All rights reserved.
    </div>
  </footer>
);

export default Footer;
