import React from 'react';
import Project from '../components/Project';

const Portfolio: React.FC = () => {
  const projects = [
    { title: 'Project 1', image: '/path/to/image1.jpg', appLink: '#', repoLink: '#' },
    { title: 'Project 2', image: '/path/to/image2.jpg', appLink: '#', repoLink: '#' },
    // Add more projects as needed
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;