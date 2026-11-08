import React, { useEffect, useRef, useState } from 'react';
import { impactStats } from '../mock';
import { Sparkles, TrendingUp, Palette } from 'lucide-react';

const icons = { Intelligence: Sparkles, Career: TrendingUp, Design: Palette };

const Impact = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section section-accent impact-section" ref={ref}>
      <div className="shira-container">

        <div className="impact-header">
          <div className="section-eyebrow">Our Impact</div>
          <h2 className="heading-1">
            Transforming <span className="gradient-text">Digital Futures</span>
          </h2>
        </div>

        <div className="impact-grid">
          {impactStats.map((stat, i) => {
            const Icon = icons[stat.highlight];
            return (
              <div
                key={stat.id}
                className="impact-card"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'none' : 'translateY(28px)',
                  transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
                }}
              >
                <div className="impact-card__glow" aria-hidden="true" />
                <div className="impact-card__icon">
                  {Icon && <Icon size={28} color="var(--cyan)" strokeWidth={1.6} />}
                </div>
                <div className="mono-font impact-card__label">{stat.highlight}</div>
                <h3 className="impact-card__title">{stat.title}</h3>
                <p className="impact-card__desc">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Impact;
