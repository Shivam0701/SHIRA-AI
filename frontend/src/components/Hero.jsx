import React, { useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    setTimeout(() => { el.style.width = '100%'; }, 300);
  }, []);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      {/* Grid overlay */}
      <div className="hero__grid" aria-hidden="true" />

      {/* Ambient orbs */}
      <div className="hero__orb hero__orb--a" aria-hidden="true" />
      <div className="hero__orb hero__orb--b" aria-hidden="true" />
      <div className="hero__orb hero__orb--c" aria-hidden="true" />

      <div className="shira-container hero__inner">
        {/* Left column */}
        <div className="hero__content">
          <div className="hero__eyebrow fade-in-up">
            <span className="hero__dot" />
            <span className="mono-font">AI-Powered Digital Studio</span>
          </div>

          <h1 className="hero__headline fade-in-up" style={{ animationDelay: '0.1s' }}>
            We Build&nbsp;
            <span className="gradient-text">Digital</span>
            <br />
            Products That&nbsp;
            <br />
            <span className="hero__outline-text">Matter</span>
          </h1>

          <div
            ref={lineRef}
            className="hero__rule"
            style={{ width: 0, transition: 'width 1.1s cubic-bezier(0.19,1,0.22,1) 0.5s' }}
            aria-hidden="true"
          />

          <p className="hero__sub fade-in-up" style={{ animationDelay: '0.25s' }}>
            From intelligent web platforms and mobile apps to AI automation and SaaS — 
            SHIRA AI turns your vision into technology that drives real growth.
          </p>

          <div className="hero__cta fade-in-up" style={{ animationDelay: '0.35s' }}>
            <button className="btn-primary" onClick={() => scrollTo('#contact')}>
              Start a Project
              <ArrowRight size={17} />
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('#services')}>
              Explore Services
            </button>
          </div>

          <div className="hero__meta fade-in-up" style={{ animationDelay: '0.48s' }}>
            <div className="hero__meta-item">
              <span className="mono-font hero__meta-label">Studio</span>
              <span className="hero__meta-value">New Delhi, India</span>
            </div>
            <div className="hero__meta-divider" aria-hidden="true" />
            <div className="hero__meta-item">
              <span className="mono-font hero__meta-label">Powered by</span>
              <span className="hero__meta-value" style={{ color: 'var(--cyan)' }}>Artificial Intelligence</span>
            </div>
          </div>
        </div>

        {/* Right — 3D Spline */}
        <div className="hero__visual fade-in-up" style={{ animationDelay: '0.18s' }}>
          <div className="hero__spline-wrap">
            <Spline
              scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button className="hero__scroll-cue" onClick={() => scrollTo('#about')} aria-label="Scroll down">
        <ArrowDown size={16} />
      </button>
    </section>
  );
};

export default Hero;
