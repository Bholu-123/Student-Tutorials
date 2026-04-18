import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HiMenu, HiX, HiSun, HiMoon, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { useTheme } from '../../context/ThemeContext';
import {
  PATHS,
  COURSES_SECTION_TO,
  isCoursesNavActive,
  isGalleryNavActive,
} from '../../routes/paths';
import { BRAND } from '../../constants/mediaPaths';
import { CONTACT_PHONES, INSTITUTE_MAPS_URL } from '../../constants/contactInfo';

const navLinks = (pathname, hash) => [
  {
    to: PATHS.HOME,
    label: 'Home',
    end: true,
    isActive: () => pathname === PATHS.HOME && hash !== '#courses',
  },
  {
    to: COURSES_SECTION_TO,
    label: 'Courses',
    end: false,
    isActive: () => isCoursesNavActive(pathname, hash),
  },
  {
    to: PATHS.GALLERY,
    label: 'Gallery',
    end: false,
    isActive: () => isGalleryNavActive(pathname),
  },
  { to: PATHS.CONTACT, label: 'Contact', end: false, isActive: () => pathname === PATHS.CONTACT },
];

const linkBase =
  'px-4 py-2 text-base font-medium border-b-2 transition-colors duration-200 outline-none cursor-pointer';
const linkActive = 'text-brand border-brand';
const linkInactive =
  'text-gray-700 dark:text-gray-200 border-transparent hover:text-brand dark:hover:text-brand-light';

const Navbar = () => {
  const { isDark, toggle } = useTheme();
  const { pathname, hash } = useLocation();
  const NAV_LINKS = navLinks(pathname, hash);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const primaryPhone = CONTACT_PHONES[0];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-gray-100/80 transition-[background-color,box-shadow,backdrop-filter,border-color] duration-300 ease-in-out dark:border-gray-800/80 ${
        scrolled
          ? 'bg-white/95 shadow-md backdrop-blur-md dark:bg-gray-950/95'
          : 'bg-white dark:bg-gray-950'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-2 sm:gap-3">
          <NavLink
            to={PATHS.HOME}
            onClick={closeMenu}
            className="min-w-0 shrink-0 cursor-pointer outline-none"
          >
            <img
              src={BRAND.logo}
              alt="Student's Tutorial"
              className="h-11 w-auto object-contain sm:h-14"
            />
          </NavLink>

          <div className="flex flex-1 items-center justify-end gap-1.5 md:hidden">
            <a
              href={`tel:${primaryPhone.tel}`}
              className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#e8f0d4] outline-none transition hover:bg-[#dce8c4] focus-visible:ring-2 focus-visible:ring-brand dark:bg-brand/20 dark:hover:bg-brand/30"
              aria-label={`Call ${primaryPhone.display}`}
            >
              <HiPhone className="h-4 w-4 text-brand-dark dark:text-brand-light" aria-hidden />
            </a>
            <a
              href={INSTITUTE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open location in Google Maps"
              className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#e8f0d4] outline-none transition hover:bg-[#dce8c4] focus-visible:ring-2 focus-visible:ring-brand dark:bg-brand/20 dark:hover:bg-brand/30"
            >
              <HiLocationMarker className="h-5 w-5 text-brand-dark dark:text-brand-light" aria-hidden />
            </a>
          </div>

          <ul className="m-0 hidden list-none items-center gap-1 p-0 md:flex">
            {NAV_LINKS.map(({ to, label, end, isActive }) => (
              <li key={label}>
                <NavLink
                  to={to}
                  end={end}
                  className={() => `${linkBase} ${isActive() ? linkActive : linkInactive}`}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
            <a
              href={`tel:${primaryPhone.tel}`}
              className="hidden cursor-pointer items-center gap-2.5 rounded-full py-1 pl-1 pr-2 outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 md:flex"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8f0d4] dark:bg-brand/20">
                <HiPhone className="h-5 w-5 text-brand-dark dark:text-brand-light" aria-hidden />
              </span>
              <span className="flex min-w-0 flex-col text-left leading-tight">
                <span className="text-xs text-gray-500 dark:text-gray-400">Call now</span>
                <span className="text-sm font-bold text-gray-900 dark:text-white">
                  {primaryPhone.display}
                </span>
              </span>
            </a>

            <a
              href={INSTITUTE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open location in Google Maps"
              className="hidden h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#e8f0d4] outline-none transition hover:bg-[#dce8c4] focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 dark:bg-brand/20 dark:hover:bg-brand/30 md:flex"
            >
              <HiLocationMarker className="h-6 w-6 text-brand-dark dark:text-brand-light" aria-hidden />
            </a>

            <button
              type="button"
              onClick={toggle}
              aria-label="Toggle dark mode"
              className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#e8f0d4] text-brand-dark outline-none transition hover:bg-[#dce8c4] focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 dark:bg-brand/20 dark:text-brand-light dark:hover:bg-brand/30"
            >
              {isDark ? <HiSun size={22} /> : <HiMoon size={22} />}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              className="cursor-pointer rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 md:hidden"
            >
              {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            menuOpen ? 'max-h-[28rem] pb-4' : 'max-h-0'
          }`}
        >
          <ul className="m-0 flex list-none flex-col gap-1 border-t border-gray-100 p-0 pt-2 dark:border-gray-800">
            {NAV_LINKS.map(({ to, label, end, isActive }) => (
              <li key={label}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={closeMenu}
                  className={() =>
                    `block cursor-pointer rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200 ${
                      isActive()
                        ? 'bg-brand/5 text-brand'
                        : 'text-gray-700 hover:bg-brand/5 hover:text-brand dark:text-gray-200 dark:hover:text-brand-light'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
