import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: transparent;
  color: var(--color-gray);
  padding: 0;
  border: none;
  cursor: pointer;
  font-size: var(--font-size-sm);
  margin-bottom: ${(props) => `${props.marginBottom}px`};
`;

export default function Button_Text({ marginBottom, content }) {
  return <StyledButton marginBottom={marginBottom}>{content}</StyledButton>;
}
