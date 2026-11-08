import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { impactStats } from '../mock';
import { Sparkles, TrendingUp, Palette } from 'lucide-react';

const icons  = { Intelligence: Sparkles, Career: TrendingUp, Design: Palette };
const accents = ['#0ea5e9', '#7c3aed', '#d4a853'];

export default function Impact() {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="impact-section section section-dark" ref={ref}>
      <div className="shira-container">

        <div className="impact-header">
          <motion.div
            className="section-eyebrow mono-font"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            04 — Our Impact
          </motion.div>
          <div style={{ overflow: 'hidden' }}>
            <motion.h2
              className="impact-headline"
              initial={{ y: '100%' }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.19,1,0.22,1] }}
            >
              Transforming <span className="gradient-text">Digital Futures</span>
            </motion.h2>
          </div>
        </div>

        <div className="impact-cards">
          {impactStats.map((stat, i) => {
            const Icon  = icons[stat.highlight];
            const color = accents[i];
            return (
              <motion.div
                key={stat.id}
                className="impact-card"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.19,1,0.22,1] }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className="impact-card__top" style={{ borderColor: color + '44' }}>
                  <div className="impact-card__icon" style={{ borderColor: color + '44' }}>
                    {Icon && <Icon size={26} color={color} strokeWidth={1.6} />}
                  </div>
                  <div className="mono-font impact-card__kicker" style={{ color }}>{stat.highlight}</div>
                </div>
                <h3 className="impact-card__title">{stat.title}</h3>
                <p className="body-small impact-card__desc">{stat.description}</p>
                <div className="impact-card__bar" style={{ background: color }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
