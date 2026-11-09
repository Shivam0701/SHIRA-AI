import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Line = ({ text, delay, light }) => (
  <span style={{ display: 'block', overflow: 'hidden' }}>
    <motion.span
      style={{ display: 'block', color: light ? 'var(--t1-light)' : 'var(--t1-dark)' }}
      initial={{ y: '100%' }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay, ease: [0.19,1,0.22,1] }}
    >
      {text}
    </motion.span>
  </span>
);

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end','end start'] });
  const imgY  = useTransform(scrollYProgress, [0,1], [40, -40]);
  const textY = useTransform(scrollYProgress, [0,1], [20, -20]);

  return (
    <section id="about" className="about-section" ref={ref}>
      {/* Dark left panel */}
      <div className="about-panel about-panel--dark">
        <motion.div className="about-panel__inner" style={{ y: textY }}>
          <div className="section-eyebrow mono-font">01 — About SHIRA AI</div>
          <h2 className="about-headline">
            <Line text="Building" delay={0} />
            <Line text="Digital Identities" delay={0.08} />
            <Line text={<span className="gradient-text">with Intelligence</span>} delay={0.16} />
          </h2>
          <motion.p
            className="body-medium about-body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            SHIRA AI is an AI-powered digital studio helping businesses, professionals 
            and startups establish powerful digital identities — through the precise blend 
            of intelligence, technology and creative execution.
          </motion.p>
          <motion.p
            className="body-medium about-body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Whether you're launching your first product or scaling enterprise operations — 
            we deliver solutions that are precise, modern and built to last.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <button
              className="btn-secondary"
              style={{ marginTop: 28 }}
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              What We Build <ArrowRight size={14} />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Cream right panel */}
      <div className="about-panel about-panel--cream">
        <motion.div className="about-panel__inner" style={{ y: imgY }}>
          <div className="about-editorial">
            {/* Big decorative number */}
            <div className="about-editorial__bg mono-font" aria-hidden="true">01</div>

            {/* Stats grid */}
            <div className="about-stats">
              {[
                { n: 'AI', sub: 'Powered Core' },
                { n: '100%', sub: 'Custom Built' },
                { n: '24/7', sub: 'Support' },
                { n: 'India', sub: 'New Delhi' },
              ].map(({ n, sub }) => (
                <motion.div
                  key={sub}
                  className="about-stat"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="about-stat__n">{n}</span>
                  <span className="about-stat__l mono-font">{sub}</span>
                </motion.div>
              ))}
            </div>

            {/* Mission / Approach */}
            <div className="about-pillars">
              {[
                { label: 'Mission', text: 'Empower every business with intelligent technology that drives real, measurable growth.' },
                { label: 'Approach', text: 'AI-powered automation combined with human creativity — results that consistently exceed expectations.' },
              ].map(({ label, text }) => (
                <div key={label} className="about-pillar">
                  <div className="about-pillar__label mono-font">{label}</div>
                  <p className="about-pillar__text">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
