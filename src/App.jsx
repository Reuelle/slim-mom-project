import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';

// Lazy loading components
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));

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
        <Suspense
          fallback={<div>Loading...</div>}
        >
          <Routes>
            <Route path="/" element={<SharedLayout isLoggedIn={isLoggedIn} onLogout={handleLogout} />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};
