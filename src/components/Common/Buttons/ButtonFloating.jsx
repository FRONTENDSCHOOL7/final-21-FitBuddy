import React from 'react';
import plus from '../../../assets/icons/icon-plus.svg';
import { StyledButton } from './style/StyledButtonFloating';

export default function ButtonFloating() {
  return (
    <StyledButton>
      <img src={plus} alt='plus' />
    </StyledButton>
  );
}
