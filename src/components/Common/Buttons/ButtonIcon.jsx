import React from 'react';
import { StyledButton } from './style/StyledButtonIcon';

export default function ButtonIcon({ icon }) {
  return (
    <StyledButton>
      <img src={icon} alt='snsIcon' />
    </StyledButton>
  );
}
