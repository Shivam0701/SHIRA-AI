import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'About',    id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Why Us',   id: 'why-us' },
  { label: 'Contact',  id: 'contact' },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id) => { setOpen(false); navigate(`/#${id}`); };

  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.19,1,0.22,1] }}
        style={{ '--nav-bg': scrolled ? 'rgba(6,6,8,0.96)' : 'transparent' }}
      >
        <div className="shira-container navbar-inner">
          {/* Logo */}
          <div className="navbar-logo mono-font" onClick={() => navigate('/')}>
            SHIRA<span className="navbar-logo__dot">.</span>AI
          </div>

          {/* Desktop links */}
          <div className="desktop-nav" role="navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                className="nav-link"
                onClick={() => go(item.id)}
                onMouseEnter={() => setActive(item.id)}
                onMouseLeave={() => setActive(null)}
              >
                {item.label}
                <motion.span
                  className="nav-link__underline"
                  animate={{ scaleX: active === item.id ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                />
              </button>
            ))}
            <Link to="/projects" className="nav-link nav-link--accent">
              Our Work
            </Link>
            <button
              className="theme-btn"
              onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </div>

          {/* Mobile toggle */}
          <button className="mobile-menu-btn" onClick={() => setOpen(o => !o)} aria-label="Menu">
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28 }}
          >
            {navItems.map((item) => (
              <button key={item.id} className="mobile-nav-link" onClick={() => go(item.id)}>
                {item.label}
              </button>
            ))}
            <Link to="/projects" className="mobile-nav-link" onClick={() => setOpen(false)}>
              Our Work
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
