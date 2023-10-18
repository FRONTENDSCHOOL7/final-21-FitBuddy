import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  min-width: 120px;
  height: 34px;
  border: none;
  border-radius: 30px;
  background-color: #a6ff4d;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;

  // disabled
  &:disabled {
    background-color: #d2ffa6;
  }
`;

export default function Button_M() {
  return <StyledButton>팔로우</StyledButton>;
}
