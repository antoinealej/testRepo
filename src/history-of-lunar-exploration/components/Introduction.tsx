import React from 'react';

const Introduction: React.FC = () => {
  return (
    <section aria-labelledby="introduction-heading">
      <h2 id="introduction-heading">Introduction to Lunar Exploration</h2>
      <p>
        The exploration of the Moon has been a captivating journey for humanity, marking significant milestones in space history. From early robotic missions to the historic Apollo landings, lunar exploration has expanded our understanding of the cosmos and inspired generations.
      </p>
      <div style={{width: '100%', height: '200px', backgroundColor: '#ddd', textAlign: 'center', lineHeight: '200px', color: '#555'}}>
        [Introduction Image Placeholder]
      </div>
    </section>
  );
};

export default Introduction;
