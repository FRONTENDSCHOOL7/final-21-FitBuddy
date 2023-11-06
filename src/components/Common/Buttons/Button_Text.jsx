import React from 'react';
import { StyledButton } from './style/StyledButtonText';

export default function Button_Text({ marginBottom, content, onClick }) {
  return (
    <StyledButton marginBottom={marginBottom} onClick={onClick}>
      {content}
    </StyledButton>
  );
}
