import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as Icons from 'lucide-react';
import { whyChoose } from '../mock';

export default function WhyChoose() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why-us" className="why-section section section-cream" ref={ref}>
      <div className="shira-container">

        {/* Split header */}
        <div className="why-header">
          <div className="why-header__left">
            <motion.div
              className="section-eyebrow mono-font"
              style={{ color: 'var(--electric)' }}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              03 — Why SHIRA AI
            </motion.div>
            <div style={{ overflow: 'hidden' }}>
              <motion.h2
                className="why-headline"
                initial={{ y: '100%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.06, ease: [0.19,1,0.22,1] }}
              >
                The <span className="gradient-text">SHIRA AI</span> Advantage
              </motion.h2>
            </div>
          </div>
          <motion.p
            className="why-header__sub"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18 }}
          >
            What makes us different — and why our clients keep coming back.
          </motion.p>
        </div>

        {/* Row list on cream */}
        <div className="why-list">
          {whyChoose.map((item, i) => {
            const Icon = Icons[item.icon];
            return (
              <motion.div
                key={item.id}
                className="why-row"
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.12 + i * 0.07, ease: [0.19,1,0.22,1] }}
              >
                <div className="why-row__num mono-font">{String(i + 1).padStart(2, '0')}</div>
                <div className="why-row__icon">
                  {Icon && <Icon size={18} color="var(--electric)" strokeWidth={1.8} />}
                </div>
                <div className="why-row__body">
                  <div className="why-row__title">{item.title}</div>
                  <p className="why-row__desc body-small">{item.description}</p>
                </div>
                <div className="why-row__swoosh" aria-hidden="true" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
