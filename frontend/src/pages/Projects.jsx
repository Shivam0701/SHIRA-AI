
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
    <section className="section section-dark">
      <div className="shira-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h1 className="heading-1">
            Few of Our <span className="gradient-text">Selected Projects</span>
          </h1>
          <p
            className="body-medium"
            style={{ maxWidth: '720px', margin: '16px auto 0' }}
          >
            A snapshot of some real-world projects we’ve built and delivered for
            clients across different domains.
          </p>
        </div>

        {/* Projects List */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                padding: '32px',
              }}
            >
              <h3 className="heading-3" style={{ marginBottom: '12px' }}>
                {project.title}
              </h3>

              <p
                className="body-medium"
                style={{ marginBottom: '20px' }}
              >
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ width: 'fit-content' }}
              >
                View Live Project
                <ExternalLink size={18} />
              </a>
            </div>
          ))}
        </div>

        {/* Closing Line */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '80px',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <p className="body-medium">
            Apart from these, we have worked on games, software solutions,
            backend systems, and many other digital products — delivering value
            to happy customers across industries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;