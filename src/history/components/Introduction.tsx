import React from 'react';
import luna1Image from '../assets/luna1.jpg';

const Introduction: React.FC = () => {
  return (
    <section aria-labelledby="introduction-heading">
      <h2 id="introduction-heading">Introduction to Lunar Exploration</h2>
      <img src={luna1Image} alt="Luna 1 spacecraft approaching the Moon" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
      <p>
        The history of lunar exploration is a fascinating journey of human curiosity and technological achievement. From early robotic missions to the iconic Apollo landings, humanity has sought to understand our closest celestial neighbor, the Moon.
      </p>
    </section>
  );
};

export default Introduction;
