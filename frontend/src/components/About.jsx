import React, { useEffect, useRef, useState } from 'react';
import { Target, Zap, ArrowRight } from 'lucide-react';

const About = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="section section-dark about-section" ref={ref}>
      <div className="shira-container">
        <div className="about-grid">

          {/* Left — editorial visual block */}
          <div className={`about-visual${visible ? ' about-visible' : ''}`}>
            <div className="about-visual__box">
              <div className="about-visual__noise" aria-hidden="true" />
              <div className="about-visual__glow" aria-hidden="true" />
              <div className="about-visual__label mono-font">EST. 2024</div>
              <div className="about-visual__word">AI</div>
              <div className="about-visual__word about-visual__word--outline">×</div>
              <div className="about-visual__word">DESIGN</div>
              <div className="about-visual__tagline mono-font">
                Intelligence meets craft
              </div>
            </div>

            {/* Floating stat chips */}
            <div className="about-chip about-chip--a float-slow">
              <span className="about-chip__num">100%</span>
              <span className="about-chip__lbl">AI-Enhanced</span>
            </div>
            <div className="about-chip about-chip--b float">
              <span className="about-chip__num">24/7</span>
              <span className="about-chip__lbl">Support</span>
            </div>
          </div>

          {/* Right — copy */}
          <div className={`about-copy${visible ? ' about-visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
            <div className="section-eyebrow">About SHIRA AI</div>

            <h2 className="heading-1" style={{ marginBottom: '24px' }}>
              Building Digital Identities<br />
              with <span className="gradient-text">Intelligence</span>
            </h2>

            <p className="body-medium" style={{ marginBottom: '18px' }}>
              SHIRA AI is an AI-powered digital studio on a mission to help individuals, 
              professionals and businesses establish powerful digital identities — through 
              the perfect blend of intelligence, technology and creativity.
            </p>
            <p className="body-medium" style={{ marginBottom: '36px' }}>
              Whether you're a startup building your first product, a business scaling 
              operations, or a professional defining your brand — we deliver solutions 
              that are precise, modern and built to last.
            </p>

            <div className="about-points">
              <div className="about-point">
                <div className="about-point__icon">
                  <Target size={18} color="var(--cyan)" />
                </div>
                <div>
                  <div className="about-point__title">Our Mission</div>
                  <p className="body-small">
                    Empower every business with intelligent technology that drives real, measurable growth.
                  </p>
                </div>
              </div>
              <div className="about-point">
                <div className="about-point__icon">
                  <Zap size={18} color="var(--cyan)" />
                </div>
                <div>
                  <div className="about-point__title">Our Approach</div>
                  <p className="body-small">
                    AI-powered automation combined with human creativity — results that consistently exceed expectations.
                  </p>
                </div>
              </div>
            </div>

            <button
              className="btn-secondary"
              style={{ marginTop: '32px' }}
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See What We Build <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
