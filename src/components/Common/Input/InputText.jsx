import React from 'react';
import { StyledInput } from './style/StyledInputText';

export default function InputText({ placeholder, onChange, name, value, onClick, autocomplete }) {
  return (
    <StyledInput
      type='text'
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
      onClick={onClick}
      autocomplete={autocomplete}
    />
  );
}
