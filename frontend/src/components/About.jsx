import React from 'react';
import { Target, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section section-dark">
      <div className="shira-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          {/* Left - Visual Element */}
          <div className="fade-in-up">
            <div
              style={{
                background: 'var(--gradient-card)',
                border: '1px solid var(--border-subtle)',
                padding: '60px 40px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                }}
              />
              <Zap
                size={120}
                color="var(--brand-electric)"
                style={{ opacity: 0.6 }}
              />
              <div
                className="mono-font"
                style={{
                  fontSize: '48px',
                  fontWeight: '700',
                  background: 'var(--gradient-accent)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginTop: '24px',
                }}
              >
                AI × DESIGN
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
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
              About SHIRA AI
            </div>
            <h2 className="heading-1" style={{ marginBottom: '24px' }}>
              Building Digital Identities with{' '}
              <span className="gradient-text">Intelligence</span>
            </h2>
            <p className="body-medium" style={{ marginBottom: '20px' }}>
              SHIRA AI is an AI-powered digital services company on a mission to help
              individuals, professionals, and businesses establish strong digital
              identities through the perfect blend of intelligence, technology, and
              creativity.
            </p>
            <p className="body-medium" style={{ marginBottom: '32px' }}>
              We believe everyone deserves a powerful digital presence. Whether you're a
              student starting your career, a freelancer building your brand, or a
              business looking to scale—we combine cutting-edge AI with honest,
              founder-driven values to deliver solutions that truly matter.
            </p>

            {/* Key Points */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Target size={24} color="var(--brand-blue)" style={{ flexShrink: 0 }} />
                <div>
                  <div
                    style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      marginBottom: '4px',
                    }}
                  >
                    Our Mission
                  </div>
                  <p className="body-small">
                    Empower every individual with the digital tools they need to succeed in
                    the modern world
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Zap size={24} color="var(--brand-electric)" style={{ flexShrink: 0 }} />
                <div>
                  <div
                    style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      marginBottom: '4px',
                    }}
                  >
                    Our Approach
                  </div>
                  <p className="body-small">
                    Combining AI-powered automation with creative human touch for results
                    that exceed expectations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
