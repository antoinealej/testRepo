import React from 'react';
import './LunarHistory.css';
import Introduction from './components/Introduction';
import Timeline from './components/Timeline';
import Milestones from './components/Milestones';
import FutureInitiatives from './components/FutureInitiatives';

const LunarHistory: React.FC = () => {
  return (
    <main className="lunar-history" lang="en">
      <nav aria-label="Primary navigation">
        <ul>
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#timeline">Timeline</a></li>
          <li><a href="#milestones">Milestones</a></li>
          <li><a href="#future">Future Initiatives</a></li>
        </ul>
      </nav>

      <Introduction />
      <Timeline />
      <Milestones />
      <FutureInitiatives />
    </main>
  );
};

export default LunarHistory;
