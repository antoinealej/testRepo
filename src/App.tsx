import React from 'react';
import './App.css';

const missions = [
  {
    year: 1959,
    name: 'Luna 1',
    description: 'First spacecraft to reach the vicinity of the Moon, launched by the Soviet Union.',
    image: '/images/luna1.jpg',
    alt: 'Luna 1 spacecraft illustration',
  },
  {
    year: 1966,
    name: 'Luna 9',
    description: 'First spacecraft to achieve a soft landing on the Moon and transmit photographic data.',
    image: '/images/luna9.jpg',
    alt: 'Luna 9 lander on the Moon',
  },
  {
    year: 1969,
    name: 'Apollo 11',
    description: 'First manned Moon landing mission by NASA, astronauts Neil Armstrong and Buzz Aldrin walked on the lunar surface.',
    image: '/images/apollo11.jpg',
    alt: 'Apollo 11 astronauts on the Moon',
  },
  {
    year: 1976,
    name: 'Luna 24',
    description: 'Last Soviet lunar mission to return lunar soil samples to Earth.',
    image: '/images/luna24.jpg',
    alt: 'Luna 24 spacecraft',
  },
  {
    year: 1994,
    name: 'Clementine',
    description: 'Joint mission by NASA and the Strategic Defense Initiative Organization to map the Moon.',
    image: '/images/clementine.jpg',
    alt: 'Clementine spacecraft orbiting the Moon',
  },
  {
    year: 2007,
    name: 'SELENE (Kaguya)',
    description: 'Japanese lunar orbiter mission to study the Moon’s origin and evolution.',
    image: '/images/kaguya.jpg',
    alt: 'SELENE Kaguya spacecraft',
  },
  {
    year: 2013,
    name: 'LADEE',
    description: 'NASA mission to study the lunar atmosphere and dust environment.',
    image: '/images/ladee.jpg',
    alt: 'LADEE spacecraft',
  },
  {
    year: 2019,
    name: 'Chandrayaan-2',
    description: 'Indian lunar mission including orbiter, lander, and rover to study the Moon.',
    image: '/images/chandrayaan2.jpg',
    alt: 'Chandrayaan-2 mission illustration',
  },
];

const futureInitiatives = [
  {
    name: 'Artemis Program',
    description: 'NASA-led program aiming to return humans to the Moon by the mid-2020s and establish sustainable exploration.',
  },
  {
    name: 'Lunar Gateway',
    description: 'International space station in lunar orbit to support long-term lunar exploration.',
  },
  {
    name: 'China Lunar Exploration Program',
    description: 'China’s ongoing robotic and crewed lunar exploration missions including Chang’e series.',
  },
  {
    name: 'Commercial Lunar Payload Services (CLPS)',
    description: 'NASA initiative to contract private companies to deliver science and technology payloads to the Moon.',
  },
];

function App() {
  return (
    <div className="App">
      <header>
        <h1 tabIndex={0}>History of Lunar Exploration</h1>
        <nav aria-label="Primary">
          <ul className="nav-list">
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#timeline">Timeline</a></li>
            <li><a href="#future">Future Initiatives</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="introduction" tabIndex={-1}>
          <h2>Introduction</h2>
          <p>
            Lunar exploration has fascinated humanity for centuries, culminating in a series of robotic and manned missions that have expanded our understanding of the Moon. From early flybys to historic landings, the Moon has served as a proving ground for space technology and a stepping stone for deeper space exploration.
          </p>
        </section>

        <section id="timeline" tabIndex={-1}>
          <h2>Major Lunar Exploration Missions Timeline</h2>
          <ul className="timeline">
            {missions.map(({ year, name, description, image, alt }) => (
              <li key={name} className="timeline-item">
                <time dateTime={year.toString()}>{year}</time>
                <h3>{name}</h3>
                <img src={image} alt={alt} loading="lazy" width={300} height={200} />
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="future" tabIndex={-1}>
          <h2>Future Lunar Exploration Initiatives</h2>
          <ul className="future-list">
            {futureInitiatives.map(({ name, description }) => (
              <li key={name}>
                <h3>{name}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer>
        <p>© 2024 Lunar Exploration History. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
