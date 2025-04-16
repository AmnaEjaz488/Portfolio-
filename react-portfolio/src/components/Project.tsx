import React from 'react';

interface ProjectProps {
  title: string;
  image: string;
  appLink: string;
  repoLink: string;
}

const Project: React.FC<ProjectProps> = ({ title, image, appLink, repoLink }) => {
  return (
    <div className="project">
      <img src={image} alt={`${title} screenshot`} />
      <h3>{title}</h3>
      <a href={appLink} target="_blank" rel="noopener noreferrer">Deployed App</a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  );
};

export default Project;