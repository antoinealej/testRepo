import React from 'react';
import LunarImage from './LunarImage';
import moonLanding from '../../assets/moon-landing.jpg';

const Introduction: React.FC = () => {
  return (
    <section id="introduction" className="container" tabIndex={-1} aria-labelledby="intro-heading">
      <h1 id="intro-heading">History of Lunar Exploration</h1>
      <p>
        Discover the fascinating journey of humanity's exploration of the Moon, from early robotic missions to the iconic Apollo landings and beyond.
      </p>
      <LunarImage
        src={moonLanding}
        alt="Astronaut on the Moon during Apollo 11 mission, with Earth visible in the background"
        className="intro-image"
      />
    </section>
  );
};

export default Introduction;
