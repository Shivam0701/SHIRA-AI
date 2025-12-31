import React from 'react';
import {
  Heart,
  Linkedin,
  Instagram,
  Mail
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Why Us', id: 'why-choose' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer
      style={{
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)',
        padding: '60px 0 32px',
      }}
    >
      <div className="shira-container">
        {/* Main Footer Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '48px',
            marginBottom: '48px',
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontSize: '28px',
                fontWeight: '700',
                background:
                  'linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'JetBrains Mono, monospace',
                marginBottom: '16px',
              }}
            >
              SHIRA AI
            </div>

            <p className="body-small" style={{ marginBottom: '16px' }}>
              Building digital identities with intelligence, technology, and creativity.
            </p>

            <div
              className="mono-font"
              style={{
                fontSize: '12px',
                color: 'var(--brand-electric)',
                fontWeight: '600',
                letterSpacing: '1px',
              }}
            >
              AI-POWERED DIGITAL SERVICES
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mono-font" style={headingStyle}>Quick Links</h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {quickLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  style={linkStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = 'var(--brand-blue)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = 'var(--text-secondary)')
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mono-font" style={headingStyle}>Services</h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Website Solutions',
                'ATS Resumes',
                'LinkedIn Optimization',
                'Brand Design',
              ].map((service) => (
                <div key={service} style={{ color: 'var(--text-secondary)' }}>
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mono-font" style={headingStyle}>Contact</h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Email */}
              <a
                href="mailto:connect.shiraai@gmail.com"
                style={contactItemStyle}
              >
                <Mail size={18} />
                <span>connect.shiraai@gmail.com</span>
              </a>

              {/* LinkedIn (SHORT) */}
              <a
                href="https://www.linkedin.com/company/shiraai/"
                target="_blank"
                rel="noreferrer"
                style={contactItemStyle}
              >
                <Linkedin size={18} />
                <span>@shiraai</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/shiraai.official/"
                target="_blank"
                rel="noreferrer"
                style={contactItemStyle}
              >
                <Instagram size={18} />
                <span>@shiraai.official</span>
              </a>

              <div style={{ color: 'var(--text-secondary)', marginTop: '6px' }}>
                New Delhi, India
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '14px',
            color: 'var(--text-muted)',
          }}
        >
          <div>© {currentYear} SHIRA AI. All rights reserved.</div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            Crafted with <Heart size={14} fill="var(--brand-electric)" /> by SHIRA AI
          </div>
        </div>
      </div>
    </footer>
  );
};

/* Shared Styles */
const headingStyle = {
  fontSize: '14px',
  fontWeight: '600',
  marginBottom: '20px',
  letterSpacing: '1px',
  textTransform: 'uppercase',
};

const linkStyle = {
  color: 'var(--text-secondary)',
  textDecoration: 'none',
  fontSize: '16px',
  transition: 'color 0.3s ease',
};

const contactItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  color: 'var(--text-secondary)',
  textDecoration: 'none',
  fontSize: '15px',
  transition: 'color 0.3s ease',
};

export default Footer;
