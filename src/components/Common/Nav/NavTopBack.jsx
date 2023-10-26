import React from 'react';
import { BackIcon, NavTop } from './NavStyles';
import { useNavigate } from 'react-router-dom';

export default function NavTopBack() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <NavTop direction='column'>
      <div>
        <BackIcon onClick={handleBackClick} />
      </div>
    </NavTop>
  );
}
