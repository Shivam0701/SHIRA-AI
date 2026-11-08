import React, { useState, useEffect, useRef } from 'react';
import * as LucideIcons from 'lucide-react';
import { services } from '../mock';

const ServiceCard = ({ service, index, IconComponent, isVisible }) => (
  <div
    className="shira-card services-card"
    style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
      transition: `opacity 0.55s ease ${index * 0.07}s, transform 0.55s ease ${index * 0.07}s`,
    }}
  >
    {/* Icon */}
    <div className="services-card__icon">
      {IconComponent && <IconComponent size={22} color="var(--brand-blue-light)" strokeWidth={1.8} />}
    </div>

    {/* Text */}
    <h3 className="services-card__title">{service.title}</h3>
    <p className="services-card__desc">{service.description}</p>
  </div>
);

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="section section-accent" ref={sectionRef}>
      <div className="shira-container">

        {/* Header */}
        <div className="services-header">
          <div className="section-eyebrow">What We Build</div>
          <h2 className="heading-1" style={{ marginBottom: '16px' }}>
            From Ideas to <span className="gradient-text">Intelligent Solutions</span>
          </h2>
          <p className="body-medium services-subtitle">
            From ideas to intelligent digital solutions — we build technology that moves your business forward.
          </p>
        </div>

        {/* Grid */}
        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = LucideIcons[service.icon];
            return (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                IconComponent={IconComponent}
                isVisible={isVisible}
              />
            );
          })}
        </div>

        {/* CTA */}
        <div className="services-cta">
          <a href="#contact" className="btn-primary">
            Discuss Your Project
            <LucideIcons.ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;
