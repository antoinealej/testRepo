import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav aria-label="Primary navigation" className="navigation">
      <ul>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#timeline">Timeline</a></li>
        <li><a href="#future">Future Initiatives</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
