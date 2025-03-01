import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import CommunityFeed from '../components/CommunityFeed'
import TrainingCalendar from '../components/TrainingCalendar'
import MyActivities from '../components/MyActivities'
import LearnYoga from '../components/LearnYoga'
import Dashboard from '../pages/Dashboard'
import LeaderBoard from '../pages/LeaderBoard'
import About from '../pages/About'
import Register from '../pages/Register'

const AppRoutes = () => {
    return (
        <>

            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <main className="container mx-auto px-4 py-6 max-w-6xl">
                    <Routes>
                        <Route path="/" element={<CommunityFeed />} />
                        <Route path="/community-feed" element={<CommunityFeed />} />
                        <Route path="/training-calendar" element={<TrainingCalendar />} />
                        <Route path="/my-activities" element={<MyActivities />} />
                        <Route path="/learn-yoga" element={<LearnYoga />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/leaderboard" element={<LeaderBoard />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </main>
            </div>
        </>
    )
}

export default AppRoutes