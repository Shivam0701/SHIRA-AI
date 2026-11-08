import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Spline from '@splinetool/react-spline';

/* Staggered word reveal */
const words = ['Build.', 'Create.', 'Launch.'];
const headline = ['We turn ideas into', 'intelligent digital', 'products.'];

const MagneticBtn = ({ children, onClick, className }) => {
  const ref = useRef(null);
  const onMove = (e) => {
    const b = ref.current.getBoundingClientRect();
    const x = e.clientX - b.left - b.width / 2;
    const y = e.clientY - b.top - b.height / 2;
    ref.current.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
  };
  const onLeave = () => { ref.current.style.transform = 'translate(0,0)'; };
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} style={{ display: 'inline-block', transition: 'transform 0.4s cubic-bezier(0.19,1,0.22,1)' }}>
      <button className={className} onClick={onClick}>{children}</button>
    </div>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -120]);
  const y2 = useTransform(scrollY, [0, 600], [0, -60]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero-stage" ref={containerRef}>
      {/* Full-bleed Spline background */}
      <div className="hero-spline-bg">
        <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
        <div className="hero-spline-overlay" />
      </div>

      {/* Scanline texture */}
      <div className="hero-scanlines" aria-hidden="true" />

      {/* Corner labels */}
      <motion.div className="hero-corner hero-corner--tl mono-font" style={{ opacity }}>
        <span className="hero-corner__dot" />
        AI-POWERED DIGITAL STUDIO
      </motion.div>
      <motion.div className="hero-corner hero-corner--tr mono-font" style={{ opacity }}>
        NEW DELHI — INDIA
      </motion.div>
      <motion.div className="hero-corner hero-corner--bl mono-font" style={{ opacity }}>
        EST. 2024
      </motion.div>
      <motion.div className="hero-corner hero-corner--br mono-font" style={{ opacity }}>
        SCROLL TO EXPLORE
      </motion.div>

      {/* Center content */}
      <div className="hero-center">
        {/* Cycling word above */}
        <motion.div
          className="hero-cycling mono-font"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ y: y2 }}
        >
          <span className="hero-cycling__dot" />
          SHIRA AI
        </motion.div>

        {/* Main headline */}
        <motion.h1 className="hero-headline" style={{ y: y1 }}>
          {headline.map((line, li) => (
            <span key={li} className="hero-headline__line">
              {line.split('').map((ch, ci) => (
                <motion.span
                  key={ci}
                  className={ch === ' ' ? 'hero-headline__space' : 'hero-headline__char'}
                  initial={{ opacity: 0, y: 60, rotateX: -40 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 + li * 0.12 + ci * 0.015, ease: [0.19, 1, 0.22, 1] }}
                >
                  {ch}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        {/* Sub copy + CTA */}
        <motion.div
          className="hero-sub"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
        >
          <p className="hero-sub__text">
            From intelligent websites and mobile apps to AI automation and SaaS —
            technology that drives real business growth.
          </p>
          <div className="hero-cta-row">
            <MagneticBtn className="btn-primary" onClick={() => scrollTo('#contact')}>
              Start a Project <ArrowDown size={14} />
            </MagneticBtn>
            <MagneticBtn className="btn-secondary" onClick={() => scrollTo('#services')}>
              Explore Services
            </MagneticBtn>
          </div>
        </motion.div>
      </div>

      {/* Animated bottom border */}
      <motion.div
        className="hero-floor-line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.6, ease: [0.19, 1, 0.22, 1] }}
      />
    </section>
  );
};

export default Hero;
