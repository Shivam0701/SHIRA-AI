import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Stranger Things Inspired Portfolio',
    description:
      'A creative developer portfolio inspired by the Stranger Things theme with custom UI, animations, and immersive storytelling.',
    link: 'https://stranger-things-portfolio.vercel.app/',
  },
  {
    title: 'Advocate Portfolio Website',
    description:
      'A professional advocate portfolio showcasing profile, services, and contact details with a clean and trustworthy design.',
    link: 'https://adv-shivendra-kumar.vercel.app/',
  },
  {
    title: 'Real Estate Business Website',
    description:
      'A modern real estate platform designed to showcase properties with filters, smooth UI, and business-focused layout.',
    link: 'https://real-estate-shira.vercel.app/',
  },
];

const Projects = () => {
  return (
    <section className="page-transition projects-page">
      <div className="shira-container">
        {/* HEADER */}
        <header className="projects-header">
          <h1 className="heading-1">
            Representative <span className="gradient-text">Work</span>
          </h1>
          <p className="body-medium">
            A curated snapshot of real-world projects delivered for our clients.
          </p>
        </header>

        {/* PROJECT LIST */}
        <div className="projects-list">
          {projects.map((project, i) => (
            <article className="project-card" key={i}>
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
        <footer className="projects-footer">
          <p className="body-medium">
            We’ve also delivered backend systems, software tools, and digital
            products across multiple industries.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Projects;
