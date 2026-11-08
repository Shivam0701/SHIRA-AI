import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { services } from '../mock';

/* 3D tilt card */
const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const move = (e) => {
    const b = ref.current.getBoundingClientRect();
    const x = ((e.clientX - b.left) / b.width  - 0.5) * 16;
    const y = ((e.clientY - b.top)  / b.height - 0.5) * -16;
    ref.current.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1.02,1.02,1.02)`;
    ref.current.style.boxShadow = `${-x * 0.8}px ${y * 0.8}px 30px rgba(14,165,233,0.12)`;
  };
  const leave = () => {
    ref.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
    ref.current.style.boxShadow = 'none';
  };
  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={move}
      onMouseLeave={leave}
      style={{ transition: 'transform 0.5s cubic-bezier(0.19,1,0.22,1), box-shadow 0.5s', transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="svc-section section section-dark" ref={ref}>
      <div className="shira-container">

        {/* Asymmetric header */}
        <div className="svc-header">
          <div>
            <motion.div
              className="section-eyebrow mono-font"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              02 — What We Build
            </motion.div>
            <div className="svc-headline-wrap" style={{ overflow: 'hidden' }}>
              <motion.h2
                className="svc-headline"
                initial={{ y: '100%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.08, ease: [0.19,1,0.22,1] }}
              >
                From ideas to <span className="gradient-text">intelligent solutions</span>
              </motion.h2>
            </div>
          </div>
          <motion.p
            className="body-medium svc-sub"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We build technology that moves your business forward — from first concept to deployed product.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="svc-grid">
          {services.map((svc, i) => {
            const Icon = Icons[svc.icon];
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.1 + i * 0.06, ease: [0.19,1,0.22,1] }}
              >
                <TiltCard className="svc-card">
                  <div className="svc-card__num mono-font">{String(i + 1).padStart(2, '0')}</div>
                  <div className="svc-card__icon">
                    {Icon && <Icon size={20} color="var(--electric)" strokeWidth={1.8} />}
                  </div>
                  <h3 className="svc-card__title">{svc.title}</h3>
                  <p className="svc-card__desc">{svc.description}</p>
                  <Icons.ArrowUpRight size={16} className="svc-card__arrow" />
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="svc-cta"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <button
            className="btn-primary"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discuss Your Project <Icons.ArrowRight size={14} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
