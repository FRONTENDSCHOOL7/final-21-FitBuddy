import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 360px;
  border: none;
  border-bottom: 1px solid gray;

  &:focus {
    outline: none;
  }
`;

export default function InputText(props) {
  return <StyledInput type='text' />;
}
