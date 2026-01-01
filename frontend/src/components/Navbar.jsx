
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { navLinks } from '../mock';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [theme, setTheme] = useState('dark');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);

    if (location.pathname === '/') {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/' + href);
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: isScrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
          borderBottom: isScrolled ? '1px solid var(--border-subtle)' : 'none',
        }}
      >
        <div className="shira-container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '80px',
            }}
          >
            {/* Logo */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                height: '40px',
              }}
              onClick={() => {
                if (location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  navigate('/');
                }
              }}
            >
              <div
                style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'JetBrains Mono, monospace',
                  lineHeight: '1',
                }}
              >
                SHIRA AI
              </div>
            </div>

            {/* Desktop Navigation */}
            <div
              className="desktop-nav"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '36px',
                height: '100%',
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  style={{
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: '500',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    lineHeight: '1',
                  }}
                >
                  {link.name}
                </a>
              ))}

              {/* Projects */}
              <Link
                to="/projects"
                style={{
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Project Highlights
              </Link>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                style={{
                  background: 'var(--bg-overlay)',
                  border: '1px solid var(--border-subtle)',
                  width: '40px',
                  height: '40px',
                  minWidth: '40px',
                  minHeight: '40px',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* CTA */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="btn-primary"
                style={{
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 20px',
                }}
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-button"
              style={{
                background: 'var(--bg-overlay)',
                border: '1px solid var(--border-subtle)',
                width: '40px',
                height: '40px',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className="mobile-menu"
        style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          background: 'var(--bg-primary)',
          transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'all 0.3s ease',
          zIndex: 40,
          display: 'none',
        }}
      >
        <div className="shira-container" style={{ padding: '20px' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              style={{
                display: 'block',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '18px',
                padding: '12px 0',
              }}
            >
              {link.name}
            </a>
          ))}

          <Link
            to="/projects"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              display: 'block',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              fontSize: '18px',
              padding: '12px 0',
            }}
          >
            Projects
          </Link>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-button {
            display: flex !important;
          }
          .mobile-menu {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;