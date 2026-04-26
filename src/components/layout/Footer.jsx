import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaGoogle } from 'react-icons/fa';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { PATHS, COURSES_SECTION_TO } from '../../routes/paths';
import { BRAND } from '../../constants/mediaPaths';
import {
  INSTITUTE_MAPS_URL,
  HEAD_OFFICE_ADDRESS,
  DEVRUKH_BRANCH_ADDRESS,
  CONTACT_PHONES,
} from '../../constants/contactInfo';

const SOCIAL = [
  {
    Icon: FaFacebookF,
    href: 'https://www.facebook.com/studentstutorialjeeneetchiplun',
    label: 'Facebook',
  },
  {
    Icon: FaInstagram,
    href: 'https://www.instagram.com/studentstutorialjeeneet',
    label: 'Instagram',
  },
  {
    Icon: FaGoogle,
    href: 'https://student-tutorials.vercel.app/',
    label: 'Official website',
  },
];

const INSTITUTE_LINKS = [
  { to: PATHS.HOME, label: 'Home' },
  { to: PATHS.GALLERY, label: 'Gallery' },
  { to: PATHS.RESULTS, label: 'Results' },
  { to: COURSES_SECTION_TO, label: 'Courses' },
];

const SERVICE_LINKS = [
  { to: COURSES_SECTION_TO, label: 'Courses' },
  { to: PATHS.RESULTS, label: 'Results' },
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
                key={href}
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
          <ul className="space-y-4 text-sm list-none p-0 m-0">
            <li>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                Head office
              </p>
              <a
                href={INSTITUTE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 rounded-md -mx-1 px-1 py-0.5 transition-colors
                           hover:text-brand cursor-pointer outline-none focus-visible:ring-2
                           focus-visible:ring-brand focus-visible:ring-offset-2
                           focus-visible:ring-offset-gray-900"
              >
                <HiLocationMarker size={18} className="text-brand shrink-0 mt-0.5" aria-hidden />
                <span>{HEAD_OFFICE_ADDRESS}</span>
              </a>
            </li>
            <li>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                Devrukh branch
              </p>
              <div className="flex gap-3 pl-0">
                <HiLocationMarker size={18} className="text-brand shrink-0 mt-0.5" aria-hidden />
                <span>{DEVRUKH_BRANCH_ADDRESS}</span>
              </div>
            </li>
            <li className="flex flex-col gap-1.5">
              <div className="flex items-center gap-3">
                <HiPhone size={18} className="text-brand shrink-0" aria-hidden />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Phone
                </span>
              </div>
              <div className="pl-8 flex flex-col gap-1">
                {CONTACT_PHONES.map(({ tel, display }) => (
                  <a key={tel} href={`tel:${tel}`} className={linkRow}>
                    {display}
                  </a>
                ))}
              </div>
            </li>
            <li className="flex items-center gap-3">
              <HiMail size={18} className="text-brand shrink-0" aria-hidden />
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
