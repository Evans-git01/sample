// PrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

const PrivateRoute = () => {
  const auth = getAuth();
  const user = auth.currentUser;        // null when not signed-in
  return user ? <Outlet /> : <Navigate to="/signup" replace />;
};

export default PrivateRoute;