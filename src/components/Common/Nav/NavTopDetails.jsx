import React from 'react';
import { BackIcon, NavTop, FlexContainer, CustomNavTopTitle } from './NavStyles';
import { useNavigate } from 'react-router-dom';

export default function NavTopDetails({ title }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <NavTop>
      <FlexContainer>
        <BackIcon onClick={handleBackClick} />
        <CustomNavTopTitle>{title}</CustomNavTopTitle>
        <div className='empty' /> {/* 비어있는 div를 추가하여 간격을 조정합니다 */}
      </FlexContainer>
    </NavTop>
  );
}
