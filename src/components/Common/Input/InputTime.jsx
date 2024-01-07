import React from 'react';
import { StyledInputTime } from './style/StyledInputTime';

export default function InputTime({ placeholder, onChange, name, value, onClick, autoComplete }) {
  return (
    <StyledInputTime
      type='time'
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
      autoComplete={autoComplete}
    />
  );
}
