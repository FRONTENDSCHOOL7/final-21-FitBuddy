import React from 'react';
import { NavTop, NavTopTitle } from './NavStyles';

export default function NavTopBasic() {
  return (
    <NavTop direction='column'>
      <NavTopTitle fontSize='title' float='left' paddingLeft='30px'>
        채팅
      </NavTopTitle>
    </NavTop>
  );
}
