import styled from 'styled-components';

export const StyledButton = styled.button`
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
