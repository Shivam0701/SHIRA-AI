import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const links = [
    { label: 'About',    href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us',   href: '#why-us' },
    { label: 'Contact',  href: '#contact' },
  ];

  const services = [
    'Business Websites',
    'Mobile Applications',
    'SaaS & Custom Software',
    'AI Solutions & Automation',
    'Google Business Profile',
  ];

  return (
    <footer className="footer">
      <div className="shira-container">

        {/* Top strip */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo mono-font">SHIRA AI</div>
            <p className="body-small footer-brand__tagline">
              Building intelligent digital products for businesses that want to grow.
            </p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/shiraai/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={17} />
              </a>
              <a href="https://www.instagram.com/shiraai.official/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={17} />
              </a>
              <a href="mailto:connect.shiraai@gmail.com" aria-label="Email">
                <Mail size={17} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-col__head mono-font">Navigation</div>
            {links.map(l => (
              <a key={l.label} href={l.href} className="footer-link">{l.label}</a>
            ))}
            <Link to="/projects" className="footer-link">Our Work</Link>
          </div>

          <div className="footer-col">
            <div className="footer-col__head mono-font">Services</div>
            {services.map(s => (
              <span key={s} className="footer-link footer-link--static">{s}</span>
            ))}
          </div>

          <div className="footer-col">
            <div className="footer-col__head mono-font">Contact</div>
            <a href="mailto:connect.shiraai@gmail.com" className="footer-link">connect.shiraai@gmail.com</a>
            <a href="tel:+918210173404" className="footer-link">+91 8210173404</a>
            <span className="footer-link footer-link--static">New Delhi, India</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© {year} SHIRA AI. All rights reserved.</span>
          <span className="mono-font footer-bottom__badge">AI-POWERED DIGITAL STUDIO</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
