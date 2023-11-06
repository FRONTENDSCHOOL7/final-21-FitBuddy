import React from 'react';
import { StyledChip } from './StyledChip';

export default function Chip(props) {
  return (
    <StyledChip type='radio' active={props.active} onClick={props.onClick}>
      {props.sport}
    </StyledChip>
  );
}
