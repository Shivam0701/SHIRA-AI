import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <nav className="navbar">
        <div className="shira-container navbar-inner">
          {/* LOGO */}
          <div className="navbar-logo" onClick={() => navigate('/')}>
            SHIRA AI
          </div>

          {/* DESKTOP NAV */}
          <div className="desktop-nav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#why-us">Why Us</a>
            <a href="#contact">Contact</a>
            <Link to="/projects">Project Highlights</Link>

            <button
              className="theme-btn"
              onClick={() =>
                setTheme(theme === 'dark' ? 'light' : 'dark')
              }
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="mobile-menu-btn"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className="mobile-menu"
        style={{
          transform: open ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#services" onClick={() => setOpen(false)}>Services</a>
        <a href="#why-us" onClick={() => setOpen(false)}>Why Us</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        <Link to="/projects" onClick={() => setOpen(false)}>
          Project Highlights
        </Link>
      </div>
    </>
  );
};

export default Navbar;
