import React from 'react';
import { NavTop, NavTopTitle } from './NavStyles';

export default function NavTopBasic({ title }) {
  return (
    <NavTop direction='column'>
      <NavTopTitle fontSize={title}>{title}</NavTopTitle>
    </NavTop>
  );
}
