import React from 'react';

const Timeline: React.FC = () => {
  return (
    <section aria-labelledby="timeline-heading">
      <h2 id="timeline-heading">Chronological Timeline of Major Lunar Missions</h2>
      <ol>
        <li><strong>1959:</strong> Luna 1 - First spacecraft to reach vicinity of the Moon (Soviet Union)</li>
        <li><strong>1969:</strong> Apollo 11 - First manned Moon landing (USA)</li>
        <li><strong>1976:</strong> Luna 24 - Last Soviet lunar sample return mission</li>
        <li><strong>1994:</strong> Clementine - Lunar mapping mission (USA)</li>
        <li><strong>2007:</strong> Chang'e 1 - First Chinese lunar orbiter</li>
        <li><strong>2019:</strong> Chang'e 4 - First soft landing on Moon's far side</li>
      </ol>
      <div style={{width: '100%', height: '200px', backgroundColor: '#ddd', textAlign: 'center', lineHeight: '200px', color: '#555'}}>
        [Timeline Image Placeholder]
      </div>
    </section>
  );
};

export default Timeline;
