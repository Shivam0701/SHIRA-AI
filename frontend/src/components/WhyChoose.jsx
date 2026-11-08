import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { whyChoose } from '../mock';

export default function WhyChoose() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end','end start'] });
  const bg = useTransform(scrollYProgress, [0,1], ['#060608','#0d0d11']);

  return (
    <motion.section
      id="why-choose"
      className="why-section section section-dark"
      ref={ref}
      style={{ background: bg }}
    >
      <div className="section-index mono-font">03</div>

      <div className="shira-container">
        {/* Full-bleed statement heading */}
        <motion.div
          className="why-statement"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <span className="why-statement__outline">The</span>{' '}
          <span className="gradient-text">SHIRA AI</span>
          <br />
          <span className="why-statement__outline">Advantage</span>
        </motion.div>

        {/* Two-column: list left, detail right */}
        <div className="why-layout">
          <div className="why-list">
            {whyChoose.map((item, i) => {
              const Icon = LucideIcons[item.icon];
              return (
                <motion.div
                  key={item.id}
                  className="why-row"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.19,1,0.22,1] }}
                >
                  <div className="why-row__num mono-font">{String(i+1).padStart(2,'0')}</div>
                  <div className="why-row__icon">
                    {Icon && <Icon size={16} color="var(--cyan)" strokeWidth={2} />}
                  </div>
                  <div className="why-row__body">
                    <div className="why-row__title">{item.title}</div>
                    <p className="body-small why-row__desc">{item.description}</p>
                  </div>
                  <div className="why-row__line" aria-hidden="true" />
                </motion.div>
              );
            })}
          </div>

          {/* Right — large decorative element */}
          <motion.div
            className="why-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="why-visual__ring why-visual__ring--outer" />
            <div className="why-visual__ring why-visual__ring--mid" />
            <div className="why-visual__ring why-visual__ring--inner" />
            <div className="why-visual__core">
              <div className="mono-font why-visual__label">WHY US</div>
              <div className="why-visual__num gradient-text">6</div>
              <div className="mono-font why-visual__sub">Advantages</div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
