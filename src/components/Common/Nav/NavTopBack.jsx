import React from 'react';
import styled from 'styled-components';
import backIcon from '../../../assets/icons/icon-back.svg';

const NavTopB = styled.div`
  background-color: #141414;
  height: 70px;

  display: flex;
  flex-direction: column;
  justify-content: center;
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

export default function NavTopBack() {
  return (
    <NavTopB>
      <BackIcon />
    </NavTopB>
  );
}
