import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  width: 360px;
  border: none;
  border-bottom: 1px solid gray;
  background: none;
  color: gray;

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
