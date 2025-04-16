import React from 'react';
import avatar from '../assets/avatar.jpg';

const AboutMe: React.FC = () => {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      {/* Add the avatar image */}
      <img src={avatar} alt="My Avatar" 
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          margin: '1rem 0',
        }}
      />
      <p>
        Hello! I'm a web developer with experience in building React applications. I enjoy creating
        user-friendly and responsive web applications.
      </p>
    </section>
  );
};

export default AboutMe;