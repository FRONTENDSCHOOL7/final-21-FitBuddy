import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const NonAuthRoute = ({ authenticated }) => {
  if (authenticated[0].token) {
    //여기서 토큰 인증을 받으면 로그인 페이지로 이동
    return <Navigate to='/login' replace />;
  }
  return <Outlet />;
};

export default NonAuthRoute;
