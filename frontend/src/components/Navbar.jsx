import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const NAV = [
  { label: 'About',    id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Why Us',   id: 'why-us' },
  { label: 'Contact',  id: 'contact' },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen]       = useState(false);
  const [theme, setTheme]     = useState('dark');
  const [scrolled, setScrolled] = useState(false);
  const [hover, setHover]     = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id) => { setOpen(false); navigate(`/#${id}`); };

  return (
    <>
      <motion.nav
        className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.19,1,0.22,1] }}
      >
        <div className="shira-container navbar-inner">
          <div className="navbar-logo mono-font" onClick={() => navigate('/')}>
            SHIRA<span className="navbar-logo__dot">.</span>AI
          </div>

          <nav className="desktop-nav">
            {NAV.map((item) => (
              <button
                key={item.id}
                className="nav-btn"
                onMouseEnter={() => setHover(item.id)}
                onMouseLeave={() => setHover(null)}
                onClick={() => go(item.id)}
              >
                {item.label}
                <motion.span
                  className="nav-btn__line"
                  animate={{ scaleX: hover === item.id ? 1 : 0 }}
                  transition={{ duration: 0.22 }}
                />
              </button>
            ))}
            <Link to="/projects" className="nav-btn nav-btn--accent">Our Work</Link>
            <button
              className="theme-btn"
              onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {NAV.map((item) => (
              <button key={item.id} className="mobile-nav-item" onClick={() => go(item.id)}>
                {item.label}
              </button>
            ))}
            <Link to="/projects" className="mobile-nav-item" onClick={() => setOpen(false)}>
              Our Work
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
