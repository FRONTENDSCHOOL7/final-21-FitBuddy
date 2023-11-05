import React from 'react';
import styled from 'styled-components';
import { BackIcon, NavTop } from './NavStyles';
import { useNavigate } from 'react-router-dom';

const CustomNavTopTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-xl);
  flex: 1;
  text-align: center;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .empty {
    width: 16px;
  }
`;

export default function NavTopDetails(props) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <NavTop>
      <FlexContainer>
        <BackIcon onClick={handleBackClick} />
        <CustomNavTopTitle>{props.title}</CustomNavTopTitle>
        <div className='empty' /> {/* 비어있는 div를 추가하여 간격을 조정합니다 */}
      </FlexContainer>
    </NavTop>
  );
}
