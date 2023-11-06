import React from 'react';
import styled from 'styled-components';
import { NavTop, FlexContainer, NavTopTitle } from './NavStyles';

export default function NavTopBasic(props) {
  return (
    <NavTop>
      <NavTopTitle type='basic'>{props.title}</NavTopTitle>
    </NavTop>
  );
}
