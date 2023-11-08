import React from 'react';
import { StyledButton } from './style/StyledButtonMs';

export default function ButtonMs({
  name = '저장',
  marginBottom,
  onClick,
  disabled,
  marginTop,
  type,
  value,
}) {
  return (
    <StyledButton
      onClick={onClick}
      marginBottom={marginBottom}
      disabled={disabled}
      marginTop={marginTop}
      type={type}
      value={value}
    >
      {name}
    </StyledButton>
  );
}
