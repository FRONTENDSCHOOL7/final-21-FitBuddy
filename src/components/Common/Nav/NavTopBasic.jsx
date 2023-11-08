import React from 'react';
import { NavTop, NavTopTitle } from './NavStyles';

export default function NavTopBasic({ title }) {
  return (
    <NavTop>
      <NavTopTitle type='basic'>{title}</NavTopTitle>
    </NavTop>
  );
}
