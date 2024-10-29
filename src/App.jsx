import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';
import { RotatingLines } from 'react-loader-spinner';

// Lazy loading components
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const DiaryPage = lazy(() => import('pages/DiaryPage/DiaryPage'));
const CalculatorPage = lazy(() => import('pages/CalculatorPage/CalculatorPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage/RegistrationPage'));

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router basename="/slim-mom-project"> {/* Add basename */}
      <div style={{ height: '100vh', overflowY: 'scroll', overflowX: 'hidden' }}>
        <Suspense fallback={<div>Loading...</div>}>
  <Routes>
    <Route
      path="/"
      element={<SharedLayout isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
    >
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
    </Route>
  </Routes>
</Suspense>

      </div>
    </Router>
  );
};
