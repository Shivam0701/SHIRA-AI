import React from 'react';
import * as LucideIcons from 'lucide-react';
import { whyChoose } from '../mock';

const WhyChoose = () => {
  return (
    <section id="why-choose" className="section section-dark">
      <div className="shira-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div
            className="mono-font"
            style={{
              fontSize: '14px',
              color: 'var(--brand-electric)',
              marginBottom: '12px',
              fontWeight: '600',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            Why Choose Us
          </div>
          <h2 className="heading-1" style={{ marginBottom: '16px' }}>
            The <span className="gradient-text">SHIRA AI</span> Advantage
          </h2>
          <p className="body-medium" style={{ maxWidth: '700px', margin: '0 auto' }}>
            What sets us apart in the digital services landscape
          </p>
        </div>

        {/* Why Choose Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
          }}
        >
          {whyChoose.map((item, index) => {
            const IconComponent = LucideIcons[item.icon];
            return (
              <div
                key={item.id}
                className="fade-in-up"
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  padding: '32px',
                  transition: 'all 0.3s ease',
                  animationDelay: `${index * 0.1}s`,
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = 'var(--brand-blue)';
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(37, 99, 235, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Number Badge */}
                <div
                  className="mono-font"
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                  }}
                >
                  {String(item.id).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'var(--gradient-card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  {IconComponent && (
                    <IconComponent size={24} color="var(--brand-electric)" />
                  )}
                </div>

                {/* Content */}
                <h3
                  className="heading-3"
                  style={{
                    marginBottom: '12px',
                    color: 'var(--text-primary)',
                    fontSize: '20px',
                  }}
                >
                  {item.title}
                </h3>
                <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
