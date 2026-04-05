import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from '../../context/ThemeContext';
import { PATHS, isCoursesNavActive, isGalleryNavActive } from '../../routes/paths';

const NAV_LINKS = [
  { to: PATHS.HOME, label: 'Home', end: true, isActive: (p) => p === PATHS.HOME },
  {
    to: PATHS.COURSE_SSC,
    label: 'Courses',
    end: false,
    isActive: isCoursesNavActive,
  },
  {
    to: PATHS.GALLERY,
    label: 'Gallery',
    end: false,
    isActive: isGalleryNavActive,
  },
  { to: PATHS.CONTACT, label: 'Contact', end: false, isActive: (p) => p === PATHS.CONTACT },
];

const linkBase =
  'px-4 py-2 text-base font-medium border-b-2 transition-colors duration-200 outline-none';
const linkActive   = 'text-brand border-brand';
const linkInactive = 'text-gray-700 dark:text-gray-200 border-transparent hover:text-brand dark:hover:text-brand-light';

const Navbar = () => {
  const { isDark, toggle } = useTheme();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm shadow-md'
          : 'bg-white dark:bg-gray-950'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <NavLink to={PATHS.HOME} onClick={closeMenu} className="shrink-0">
            <img
              src="/logo.png"
              alt="Student's Tutorial"
              className="h-14 w-auto object-contain"
            />
          </NavLink>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
            {NAV_LINKS.map(({ to, label, end, isActive }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={() =>
                    `${linkBase} ${isActive(pathname) ? linkActive : linkInactive}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Theme toggle + hamburger */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300
                         hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? <HiSun size={22} /> : <HiMoon size={22} />}
            </button>

            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300
                         hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col gap-1 pt-2 border-t border-gray-100 dark:border-gray-800 list-none m-0 p-0">
            {NAV_LINKS.map(({ to, label, end, isActive }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={closeMenu}
                  className={() =>
                    `block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200
                     ${isActive(pathname)
                       ? 'text-brand bg-brand/5'
                       : 'text-gray-700 dark:text-gray-200 hover:text-brand hover:bg-brand/5 dark:hover:text-brand-light'
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
