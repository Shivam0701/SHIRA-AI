import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Target, Zap, ArrowRight } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: [0.19,1,0.22,1] } },
});

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const boxY  = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section id="about" className="about-section section section-dark" ref={ref}>
      {/* Full-bleed index label */}
      <div className="section-index mono-font">01</div>

      <div className="shira-container">
        <div className="about-layout">

          {/* Left — visual installation */}
          <motion.div className="about-left" style={{ y: boxY }}>
            <div className="about-box">
              {/* Rotating border ring */}
              <div className="about-box__ring" aria-hidden="true" />
              {/* Glow */}
              <div className="about-box__glow" aria-hidden="true" />

              <div className="about-box__inner">
                <div className="mono-font about-box__label">SHIRA AI</div>
                <div className="about-box__word about-box__word--solid">AI</div>
                <div className="about-box__cross mono-font">×</div>
                <div className="about-box__word about-box__word--outline">DESIGN</div>
                <div className="mono-font about-box__sub">Intelligence meets craft</div>
              </div>

              {/* Floating chips */}
              <motion.div
                className="about-chip about-chip--a"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="about-chip__n">100%</span>
                <span className="about-chip__l mono-font">AI-Enhanced</span>
              </motion.div>

              <motion.div
                className="about-chip about-chip--b"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <span className="about-chip__n">24/7</span>
                <span className="about-chip__l mono-font">Support</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — copy */}
          <motion.div
            className="about-right"
            style={{ y: textY }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div className="section-eyebrow mono-font" variants={fadeUp(0)}>About SHIRA AI</motion.div>

            <motion.h2 className="about-headline" variants={fadeUp(0.05)}>
              Building digital<br />
              identities with<br />
              <span className="gradient-text">Intelligence</span>
            </motion.h2>

            <motion.p className="body-medium" style={{ marginBottom: 18 }} variants={fadeUp(0.1)}>
              SHIRA AI is an AI-powered digital studio helping businesses, professionals and 
              startups establish powerful digital identities — through the precise blend of 
              intelligence, technology and creative execution.
            </motion.p>

            <motion.p className="body-medium" style={{ marginBottom: 36 }} variants={fadeUp(0.15)}>
              Whether you're launching your first product or scaling enterprise operations, 
              we deliver solutions that are precise, modern and built to last.
            </motion.p>

            <motion.div className="about-points" variants={fadeUp(0.2)}>
              {[
                { icon: Target, title: 'Our Mission', text: 'Empower every business with intelligent technology that drives real, measurable growth.' },
                { icon: Zap, title: 'Our Approach', text: 'AI-powered automation combined with human creativity — results that consistently exceed expectations.' },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="about-point">
                  <div className="about-point__icon">
                    <Icon size={16} color="var(--cyan)" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="about-point__title">{title}</div>
                    <p className="body-small">{text}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp(0.25)}>
              <button
                className="btn-secondary"
                style={{ marginTop: 32 }}
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See What We Build <ArrowRight size={14} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
