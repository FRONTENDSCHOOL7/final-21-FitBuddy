import React from 'react';
import { StyledInput } from './style/StyledInputLarge';

export default function InputLarge({ onChange, name, value }) {
  return <StyledInput placeholder='작성해주세요' onChange={onChange} name={name} value={value} />;
}
