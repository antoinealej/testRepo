import React from 'react';
import styles from '../HistoryPage.module.css';

const FutureInitiatives: React.FC = () => {
  return (
    <section aria-labelledby="future-initiatives-heading" className={styles.futureInitiativesSection}>
      <h2 id="future-initiatives-heading">
        Future Lunar Exploration Initiatives
      </h2>
      <p>
        The future of lunar exploration is bright and ambitious, with multiple international programs aiming to return humans to the Moon and establish a sustainable presence. Initiatives such as NASA's Artemis program, the Lunar Gateway space station, and various robotic missions by international space agencies promise to deepen our understanding of the Moon and pave the way for future exploration of Mars and beyond.
      </p>
      <div className={styles.futureInitiativesGrid}>
        <figure className={styles.futureInitiativeCard} tabIndex={0}>
          <img
            src="/assets/artemis_future.jpg"
            alt="Artemis spacecraft illustration"
            className={styles.futureInitiativeImage}
            loading="lazy"
          />
          <figcaption className={styles.futureInitiativeCaption}>
            NASA's Artemis spacecraft aiming for lunar return
          </figcaption>
        </figure>
        <figure className={styles.futureInitiativeCard} tabIndex={0}>
          <img
            src="/assets/lunar_gateway.jpg"
            alt="Lunar Gateway space station concept art"
            className={styles.futureInitiativeImage}
            loading="lazy"
          />
          <figcaption className={styles.futureInitiativeCaption}>
            Concept art of the Lunar Gateway space station
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default FutureInitiatives;
