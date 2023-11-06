import React from 'react';
import { StyledInput } from './style/StyledInputText';

export default function InputText(props) {
  return (
    <StyledInput
      type='text'
      placeholder={props.placeholder}
      onChange={props.onChange}
      name={props.name}
      value={props.value}
      onClick={props.onClick}
      autocomplete={props.autocomplete}
    />
  );
}
