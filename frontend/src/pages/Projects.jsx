import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
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
  {
    title: 'Real Estate Business Website',
    description:
      'A business-focused real estate platform showcasing listings, filters, and smooth user experience.',
    link: 'https://real-estate-shira.vercel.app/',
    tag: 'Business',
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
            Selected <span className="gradient-text">Projects</span>
          </h1>

          <p className="body-medium">
            A curated collection of digital products crafted with strategy,
            design, and performance in mind.
          </p>
        </header>

        {/* PROJECT LIST */}
        <div className="projects-list">
          {projects.map((project, i) => (
            <article
              className="project-card cinematic-card"
              style={{ animationDelay: `${i * 140}ms` }}
              key={i}
            >
              {/* Card Header */}
              <div className="project-card-top">
                <span className="project-tag">{project.tag}</span>
                <ArrowUpRight size={18} className="project-arrow" />
              </div>

              <h3 className="heading-3">{project.title}</h3>

              <p className="body-medium project-desc">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="btn-primary project-btn"
              >
                View Live Project
                <ExternalLink size={18} />
              </a>
            </article>
          ))}
        </div>

        {/* FOOTER */}
        <footer className="projects-footer cinematic-footer">
          <p className="body-medium">
            Beyond these, we’ve built internal tools, backend systems, and
            scalable digital solutions across industries.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Projects;
