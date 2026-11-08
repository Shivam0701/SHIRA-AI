import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goHomeSection = (id) => {
    setOpen(false);
    navigate(`/#${id}`);
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="shira-container navbar-inner">
          <div className="navbar-logo" onClick={() => navigate('/')}>
            SHIRA AI
          </div>

          <div className="desktop-nav">
            <button onClick={() => goHomeSection('about')}>About</button>
            <button onClick={() => goHomeSection('services')}>Services</button>
            <button onClick={() => goHomeSection('why-us')}>Why Us</button>
            <Link to="/projects" className="nav-highlight">Our Work</Link>
            <button onClick={() => goHomeSection('contact')}>Contact</button>
            <button
              className="theme-btn"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          <button className="mobile-menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div className="mobile-menu" style={{ transform: open ? 'translateY(0)' : 'translateY(-110%)' }}>
        <button onClick={() => goHomeSection('about')}>About</button>
        <button onClick={() => goHomeSection('services')}>Services</button>
        <button onClick={() => goHomeSection('why-us')}>Why Us</button>
        <Link to="/projects" onClick={() => setOpen(false)}>Our Work</Link>
        <button onClick={() => goHomeSection('contact')}>Contact</button>
      </div>
    </>
  );
};

export default Navbar;
