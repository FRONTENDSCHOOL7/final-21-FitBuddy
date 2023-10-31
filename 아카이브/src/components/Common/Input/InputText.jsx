import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../../styles/GlobalStyle';

const StyledInput = styled.input`
  width: 360px;
  border: none;
  border-bottom: 1px solid gray;
  background: none;
  color: #fff;

  &:focus {
    outline: none;
    border-bottom: 1px solid var(--color-primary);
  }
`;

export default function InputText(props) {
  return (
    <StyledInput
      type='text'
      placeholder={props.placeholder}
      onChange={props.onChange}
      name={props.name}
    />
  );
}
