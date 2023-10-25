import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  min-width: 340px;
  padding: 8px 140px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  border: none;
  background-color: #a6ff4d;
  font-size: 16px;
  font-weight: 600;
  line-height: 27px;
  cursor: pointer;
  margin-bottom: ${(props) => `${props.marginBottom}px`};

  // disabled
  &:disabled {
    background-color: #d2ffa6;
  }
`;

export default function Button_L({ name, marginBottom, onClick, disabled }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <StyledButton onClick={handleClick} marginBottom={marginBottom} disabled={disabled}>
      {name}
    </StyledButton>
  );
}
