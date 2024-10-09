import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import AuthPage from './components/AuthPage.jsx'; // The login page component
import MainApp from './components/MainApp.jsx'; // The main content component

function App() {
  const { isAuthenticated, isLoading } = useAuth0(); // Check if the user is authenticated

  if (isLoading) {
    return <div>Loading...</div>; // Show loading state while checking authentication
  }

  return (
    <Router>
        <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/app" /> : <AuthPage />} />
        <Route path="/app" element={isAuthenticated ? <MainApp /> : <Navigate to="/" />} />
        </Routes>
      </Router>
  );
}

export default App;
