import React from 'react';
import { StyledButton } from './style/StyledButtonsns';

export default function Button_sns({ snsIcon }) {
  return (
    <StyledButton>
      <img src={snsIcon} alt='snsIcon' />
    </StyledButton>
  );
}
