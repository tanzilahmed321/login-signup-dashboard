// ProtectedRoute.js
import React, { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { auth } from '../config/firebase'; // Import Firebase auth

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false); // Loading finishes after we check if user is logged in or not
    });
    
    // Cleanup subscription
    return () => unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>;

  // If user is logged in, render the component; otherwise, redirect to login
  return user ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
