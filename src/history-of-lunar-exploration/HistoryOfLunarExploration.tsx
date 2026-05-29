import React from 'react';
import Introduction from './components/Introduction';
import Timeline from './components/Timeline';
import Milestones from './components/Milestones';
import FutureInitiatives from './components/FutureInitiatives';

const HistoryOfLunarExploration: React.FC = () => {
  return (
    <main>
      <h1>History of Lunar Exploration</h1>
      <Introduction />
      <Timeline />
      <Milestones />
      <FutureInitiatives />
    </main>
  );
};

export default HistoryOfLunarExploration;
