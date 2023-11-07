import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const NonAuthRoute = ({ authenticated }) => {
  if (authenticated[0].token) {
    return <Navigate to='/login' replace />;
  }
  return <Outlet />;
};

export default NonAuthRoute;
