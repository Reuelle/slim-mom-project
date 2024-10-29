import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

// Components
const SharedLayout = React.lazy(() => import('components/SharedLayout'));
const PrivateRoute = React.lazy(() => import('components/PrivateRoute/PrivateRoute'));
const RestrictedRoute = React.lazy(() => import('components/RestrictedRoute/RestrictedRoute'));

// Pages
const HomePage = React.lazy(() => import('pages/HomePage/HomePage'));
const LoginPage = React.lazy(() => import('pages/LoginPage/LoginPage'));
const DiaryPage = React.lazy(() => import('pages/DiaryPage/DiaryPage'));
const CalculatorPage = React.lazy(() => import('pages/CalculatorPage/CalculatorPage'));
const RegistrationPage = React.lazy(() => import('pages/RegistrationPage/RegistrationPage'));

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen">
    <RotatingLines
      visible={true}
      height="48"
      width="48"
      color="#4F46E5"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="loading"
    />
  </div>
);

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    // Check if user is logged in from localStorage or other auth state
    Boolean(localStorage.getItem('isLoggedIn'))
  );

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  // Get the basename from environment variable or default to '/slim-mom-project'
  const basename = process.env.REACT_APP_BASENAME || '/slim-mom-project';

  return (
    <Router basename={basename}>
      <div className="min-h-screen overflow-y-auto overflow-x-hidden">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route 
              path="/" 
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <SharedLayout isLoggedIn={isLoggedIn} onLogout={handleLogout} />
                </Suspense>
              }
            >
              <Route 
                index 
                element={
                  <RestrictedRoute redirectTo="/calculator">
                    <HomePage />
                  </RestrictedRoute>
                } 
              />
              
              <Route 
                path="register" 
                element={
                  <RestrictedRoute redirectTo="/calculator">
                    <RegistrationPage />
                  </RestrictedRoute>
                } 
              />
              
              <Route 
                path="login" 
                element={
                  <RestrictedRoute redirectTo="/calculator">
                    <LoginPage onLogin={handleLogin} />
                  </RestrictedRoute>
                } 
              />
              
              <Route 
                path="diary" 
                element={
                  <PrivateRoute redirectTo="/login">
                    <DiaryPage />
                  </PrivateRoute>
                } 
              />
              
              <Route 
                path="calculator" 
                element={
                  <PrivateRoute redirectTo="/login">
                    <CalculatorPage />
                  </PrivateRoute>
                } 
              />

              {/* Catch all route for 404 */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};
