import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle } from 'react-icons/fa';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { PATHS } from '../../routes/paths';

const SOCIAL = [
  { Icon: FaFacebookF, href: '#', label: 'Facebook' },
  { Icon: FaInstagram, href: '#', label: 'Instagram' },
  { Icon: FaTwitter,   href: '#', label: 'Twitter' },
  { Icon: FaGoogle,    href: '#', label: 'Google' },
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

const Footer = () => (
  <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <img
            src="/logo.png"
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
                aria-label={label}
                className="w-9 h-9 rounded-full bg-brand flex items-center justify-center
                           text-white hover:bg-brand-dark hover:-translate-y-1
                           transition-all duration-200 shadow"
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
                <NavLink
                  to={to}
                  className="text-sm hover:text-brand transition-colors duration-200"
                >
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
                <NavLink
                  to={to}
                  className="text-sm hover:text-brand transition-colors duration-200"
                >
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
            <li className="flex gap-3">
              <HiLocationMarker size={18} className="text-brand flex-shrink-0 mt-0.5" />
              <span>
                Ramtirth Markandi near municipal swimming pool,
                <br />
                Chiplun, Maharashtra 415605
              </span>
            </li>
            <li className="flex items-center gap-3">
              <HiPhone size={18} className="text-brand flex-shrink-0" />
              <a href="tel:09272188068" className="hover:text-brand transition-colors">
                092721 88068
              </a>
            </li>
            <li className="flex items-center gap-3">
              <HiMail size={18} className="text-brand flex-shrink-0" />
              <a href="mailto:info@studentstutorial.com" className="hover:text-brand transition-colors">
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
