import React from 'react';
import Project from '../components/Project';
import project1 from '../assets/project1.jpg';

const Portfolio: React.FC = () => {
  const projects = [
    { 
      title: 'Goal Tracker', 
      image: project1,
      appLink: 'https://goaltracker.com', 
      repoLink: 'https://github.com/marylfisher/GoalTrackerProject' 
    },
    { 
      title: 'E-Commerce App', 
      image: '/assets/project2.jpg', 
      appLink: 'https://ecommerceapp.com', 
      repoLink: 'https://github.com/AmnaEjaz488/Project-2' 
    },
    { 
      title: 'Vehicle Management Cli application', 
      image: '/assets/project3.jpg', 
      appLink: 'https://vehiclemanagement.com', 
      repoLink: 'https://github.com/AmnaEjaz488/Vehicle-Management-Cli-Application' 
    },
    { 
      title: 'Weathex', 
      image: '/assets/project4.jpg', 
      appLink: 'https://weathex.com', 
      repoLink: 'https://github.com/AmnaEjaz488/Weathex' 
    },
    { 
      title: 'Readme Generator', 
      image: '/assets/project5.jpg', 
      appLink: 'https://readmegenerator.com', 
      repoLink: 'https://github.com/AmnaEjaz488/Develop' 
    },
    { 
      title: 'Portfolio Website', 
      image: '/assets/project6.jpg', 
      appLink: 'https://myportfolio.com', 
      repoLink: 'https://github.com/username/portfolio-website' 
    },
  ];

  return (
    <section className="portfolio">
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