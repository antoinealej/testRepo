import React from 'react';

const Milestones: React.FC = () => {
  return (
    <section aria-labelledby="milestones-heading">
      <h2 id="milestones-heading">Key Milestones in Lunar Exploration</h2>
      <ul>
        <li><strong>Apollo 11 (1969):</strong> First humans walked on the Moon, Neil Armstrong and Buzz Aldrin.</li>
        <li><strong>Robotic Missions:</strong> Early Soviet Luna missions and later robotic explorers paved the way for human landings.</li>
        <li><strong>Modern Programs:</strong> Renewed interest with Artemis program and international lunar exploration collaborations.</li>
      </ul>
      <div style={{width: '100%', height: '200px', backgroundColor: '#ddd', textAlign: 'center', lineHeight: '200px', color: '#555'}}>
        [Milestones Image Placeholder]
      </div>
    </section>
  );
};

export default Milestones;
