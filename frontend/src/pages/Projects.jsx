import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'SHIRA OT Tracker',
    description:
      'A smart overtime tracking and salary management platform that helps employees record working hours, track overtime, calculate earnings and manage work schedules effortlessly.',
    link: 'https://ottracker.shiraai.in',
    tag: 'SaaS Platform',
    featured: true,
  },
  {
    title: 'Genzla',
    description:
      'A full-stack luxury fashion platform for custom clothing and curated products with modern UI and real-world deployment.',
    link: 'https://www.genzla.com/',
    tag: 'E-Commerce + On-Demand Design',
  },
  {
    title: 'Stranger Things Inspired Portfolio',
    description:
      'A cinematic developer portfolio inspired by Stranger Things with immersive UI, custom animations, and storytelling.',
    link: 'https://stranger-things-portfolio.vercel.app/',
    tag: 'Creative UI',
  },
  {
    title: 'Advocate Portfolio Website',
    description:
      'A professional legal portfolio built for trust, clarity, and conversion with a clean modern layout.',
    link: 'https://adv-shivendra-kumar.vercel.app/',
    tag: 'Professional',
  },
];

const Projects = () => {
  return (
    <section className="projects-page cinematic-page">
      <div className="shira-container">

        {/* HEADER */}
        <header className="projects-header cinematic-header">
          <span className="projects-eyebrow">OUR WORK</span>
          <h1 className="heading-1">
            Explore Our <span className="gradient-text">Work</span>
          </h1>
          <p className="body-medium">
            A curated collection of digital products crafted with strategy,
            design, and performance in mind.
          </p>
        </header>

        {/* ALL PROJECTS */}
        <div className="projects-list">
          {projects.map((project, i) => (
            <article className="project-featured" style={{ animationDelay: `${i * 120}ms` }} key={i}>
              <div className="project-featured__badge">
                <span className="project-featured__tag">{project.tag}</span>
                {project.featured && (
                  <span className="project-featured__label">Featured Project</span>
                )}
              </div>
              <h2 className="project-featured__title">{project.title}</h2>
              <p className="project-featured__desc">{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className="btn-primary project-btn">
                Visit Project
                <ExternalLink size={18} />
              </a>
            </article>
          ))}
        </div>

        {/* FOOTER */}
        <footer className="projects-footer cinematic-footer">
          <p className="body-medium">
            Beyond these, we've built internal tools, backend systems, and
            scalable digital solutions across industries.
          </p>
        </footer>

      </div>
    </section>
  );
};

export default Projects;
