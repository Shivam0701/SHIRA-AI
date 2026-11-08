import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { services } from '../mock';
import { ArrowRight } from 'lucide-react';

const Tilt = ({ children }) => {
  const ref = useRef(null);
  const onMove = (e) => {
    const b = ref.current.getBoundingClientRect();
    const x = ((e.clientX - b.left) / b.width - 0.5) * 14;
    const y = ((e.clientY - b.top) / b.height - 0.5) * -14;
    ref.current.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${y}deg) scale(1.02)`;
  };
  const onLeave = () => { ref.current.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)'; };
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ transition: 'transform 0.35s cubic-bezier(0.19,1,0.22,1)', transformStyle: 'preserve-3d' }}>
      {children}
    </div>
  );
};

const ServiceCard = ({ service, index, inView }) => {
  const Icon = LucideIcons[service.icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.19,1,0.22,1] }}
    >
      <Tilt>
        <div className="svc-card">
          <div className="svc-card__num mono-font">{String(index + 1).padStart(2,'0')}</div>
          <div className="svc-card__icon">
            {Icon && <Icon size={20} color="var(--cyan)" strokeWidth={1.8} />}
          </div>
          <h3 className="svc-card__title">{service.title}</h3>
          <p className="svc-card__desc">{service.description}</p>
          <div className="svc-card__arrow"><ArrowRight size={14} /></div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="svc-section section section-accent" ref={ref}>
      <div className="section-index mono-font">02</div>

      <div className="shira-container">
        {/* Asymmetric header */}
        <div className="svc-header">
          <div className="svc-header__left">
            <motion.div
              className="section-eyebrow mono-font"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              What We Build
            </motion.div>
            <motion.h2
              className="svc-headline"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.05 }}
            >
              From ideas to<br />
              <span className="gradient-text">intelligent solutions</span>
            </motion.h2>
          </div>
          <motion.p
            className="svc-header__sub body-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            We build technology that moves your business forward — from first concept to deployed product.
          </motion.p>
        </div>

        {/* Cards — 4×2 grid with offset row */}
        <div className="svc-grid">
          {services.map((svc, i) => (
            <ServiceCard key={svc.id} service={svc} index={i} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="svc-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            className="btn-primary"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discuss Your Project <ArrowRight size={14} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
