import React, { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 18px 20px 71px 16px;
  width: 400px;
  align-items: center;
  border-radius: 8px;
  border: 2px solid #8f8f8f;
  background: #141414;
  color: var(--color-secondary);
  resize: none;

  &:focus {
    outline: none;
  }
`;

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
