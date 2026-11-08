import React, { useEffect, useRef, useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { whyChoose } from '../mock';

const WhyChoose = () => {
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
    <section id="why-choose" className="section section-dark why-section" ref={ref}>
      <div className="shira-container">

        {/* Header — asymmetric */}
        <div className="why-header">
          <div>
            <div className="section-eyebrow">Why Choose Us</div>
            <h2 className="heading-1">
              The <span className="gradient-text">SHIRA AI</span><br />Advantage
            </h2>
          </div>
          <p className="body-medium why-header__sub">
            What makes us different — and why our clients keep coming back.
          </p>
        </div>

        {/* Items — number list style */}
        <div className="why-grid">
          {whyChoose.map((item, i) => {
            const Icon = LucideIcons[item.icon];
            return (
              <div
                key={item.id}
                className="why-item"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'none' : 'translateY(24px)',
                  transition: `opacity 0.55s ease ${i * 0.08}s, transform 0.55s ease ${i * 0.08}s`,
                }}
              >
                <div className="why-item__num mono-font">{String(i + 1).padStart(2, '0')}</div>
                <div className="why-item__icon">
                  {Icon && <Icon size={20} color="var(--cyan)" strokeWidth={1.8} />}
                </div>
                <h3 className="why-item__title">{item.title}</h3>
                <p className="why-item__desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
