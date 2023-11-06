import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 18px 20px 71px 16px;
  width: 400px;
  align-items: center;
  border-radius: 8px;
  border: 2px solid #8f8f8f;
  background: #141414;
  color: var(--color-secondary);
  resize: none;

  &:focus {
    outline: none;
  }
`;
