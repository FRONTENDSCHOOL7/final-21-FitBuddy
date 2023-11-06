import styled from 'styled-components';

export const StyledButton = styled.button`
  min-width: 90px;
  height: 32px;
  border: none;
  border-radius: 32px;
  background-color: #a6ff4d;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;

  // disabled
  &:disabled {
    background-color: #d2ffa6;
  }
`;
