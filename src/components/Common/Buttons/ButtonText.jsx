import React from 'react';
import { StyledButton } from './style/StyledButtonText';

export default function ButtonText({ marginBottom, content, onClick }) {
  return (
    <StyledButton marginBottom={marginBottom} onClick={onClick}>
      {content}
    </StyledButton>
  );
}
