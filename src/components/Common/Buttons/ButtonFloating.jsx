import React from 'react';
import styled from 'styled-components';
import plus from '../../../assets/icons/icon-plus.svg';

const StyledButton = styled.button`
  width: 56px;
  height: 56px;
  margin: 0;
  border: none;
  border-radius: 50%;
  background-color: #a6ff4d;
`;

export default function ButtonFloating() {
  return (
    <StyledButton>
      <img src={plus} alt='plus' />
    </StyledButton>
  );
}
