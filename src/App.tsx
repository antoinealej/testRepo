import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HistoryOfLunarExploration from './history-of-lunar-exploration/HistoryOfLunarExploration';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <nav style={{ backgroundColor: '#0b0c1a', padding: '1rem', textAlign: 'center' }}>
        <Link
          to="/"
          style={{
            color: '#a78bfa',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.25rem',
            marginRight: '1rem',
          }}
        >
          Home
        </Link>
        <Link
          to="/history"
          style={{
            color: '#a78bfa',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.25rem',
          }}
        >
          History of Lunar Exploration
        </Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <main style={{ padding: '2rem', textAlign: 'center', color: '#e0e0e0', backgroundColor: '#0b0c1a', minHeight: '100vh' }}>
              <h1>Welcome to the Space Exploration Portal</h1>
              <p>Explore the history and future of lunar exploration.</p>
            </main>
          }
        />
        <Route path="/history" element={<HistoryOfLunarExploration />} />
      </Routes>
    </Router>
  );
};

export default App;
