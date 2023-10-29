import React, { useState, useEffect } from 'react';
import titleIcon from '../assets/icons/icon-logo.svg';
import { LoginWrapper } from './join/FormStyles';
import { useNavigate } from 'react-router-dom';
import SplashRun from '../components/SplashRun';

export default function Splash() {
  const navigate = useNavigate();
  const [loding, setLoding] = useState(false);
  useEffect(() => {
    const Timeout = setTimeout(() => {
      setLoding(true);
    }, 2000);
    return () => clearTimeout(Timeout);
  }, []);
  if (loding) {
    navigate('/login');
  }
  return (
    <LoginWrapper>
      <SplashRun />
      <img src={titleIcon} alt='' style={{ width: '200px', height: '200px' }} />
    </LoginWrapper>
  );
}
