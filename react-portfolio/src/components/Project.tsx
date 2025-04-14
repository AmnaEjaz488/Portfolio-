import React from 'react';
import { ProjectProps } from '../types/Project';

const projects = [
  { title: 'Project 1', image: '/assets/project1.jpg', appLink: '#', repoLink: '#' },
  { title: 'Project 2', image: '/assets/project2.jpg', appLink: '#', repoLink: '#' },
  // Add more projects
];

const Project: React.FC = () => {
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

export default Project;