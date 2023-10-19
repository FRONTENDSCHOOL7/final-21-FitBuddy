import React from 'react';
import styled from 'styled-components';

const NavTop = styled.div`
  background-color: #141414;
  height: 70px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NavTopTitle = styled.h1`
  float: left;
  color: #ffffff;
  font-family: 'Pretendard-bold', sans-serif;
  padding-left: 30px;
`;

export default function NavTopBasic() {
  return (
    <NavTop>
      <NavTopTitle>채팅</NavTopTitle>
    </NavTop>
  );
}
