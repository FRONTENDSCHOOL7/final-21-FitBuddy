import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: transparent;
  color: var(--color-gray);
  padding: 0;
  border: none;
  cursor: pointer;
  font-size: var(--font-size-sm);
  margin-bottom: ${(props) => `${props.marginBottom}px`};
`;
