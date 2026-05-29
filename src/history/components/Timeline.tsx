import React from 'react';
import styles from '../HistoryPage.module.css';

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
    description: 'First spacecraft to reach the vicinity of the Moon, launched by the Soviet Union.',
    imageSrc: '/assets/luna1.jpg',
    imageAlt: 'Luna 1 spacecraft illustration',
  },
  {
    year: 1969,
    name: 'Apollo 11',
    description: 'First manned Moon landing by NASA astronauts Neil Armstrong and Buzz Aldrin.',
    imageSrc: '/assets/apollo11.jpg',
    imageAlt: 'Apollo 11 lunar landing photograph',
  },
  {
    year: 2007,
    name: 'Chang’e 1',
    description: 'China’s first lunar orbiter, marking the beginning of the Chang’e lunar exploration program.',
    imageSrc: '/assets/change1.jpg',
    imageAlt: 'Chang’e 1 lunar orbiter illustration',
  },
  {
    year: 2024,
    name: 'Artemis Program',
    description: 'NASA’s program aiming to return humans to the Moon and establish sustainable exploration.',
    imageSrc: '/assets/artemis.jpg',
    imageAlt: 'Artemis program logo',
  },
];

const Timeline: React.FC = () => {
  return (
    <section aria-labelledby="timeline-heading" className={styles.timelineSection}>
      <h2 id="timeline-heading">
        Major Lunar Missions Timeline
      </h2>
      <ol className={styles.timelineList}>
        {missions.map((mission) => (
          <li key={mission.year} className={styles.timelineItem}>
            <img
              src={mission.imageSrc}
              alt={mission.imageAlt}
              className={styles.timelineItemImage}
              loading="lazy"
            />
            <div className={styles.timelineItemContent}>
              <h3>
                {mission.year} - {mission.name}
              </h3>
              <p>{mission.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Timeline;
