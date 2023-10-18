import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ path, element, code }) => {
  const userInfo = localStorage.getItem('userInfo');

  return userInfo ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to={`/${code}/login`} replace />
  );
};

export default PrivateRoute;