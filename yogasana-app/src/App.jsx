import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Removed BrowserRouter
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CommunityFeed from './components/CommunityFeed';
import TrainingCalendar from './components/TrainingCalendar';
import MyActivities from './components/MyActivities';
import LearnYoga from './components/LearnYoga';
import LeaderBoard from './pages/LeaderBoard';
import About from './pages/About';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';

// Layout component to avoid repetition
const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {children}
      </div>
    </main>
    <Footer />
  </>
);

import './App.css'
 
function App() {
  return (
    <Routes>
      {/* Redirect from root to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      
      {/* Auth routes - no navbar */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Public route */}
      <Route 
        path="/dashboard" 
        element={
          <Layout>
            <Dashboard />
          </Layout>
        } 
      />

      {/* Protected routes */}
      <Route
        path="/community-feed"
        element={
          <ProtectedRoute>
            <Layout>
              <CommunityFeed />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/training-calendar"
        element={
          <ProtectedRoute>
            <Layout>
              <TrainingCalendar />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-activities"
        element={
          <ProtectedRoute>
            <Layout>
              <MyActivities />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/learn-yoga"
        element={
          <ProtectedRoute>
            <Layout>
              <LearnYoga />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/about"
        element={
          <ProtectedRoute>
            <Layout>
              <About />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/leaderboard"
        element={
          <ProtectedRoute>
            <Layout>
              <LeaderBoard />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/register"
        element={
          <ProtectedRoute>
            <Layout>
              <Register />
            </Layout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;