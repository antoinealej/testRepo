import React from 'react';
import Introduction from './components/Introduction';
import Timeline from './components/Timeline';
import FutureInitiatives from './components/FutureInitiatives';
import styles from './HistoryPage.module.css';

const HistoryPage: React.FC = () => {
  return (
    <main className={styles.main} aria-label="History of Lunar Exploration">
      <Introduction />
      <Timeline />
      <FutureInitiatives />
    </main>
  );
};

export default HistoryPage;
