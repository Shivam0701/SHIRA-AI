import React from 'react';
import { impactStats } from '../mock';
import { Sparkles, TrendingUp, Palette } from 'lucide-react';

const Impact = () => {
  const icons = {
    Intelligence: Sparkles,
    Career: TrendingUp,
    Design: Palette,
  };

  return (
    <section className="section section-accent" style={{ overflow: 'hidden' }}>
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
            Our Impact
          </div>
          <h2 className="heading-1" style={{ marginBottom: '16px' }}>
            Transforming <span className="gradient-text">Digital Futures</span>
          </h2>
          <p className="body-medium" style={{ maxWidth: '700px', margin: '0 auto' }}>
            The intersection of AI, career growth, and creative design excellence
          </p>
        </div>

        {/* Impact Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}
        >
          {impactStats.map((stat, index) => {
            const IconComponent = icons[stat.highlight];
            return (
              <div
                key={stat.id}
                className="fade-in-up"
                style={{
                  background: 'var(--bg-primary)',
                  border: '2px solid var(--border-subtle)',
                  padding: '48px 32px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  animationDelay: `${index * 0.15}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.borderColor = 'var(--brand-electric)';
                  e.currentTarget.style.boxShadow = '0 24px 64px rgba(139, 92, 246, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Animated Background */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'var(--gradient-accent)',
                    opacity: 0.05,
                    transform: 'rotate(-45deg)',
                  }}
                />

                {/* Icon */}
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    background: 'var(--gradient-card)',
                    border: '1px solid var(--brand-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {IconComponent && (
                    <IconComponent size={32} color="var(--brand-electric)" />
                  )}
                </div>

                {/* Highlight Label */}
                <div
                  className="mono-font"
                  style={{
                    fontSize: '12px',
                    color: 'var(--brand-electric)',
                    marginBottom: '12px',
                    fontWeight: '600',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {stat.highlight}
                </div>

                {/* Content */}
                <h3
                  className="heading-2"
                  style={{
                    marginBottom: '16px',
                    color: 'var(--text-primary)',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {stat.title}
                </h3>
                <p
                  className="body-medium"
                  style={{
                    color: 'var(--text-secondary)',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Impact;
