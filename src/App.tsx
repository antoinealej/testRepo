import React from 'react';
import Introduction from './components/Introduction';
import Timeline from './components/Timeline';
import FutureInitiatives from './components/FutureInitiatives';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <main>
        <Introduction />
        <Timeline />
        <FutureInitiatives />
      </main>
      <footer>
        <p>© 2024 Lunar Exploration History. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
