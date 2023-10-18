import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 18px 293px 71px 16px;
  align-items: center;

  border-radius: 8px;
  border: 2px solid #8f8f8f;
  background: #141414;

  &:focus {
    outline: none;
  }
`;

export default function InputLarge() {
  return <StyledInput placeholder='안녕하세요' />;
}
