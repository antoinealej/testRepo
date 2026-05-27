import React from 'react';

interface Mission {
  year: number;
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const missions: Mission[] = [
  {
    year: 1959,
    name: 'Luna 1',
    description: 'The first spacecraft to reach the vicinity of the Moon, launched by the Soviet Union.',
    imageSrc: '/images/luna1.jpg',
    imageAlt: 'Luna 1 spacecraft illustration',
  },
  {
    year: 1969,
    name: 'Apollo 11',
    description: 'First manned Moon landing by NASA, with astronauts Neil Armstrong and Buzz Aldrin walking on the lunar surface.',
    imageSrc: '/images/apollo11.jpg',
    imageAlt: 'Apollo 11 astronauts on the Moon',
  },
  {
    year: 1976,
    name: 'Luna 24',
    description: 'Last Soviet robotic lunar sample return mission.',
    imageSrc: '/images/luna24.jpg',
    imageAlt: 'Luna 24 spacecraft illustration',
  },
  {
    year: 2009,
    name: 'LCROSS',
    description: 'NASA mission that confirmed the presence of water ice in a permanently shadowed lunar crater.',
    imageSrc: '/images/lcross.jpg',
    imageAlt: 'LCROSS spacecraft illustration',
  },
  {
    year: 2020,
    name: 'Chang’e 5',
    description: 'Chinese robotic mission that returned lunar samples to Earth for the first time in over 40 years.',
    imageSrc: '/images/change5.jpg',
    imageAlt: 'Chang’e 5 spacecraft illustration',
  },
];

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="section timeline">
      <h2>Major Lunar Exploration Missions</h2>
      <ol className="timeline-list">
        {missions.map(({ year, name, description, imageSrc, imageAlt }) => (
          <li key={name} className="timeline-item">
            <div className="timeline-content">
              <time dateTime={year.toString()} className="timeline-year">{year}</time>
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
            <div className="timeline-image">
              <img src={imageSrc} alt={imageAlt} loading="lazy" />
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Timeline;
