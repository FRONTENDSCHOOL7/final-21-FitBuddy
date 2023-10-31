import React from 'react';
import { BackIcon, NavTop, NavTopTitle } from './NavStyles';
import { useNavigate } from 'react-router-dom';

export default function NavTopDetails(props) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <NavTop>
      <BackIcon onClick={handleBackClick} />
      <NavTopTitle fontSize='title'>{props.title}</NavTopTitle>
    </NavTop>
  );
}
