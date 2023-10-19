import React from 'react';
import styled from 'styled-components';
import backIcon from '../../../assets/icons/icon-back.svg';

const NavTopD = styled.div`
  background-color: #141414;
  height: 70px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const BackIcon = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${backIcon});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  left: 30px;
`;

const NavTopDetailTitle = styled.h2`
  color: #ffffff;
  font-family: 'Pretendard-Semibold', sans-serif;
`;

export default function NavTopDetails() {
  return (
    <NavTopD>
      <BackIcon />
      <NavTopDetailTitle>핏버디 그룹 만들기</NavTopDetailTitle>
    </NavTopD>
  );
}
