import React from 'react';
import { StyledChip } from './StyledChip';

export default function Chip({ active, onClick, sport }) {
  return (
    <StyledChip type='radio' active={active} onClick={onClick}>
      {sport}
    </StyledChip>
  );
}
