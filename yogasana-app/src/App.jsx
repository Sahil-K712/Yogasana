import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect from root to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Add your dashboard route later */}
        <Route path="/dashboard" element={<h1>Dashboard Coming Soon</h1>} />
      </Routes>
    </Router>
  );
}

export default App;