import React from 'react';
import { StyledButton } from './style/StyledButtonsns';

export default function ButtonSns({ snsIcon }) {
  return (
    <StyledButton>
      <img src={snsIcon} alt='snsIcon' />
    </StyledButton>
  );
}
