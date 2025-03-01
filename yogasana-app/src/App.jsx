import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CommunityFeed from './pages/CommunityFeed';
import TrainingCalendar from './pages/TrainingCalendar';
import MyActivities from './pages/MyActivities';
import LearnYoga from './pages/LearnYoga';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-6 max-w-6xl">
          <Routes>
            <Route path="/" element={<CommunityFeed />} />
            <Route path="/community-feed" element={<CommunityFeed />} />
            <Route path="/training-calendar" element={<TrainingCalendar />} />
            <Route path="/my-activities" element={<MyActivities />} />
            <Route path="/learn-yoga" element={<LearnYoga />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
