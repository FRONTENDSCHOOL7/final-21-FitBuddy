import React from 'react';
import { StyledButton } from './style/StyledInputButton';

export default function InputButton({ placeholder, onChange, name, onClick }) {
  return (
    <StyledButton
      type='button'
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      onClick={onClick}
    />
  );
}
