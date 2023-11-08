import React, { useState } from 'react';
import { StyledInput } from './style/StyledInputLarge';

export default function InputLarge(props) {
  return (
    <StyledInput
      placeholder='작성해주세요'
      onChange={props.onChange}
      name={props.name}
      value={props.value}
    />
  );
}
