import React from 'react';
import LunarImage from './LunarImage';
import luna1 from '../../assets/luna-1.jpg';
import apollo11 from '../../assets/apollo-11.jpg';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="container" tabIndex={-1} aria-labelledby="timeline-heading">
      <h2 id="timeline-heading">Chronological Timeline of Lunar Missions</h2>
      <p>Explore the major missions that have shaped our understanding of the Moon over the decades.</p>
      <ul>
        <li>
          <strong>1959 - Luna 1:</strong> First spacecraft to reach the vicinity of the Moon.
          <LunarImage src={luna1} alt="Luna 1 spacecraft illustration" className="timeline-image" />
        </li>
        <li>
          <strong>1969 - Apollo 11:</strong> First manned Moon landing.
          <LunarImage src={apollo11} alt="Apollo 11 lunar module on the Moon surface" className="timeline-image" />
        </li>
        {/* Additional timeline items can be added here */}
      </ul>
    </section>
  );
};

export default Timeline;
