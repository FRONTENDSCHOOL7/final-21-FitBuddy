import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid gray;
  background: none;
  color: #fff;
  padding-bottom: 5px;

  &:focus {
    outline: none;
    border-bottom: 1px solid var(--color-primary);
  }
`;
