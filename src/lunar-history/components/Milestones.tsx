import React from 'react';
import LunarImage from './LunarImage';
import apolloFlag from '../../assets/apollo-flag.jpg';

const Milestones: React.FC = () => {
  return (
    <section id="milestones" className="container" tabIndex={-1} aria-labelledby="milestones-heading">
      <h2 id="milestones-heading">Key Milestones in Lunar Exploration</h2>
      <p>Highlighting landmark achievements such as Apollo 11, robotic missions, and modern lunar programs.</p>
      <ul>
        <li>
          <strong>Apollo 11 Moon Landing:</strong> First humans to walk on the Moon in 1969.
          <LunarImage src={apolloFlag} alt="American flag planted on the Moon during Apollo 11 mission" className="milestones-image" />
        </li>
        {/* Additional milestones can be added here */}
      </ul>
    </section>
  );
};

export default Milestones;
