import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRoute = ({ authenticated }) => {
  if (!authenticated[0].token) {
    //로그아웃 하거나 토큰 인증이 안되면 초기화면 으로 돌아감
    return <Navigate to='/' replace />;
  }

  return <Outlet />;
};

export default AuthRoute;
