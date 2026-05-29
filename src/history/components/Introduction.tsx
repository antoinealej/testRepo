import React from 'react';
import styles from '../HistoryPage.module.css';

const Introduction: React.FC = () => {
  return (
    <section aria-labelledby="introduction-heading" className={styles.introductionSection}>
      <h1 id="introduction-heading">
        History of Lunar Exploration
      </h1>
      <p>
        Since the dawn of space exploration, humanity has been captivated by the Moon, Earth's closest celestial neighbor. From early robotic missions to the historic Apollo 11 landing, and continuing with modern lunar programs, the journey to explore the Moon has been marked by remarkable milestones and technological achievements. This page presents a comprehensive overview of the major missions and the ongoing quest to understand and explore our lunar companion.
      </p>
    </section>
  );
};

export default Introduction;
