import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li><NavLink to="/" end>About Me</NavLink></li>
        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/resume">Resume</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;