import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 360px;
  border: none;

  border-bottom: 1px solid gray;

  &::placeholder {
    color: gray;
  }
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.fail &&
    `
    border-color: red;
`}
`;

export default function InputText(props) {
  return <StyledInput type='text' fail={props.fail} placeholder={props.placeholder} />;
}
