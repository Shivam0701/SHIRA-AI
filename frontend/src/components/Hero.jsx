import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const handleCTAClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--gradient-hero)',
      }}
    >
      {/* Animated Background Pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 60px), repeating-linear-gradient(-90deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 60px)',
          opacity: 0.5,
        }}
      />

      {/* Gradient Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'float 6s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '10%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'float 8s ease-in-out infinite',
          animationDelay: '1s',
        }}
      />

      <div className="shira-container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          {/* Left Content */}
          <div style={{ maxWidth: '700px' }}>
            {/* Badge */}
            <div
              className="fade-in-up"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--bg-overlay)',
                border: '1px solid var(--border-subtle)',
                padding: '8px 16px',
                marginBottom: '24px',
                fontSize: '14px',
                fontWeight: '500',
              }}
            >
              <Sparkles size={16} color="var(--brand-electric)" />
              <span className="mono-font" style={{ color: 'var(--text-secondary)' }}>
                AI-Powered Digital Services
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="display-huge fade-in-up"
              style={{
                color: 'var(--text-primary)',
                marginBottom: '24px',
                animationDelay: '0.1s',
              }}
            >
              Build Your{' '}
              <span className="gradient-text">Digital Identity</span>{' '}
              with Intelligence
            </h1>

            {/* Subtext */}
            <p
              className="body-large fade-in-up"
              style={{
                color: 'var(--text-secondary)',
                marginBottom: '40px',
                animationDelay: '0.2s',
                maxWidth: '600px',
              }}
            >
              Empowering individuals, professionals, and businesses with AI-driven
              digital solutions. From stunning websites to career-defining resumes.
            </p>

            {/* CTA Buttons */}
            <div
              className="fade-in-up"
              style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
                animationDelay: '0.3s',
              }}
            >
              <button className="btn-primary" onClick={handleCTAClick}>
                Get Started
                <ArrowRight size={20} />
              </button>
              <button
                className="btn-secondary"
                onClick={() => {
                  const aboutSection = document.querySelector('#about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Learn More
              </button>
            </div>

            {/* Trust Indicator */}
            <div
              className="fade-in-up"
              style={{
                marginTop: '48px',
                display: 'flex',
                gap: '32px',
                flexWrap: 'wrap',
                animationDelay: '0.4s',
              }}
            >
              <div>
                <div
                  className="mono-font"
                  style={{
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    marginBottom: '4px',
                  }}
                >
                  Based in
                </div>
                <div style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)' }}>
                  New Delhi, India
                </div>
              </div>
              <div>
                <div
                  className="mono-font"
                  style={{
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    marginBottom: '4px',
                  }}
                >
                  Powered by
                </div>
                <div style={{ fontSize: '16px', fontWeight: '600', color: 'var(--brand-blue)' }}>
                  Artificial Intelligence
                </div>
              </div>
            </div>
          </div>

          {/* Right - 3D Spline Element */}
          <div
            className="fade-in-up"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              animationDelay: '0.2s',
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '600px',
                height: '600px',
                position: 'relative',
                overflow: 'visible',
              }}
            >
              <Spline
                scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
