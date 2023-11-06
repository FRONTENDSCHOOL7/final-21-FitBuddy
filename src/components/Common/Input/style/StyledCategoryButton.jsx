import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  margin-left: auto;
  border: none;
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
