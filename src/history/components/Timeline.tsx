import React from 'react';
import apollo11Image from '../assets/apollo11.jpg';
import luna1Image from '../assets/luna1.jpg';
import change4Image from '../assets/change4.jpg';

interface Mission {
  year: number;
  name: string;
  description: string;
  image?: string;
  alt?: string;
}

const missions: Mission[] = [
  {
    year: 1959,
    name: 'Luna 1',
    description: 'First spacecraft to reach the vicinity of the Moon, launched by the Soviet Union.',
    image: luna1Image,
    alt: 'Luna 1 spacecraft image',
  },
  {
    year: 1969,
    name: 'Apollo 11',
    description: 'First manned Moon landing by NASA, with astronauts Neil Armstrong and Buzz Aldrin.',
    image: apollo11Image,
    alt: 'Apollo 11 lunar module on the Moon surface',
  },
  {
    year: 1976,
    name: 'Luna 24',
    description: 'Last Soviet robotic lunar sample return mission.',
  },
  {
    year: 2004,
    name: 'SMART-1',
    description: 'European Space Agency’s first lunar probe.',
  },
  {
    year: 2019,
    name: 'Chang’e 4',
    description: 'First spacecraft to land on the far side of the Moon, launched by China.',
    image: change4Image,
    alt: 'Chang’e 4 rover on the far side of the Moon',
  },
];

const Timeline: React.FC = () => {
  return (
    <section aria-labelledby="timeline-heading">
      <h2 id="timeline-heading">Chronological Timeline of Major Lunar Missions</h2>
      <ol>
        {missions.map(({ year, name, description, image, alt }) => (
          <li key={name} style={{ marginBottom: '1.5rem' }}>
            <strong>{year} - {name}:</strong> {description}
            {image && <img src={image} alt={alt} style={{ display: 'block', maxWidth: '100%', height: 'auto', marginTop: '0.5rem', borderRadius: '8px' }} />}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Timeline;
