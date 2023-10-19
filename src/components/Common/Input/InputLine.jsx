import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 340px;
  height: 43px;
  border-radius: 30px;
  border: 1px solid #a6ff4d;

  padding-left: 31px;

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.fail &&
    `
    border-color: red;
`}
`;

export default function InputLine(props) {
  return <StyledInput placeholder={props.placeholder} fail={props.fail} />;
}
