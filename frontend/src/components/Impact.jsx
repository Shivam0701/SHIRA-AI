import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { impactStats } from '../mock';
import { Sparkles, TrendingUp, Palette } from 'lucide-react';

const icons = { Intelligence: Sparkles, Career: TrendingUp, Design: Palette };
const colors = ['#00d4ff', '#2563eb', '#7c3aed'];
const yOffsets = [[30, -30], [-30, 30], [30, -30]];

const ImpactCard = ({ stat, i, inView, scrollYProgress }) => {
  const Icon = icons[stat.highlight];
  const y = useTransform(scrollYProgress, [0, 1], yOffsets[i]);
  return (
    <motion.div
      className="impact-card"
      style={{ y }}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: 0.15 + i * 0.12 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      <div className="impact-card__bar" style={{ background: colors[i] }} />
      <div className="impact-card__icon" style={{ borderColor: `${colors[i]}33` }}>
        {Icon && <Icon size={24} color={colors[i]} strokeWidth={1.6} />}
      </div>
      <div className="mono-font impact-card__kicker" style={{ color: colors[i] }}>
        {stat.highlight}
      </div>
      <h3 className="impact-card__title">{stat.title}</h3>
      <p className="body-small impact-card__desc">{stat.description}</p>
    </motion.div>
  );
};

export default function Impact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  return (
    <section className="impact-section section section-accent" ref={ref}>
      <div className="section-index mono-font">04</div>
      <div className="shira-container">
        <motion.div
          className="impact-kicker mono-font"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Our Impact
        </motion.div>

        <motion.h2
          className="impact-headline"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.08 }}
        >
          Transforming<br />
          <span className="gradient-text">Digital Futures</span>
        </motion.h2>

        <div className="impact-strip">
          {impactStats.map((stat, i) => (
            <ImpactCard
              key={stat.id}
              stat={stat}
              i={i}
              inView={inView}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
