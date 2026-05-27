import React from 'react';

const FutureInitiatives: React.FC = () => {
  return (
    <section id="future" className="section future-initiatives">
      <h2>Future Lunar Exploration Initiatives</h2>
      <p>
        The future of lunar exploration is vibrant with plans for sustainable human presence, advanced robotic missions, and international cooperation. Programs such as NASA's Artemis aim to return humans to the Moon and establish a long-term base, while private companies and other nations pursue innovative lunar projects.
      </p>
      <ul>
        <li><strong>Artemis Program:</strong> NASA's initiative to land the first woman and next man on the Moon by the mid-2020s.</li>
        <li><strong>Lunar Gateway:</strong> A planned space station orbiting the Moon to support exploration and research.</li>
        <li><strong>Commercial Lunar Payload Services (CLPS):</strong> NASA's program to contract private companies for delivering payloads to the lunar surface.</li>
        <li><strong>International Lunar Research Station:</strong> A proposed collaboration led by China and Russia for a lunar base.</li>
      </ul>
      <img
        src="/images/artemis-illustration.jpg"
        alt="Illustration of NASA's Artemis lunar mission"
        loading="lazy"
        className="future-image"
      />
    </section>
  );
};

export default FutureInitiatives;
