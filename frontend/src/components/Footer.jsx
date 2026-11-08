import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const links = [
    { label: 'About',    href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us',   href: '#why-us' },
    { label: 'Contact',  href: '#contact' },
  ];
  const svcs = ['Business Websites', 'Mobile Applications', 'SaaS & Custom Software', 'AI Solutions & Automation', 'Google Business Profile'];

  return (
    <footer className="footer">
      <div className="footer-wordmark mono-font" aria-hidden="true">SHIRA AI</div>
      <div className="shira-container footer-body">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo mono-font">SHIRA<span style={{ color:'var(--electric)' }}>.</span>AI</div>
            <p className="footer-brand__tag body-small">
              Building intelligent digital products for businesses that want to grow.
            </p>
            <div className="footer-social">
              {[
                { href:'https://www.linkedin.com/company/shiraai/', Icon:Linkedin, label:'LinkedIn' },
                { href:'https://www.instagram.com/shiraai.official/', Icon:Instagram, label:'Instagram' },
                { href:'mailto:connect.shiraai@gmail.com', Icon:Mail, label:'Email' },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="footer-social__a" aria-label={label}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-col__h mono-font">Navigation</div>
            {links.map(l => <a key={l.label} href={l.href} className="footer-link">{l.label}</a>)}
            <Link to="/projects" className="footer-link">Our Work</Link>
          </div>

          <div className="footer-col">
            <div className="footer-col__h mono-font">Services</div>
            {svcs.map(s => <span key={s} className="footer-link footer-link--dim">{s}</span>)}
          </div>

          <div className="footer-col">
            <div className="footer-col__h mono-font">Contact</div>
            <a href="mailto:connect.shiraai@gmail.com" className="footer-link">connect.shiraai@gmail.com</a>
            <a href="tel:+918210173404" className="footer-link">+91 8210173404</a>
            <span className="footer-link footer-link--dim">New Delhi, India</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} SHIRA AI. All rights reserved.</span>
          <span className="mono-font footer-bottom__badge">AI-POWERED DIGITAL STUDIO</span>
        </div>
      </div>
    </footer>
  );
}
