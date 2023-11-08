import React from 'react';
import { StyledButton } from './style/StyledInputButton';

export default function InputButton(props) {
  return (
    <StyledButton
      type='button'
      placeholder={props.placeholder}
      onChange={props.onChange}
      name={props.name}
      onClick={props.onClick}
    />
  );
}
