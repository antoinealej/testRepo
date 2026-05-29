import React from 'react';
import LunarImage from './LunarImage';
import artemis from '../../assets/artemis.jpg';

const FutureInitiatives: React.FC = () => {
  return (
    <section id="future" className="container" tabIndex={-1} aria-labelledby="future-heading">
      <h2 id="future-heading">Future Lunar Exploration Initiatives</h2>
      <p>Learn about upcoming missions and plans for humanity's return to the Moon and beyond.</p>
      <LunarImage
        src={artemis}
        alt="Artist's concept of NASA Artemis lunar mission spacecraft orbiting the Moon"
        className="future-image"
      />
    </section>
  );
};

export default FutureInitiatives;
