import React from 'react';
import styled from 'styled-components';
const StyledButton = styled.button`
  display: flex;
  justify-content: space-between;
  background: none;
  width: 360px;
  border: none;
  border-bottom: 1px solid gray;
  cursor: pointer;

  &::after {
    content: '>';
  }
`;

export default function InputButton() {
  return <StyledButton>운동 종목을 선택해주세요</StyledButton>;
}
