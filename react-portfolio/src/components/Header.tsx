import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <Navigation />
    </header>
  );
};

export default Header;