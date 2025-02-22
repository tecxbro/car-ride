import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SearchPage from './pages/SearchPage';
import LoginRegisterPage from './pages/LoginRegisterPage';
import BookingConfirmationPage from './pages/BookingConfirmationPage';
import MyRidesPage from './pages/MyRidesPage';
import ActivityPage from './pages/ActivityPage'; // Import ActivityPage
import { AuthContext } from './context/AuthContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [selectedRide, setSelectedRide] = useState(null);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<SearchPage setSelectedRide={setSelectedRide} />} />
          <Route path="/login" element={<LoginRegisterPage />} />
          <Route path="/activity" element={<ActivityPage />} /> {/* Add ActivityPage Route */}
          <Route
            path="/booking-confirmation"
            element={
              isLoggedIn ? (
                <BookingConfirmationPage selectedRide={selectedRide} />
              ) : (
                <Navigate to="/login" replace state={{ from: '/booking-confirmation' }} />
              )
            }
          />
          <Route
            path="/my-rides"
            element={isLoggedIn ? <MyRidesPage /> : <Navigate to="/login" replace state={{ from: '/my-rides' }} />}
          />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
