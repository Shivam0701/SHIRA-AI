import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title:       'SHIRA OT Tracker',
    description: 'A smart overtime tracking and salary management platform that helps employees record working hours, track overtime, calculate earnings and manage work schedules effortlessly.',
    link:        'https://ottracker.shiraai.in',
    tag:         'SaaS Platform',
    featured:    true,
    index:       '001',
  },
  {
    title:       'Genzla',
    description: 'A full-stack luxury fashion platform for custom clothing and curated products with modern UI and real-world deployment.',
    link:        'https://www.genzla.com/',
    tag:         'E-Commerce',
    index:       '002',
  },
  {
    title:       'Stranger Things Portfolio',
    description: 'A cinematic developer portfolio inspired by Stranger Things with immersive UI, custom animations, and storytelling.',
    link:        'https://stranger-things-portfolio.vercel.app/',
    tag:         'Creative UI',
    index:       '003',
  },
  {
    title:       'Advocate Portfolio',
    description: 'A professional legal portfolio built for trust, clarity, and conversion with a clean modern layout.',
    link:        'https://adv-shivendra-kumar.vercel.app/',
    tag:         'Professional',
    index:       '004',
  },
];

const Card = ({ p, i }) => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const tRef   = useRef(null);

  const onMove = (e) => {
    const b = tRef.current.getBoundingClientRect();
    const x = ((e.clientX - b.left) / b.width  - 0.5) * 10;
    const y = ((e.clientY - b.top)  / b.height - 0.5) * -10;
    tRef.current.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
  };
  const onLeave = () => { tRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)'; };

  return (
    <motion.div
      ref={ref}
      className={`proj-card${p.featured ? ' proj-card--featured' : ''}`}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: i * 0.09, ease: [0.19,1,0.22,1] }}
    >
      <div
        ref={tRef}
        className="proj-card__inner"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ transition: 'transform 0.45s cubic-bezier(0.19,1,0.22,1)', transformStyle: 'preserve-3d', height: '100%' }}
      >
        <div className="proj-card__reveal" />

        <div className="proj-card__meta">
          <span className="proj-card__index mono-font">{p.index}</span>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
            <span className="proj-card__tag">{p.tag}</span>
            {p.featured && <span className="proj-card__feat">Featured</span>}
          </div>
        </div>

        <h3 className="proj-card__title">{p.title}</h3>
        <p className="proj-card__desc">{p.description}</p>

        <a href={p.link} target="_blank" rel="noreferrer" className="btn-primary proj-card__btn">
          Visit Project <ExternalLink size={13} />
        </a>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <div className="projects-page">
      <div className="shira-container">

        <motion.header
          className="projects-header"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.19,1,0.22,1] }}
        >
          <span className="projects-eyebrow mono-font">Our Work</span>
          <h1 className="heading-1">
            Explore Our <span className="gradient-text">Work</span>
          </h1>
          <p className="body-medium">
            A curated collection of digital products crafted with strategy, design and performance in mind.
          </p>
        </motion.header>

        <div className="proj-grid">
          {projects.map((p, i) => <Card key={i} p={p} i={i} />)}
        </div>

        <footer className="projects-footer">
          <p className="body-medium">
            Beyond these, we've built internal tools, backend systems and scalable digital solutions across industries.
          </p>
        </footer>
      </div>
    </div>
  );
}
