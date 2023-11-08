import React from 'react';
import { StyledButton } from './style/StyledButtonL';

export default function ButtonL({
  name,
  marginBottom,
  onClick,
  disabled,
  marginTop,
  type,
  value,
  onKeyDown,
}) {
  return (
    <StyledButton
      onClick={onClick}
      marginBottom={marginBottom}
      disabled={disabled}
      marginTop={marginTop}
      type={type}
      value={value}
      onKeyDown={onKeyDown}
    >
      {name}
    </StyledButton>
  );
}
