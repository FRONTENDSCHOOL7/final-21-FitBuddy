import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  width: 360px;
  border: none;
  border-bottom: 1px solid gray;
  background: none;
  color: #fff;

  &:focus {
    outline: none;
    border-bottom: 1px solid var(--color-primary);
  }
  &::after {
    content: '>';
    margin-left: auto;
    color: gray;
    font-size: 20px;
  }
`;

export default function InputButton(props) {
  return (
    <StyledButton
      type='button'
      placeholder={props.placeholder}
      onChange={props.onChange}
      name={props.name}
    />
  );
}
