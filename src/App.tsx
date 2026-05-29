import React from 'react';

const missions = [
  { year: 1959, name: 'Luna 1', description: 'First spacecraft to reach the vicinity of the Moon (Soviet Union).' },
  { year: 1969, name: 'Apollo 11', description: 'First manned Moon landing by NASA astronauts Neil Armstrong and Buzz Aldrin.' },
  { year: 1976, name: 'Luna 24', description: 'Last Soviet lunar sample return mission.' },
  { year: 1994, name: 'Clementine', description: 'First lunar mission to map the Moon globally.' },
  { year: 2009, name: 'LCROSS', description: 'Confirmed presence of water ice in lunar south pole.' },
];

const milestones = [
  { title: 'Apollo 11 Moon Landing', year: 1969, description: 'Neil Armstrong and Buzz Aldrin became the first humans to walk on the Moon.' },
  { title: 'Robotic Lunar Missions', year: 1959, description: 'Series of unmanned missions by Soviet Luna and US Surveyor programs.' },
  { title: 'Modern Lunar Programs', year: 2000, description: 'New missions by China, India, and private companies expanding lunar exploration.' },
];

const futureInitiatives = [
  { title: 'Artemis Program', description: 'NASA-led program aiming to return humans to the Moon by mid-2020s and establish sustainable exploration.' },
  { title: 'Lunar Gateway', description: 'International space station in lunar orbit to support long-term lunar missions.' },
  { title: 'Commercial Lunar Landers', description: 'Private companies developing landers for cargo and crewed missions.' },
];

const App: React.FC = () => {
  return (
    <main>
      <nav aria-label="Primary">
        <ul style={{ display: 'flex', gap: '1rem', padding: 0, listStyle: 'none' }}>
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#timeline">Timeline of Missions</a></li>
          <li><a href="#milestones">Milestones</a></li>
          <li><a href="#future">Future Initiatives</a></li>
        </ul>
      </nav>

      <section id="introduction" tabIndex={-1}>
        <h1>Lunar Exploration History</h1>
        <p>
          Welcome to the history of lunar exploration. Discover the major missions, milestones, and future initiatives related to humanity's journey to the Moon.
        </p>
      </section>

      <section id="timeline" tabIndex={-1}>
        <h2>Timeline of Major Lunar Missions</h2>
        <ul>
          {missions.map(({ year, name, description }) => (
            <li key={name}>
              <strong>{year} - {name}:</strong> {description}
            </li>
          ))}
        </ul>
      </section>

      <section id="milestones" tabIndex={-1}>
        <h2>Key Milestones</h2>
        <ul>
          {milestones.map(({ title, year, description }) => (
            <li key={title}>
              <strong>{title} ({year}):</strong> {description}
            </li>
          ))}
        </ul>
      </section>

      <section id="future" tabIndex={-1}>
        <h2>Future Lunar Exploration Initiatives</h2>
        <ul>
          {futureInitiatives.map(({ title, description }) => (
            <li key={title}>
              <strong>{title}:</strong> {description}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default App;
