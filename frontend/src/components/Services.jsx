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
                    width: '52px',
                    height: '52px',
                    background: 'var(--gradient-card)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  {IconComponent && (
                    <IconComponent size={24} color="var(--brand-blue)" />
                  )}
                </div>

                {/* Content */}
                <h3
                  className="heading-3"
                  style={{
                    marginBottom: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '16px',
                    fontWeight: '600',
                    lineHeight: '1.4',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="body-small"
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '13.5px',
                    lineHeight: '1.6',
                  }}
                >
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
