import React from 'react';

const Resume: React.FC = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <a href="/assets/resume.pdf" download>Download Resume</a>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Python</li>
        <li>Node.js</li>
      </ul>
    </section>
  );
};

export default Resume;