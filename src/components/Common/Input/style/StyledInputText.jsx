import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 360px;
  border: none;
  border-bottom: 1px solid gray;
  background: none;
  color: #fff;

  &:focus {
    outline: none;
    border-bottom: 1px solid var(--color-primary);
  }
`;
