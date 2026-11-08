import React, { useEffect, useRef, Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import HeroScene from './HeroScene';

const isMobile = () =>
  typeof window !== 'undefined' &&
  (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth < 768);

const word = (text, delay) => (
  <span style={{ overflow: 'hidden', display: 'block' }}>
    <motion.span
      style={{ display: 'block' }}
      initial={{ y: '110%' }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay, ease: [0.19, 1, 0.22, 1] }}
    >
      {text}
    </motion.span>
  </span>
);

const MagBtn = ({ children, className, onClick, href, target }) => {
  const ref = useRef(null);
  const onMove = (e) => {
    const b = ref.current.getBoundingClientRect();
    const x = (e.clientX - b.left - b.width / 2) * 0.25;
    const y = (e.clientY - b.top - b.height / 2) * 0.25;
    ref.current.querySelector('.mag-inner').style.transform = `translate(${x}px,${y}px)`;
  };
  const onLeave = () => { ref.current.querySelector('.mag-inner').style.transform = 'translate(0,0)'; };

  const Tag = href ? 'a' : 'button';
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} style={{ display: 'inline-block' }}>
      <Tag className={className} onClick={onClick} href={href} target={target} rel={target ? 'noreferrer' : undefined}>
        <span className="mag-inner" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, transition: 'transform 0.45s cubic-bezier(0.19,1,0.22,1)' }}>
          {children}
        </span>
      </Tag>
    </div>
  );
};

export { MagBtn };

export default function Hero() {
  const [show3D, setShow3D] = useState(false);
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    // Defer 3D load, skip on mobile/low-end
    if (!isMobile()) {
      const t = setTimeout(() => setShow3D(true), 100);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <section className="hero-root">
      {/* 3D Canvas — desktop only */}
      {show3D && (
        <Suspense fallback={<div className="hero-canvas-fallback" />}>
          <HeroScene />
        </Suspense>
      )}

      {/* Mobile fallback bg */}
      {!show3D && <div className="hero-mobile-bg" aria-hidden="true" />}

      {/* Overlay vignette */}
      <div className="hero-vignette" aria-hidden="true" />

      {/* Noise texture */}
      <div className="hero-noise" aria-hidden="true" />

      {/* Content */}
      <div className="hero-content">
        {/* Eyebrow */}
        <motion.div
          className="hero-eyebrow mono-font"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="hero-eyebrow__dot" />
          AI-Powered Digital Studio — New Delhi
        </motion.div>

        {/* Headline */}
        <h1 className="hero-headline">
          {word('We Build Digital', 0.35)}
          {word('Experiences That', 0.48)}
          {word('Move Businesses Forward.', 0.61)}
        </h1>

        {/* Sub */}
        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
        >
          From business websites and mobile apps to custom software and AI-powered automation —
          <br />we turn your ideas into solutions that deliver real value.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05 }}
        >
          <MagBtn className="btn-primary" onClick={() => scrollTo('#contact')}>
            Start a Project <ArrowRight size={14} />
          </MagBtn>
          <MagBtn className="btn-secondary" onClick={() => scrollTo('#services')}>
            Explore Services
          </MagBtn>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          {[
            { n: '100%', l: 'AI-Enhanced' },
            { n: '24/7', l: 'Support' },
            { n: 'India', l: 'New Delhi' },
          ].map(({ n, l }) => (
            <div key={l} className="hero-stat">
              <span className="hero-stat__n">{n}</span>
              <span className="hero-stat__l mono-font">{l}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        className="hero-scroll"
        onClick={() => scrollTo('#about')}
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <ArrowDown size={16} />
      </motion.button>
    </section>
  );
}
