import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 10px 318px 10px 15px;
  border-radius: 8px;
  border: 2px solid var(#8f8f8f);
  background: #141414;
  color: #fff;
  padding-left: 15px;

  &:focus {
    outline: none;
  }
`;

export default function InputShort() {
  return <StyledInput placeholder='박지수' />;
}
