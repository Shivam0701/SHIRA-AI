import React from 'react';
import * as LucideIcons from 'lucide-react';
import { services } from '../mock';

const Services = () => {
  return (
    <section id="services" className="section section-accent">
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
            What We Offer
          </div>
          <h2 className="heading-1" style={{ marginBottom: '16px' }}>
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="body-medium" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Comprehensive digital solutions powered by AI to elevate your personal and professional presence
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {services.map((service, index) => {
            const IconComponent = LucideIcons[service.icon];
            return (
              <div
                key={service.id}
                className="shira-card fade-in-up"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    background: 'var(--gradient-card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  {IconComponent && (
                    <IconComponent size={28} color="var(--brand-blue)" />
                  )}
                </div>

                {/* Content */}
                <h3
                  className="heading-3"
                  style={{
                    marginBottom: '12px',
                    color: 'var(--text-primary)',
                  }}
                >
                  {service.title}
                </h3>
                <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
