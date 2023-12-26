import styled from 'styled-components';

export const StyledInput = styled.textarea`
  padding: 10px 20px 141px 16px;
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
