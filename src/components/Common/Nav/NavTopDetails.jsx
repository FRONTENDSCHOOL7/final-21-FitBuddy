import React from 'react';
import { BackIcon, NavTop, NavTopTitle } from './NavStyles';

export default function NavTopDetails() {
  return (
    <NavTop direction='row' alignItems='center'>
      <BackIcon />
      <NavTopTitle>핏버디 그룹 만들기</NavTopTitle>
    </NavTop>
  );
}
