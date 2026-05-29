import React from 'react';
import { Introduction, Timeline, Milestones, FutureInitiatives } from './components';

const HistoryPage: React.FC = () => {
  return (
    <main>
      <header>
        <h1>Lunar Exploration History</h1>
        <nav aria-label="Section navigation">
          <ul>
            <li><a href="#introduction-heading">Introduction</a></li>
            <li><a href="#timeline-heading">Timeline</a></li>
            <li><a href="#milestones-heading">Milestones</a></li>
            <li><a href="#future-initiatives-heading">Future Initiatives</a></li>
          </ul>
        </nav>
      </header>
      <Introduction />
      <Timeline />
      <Milestones />
      <FutureInitiatives />
    </main>
  );
};

export default HistoryPage;
