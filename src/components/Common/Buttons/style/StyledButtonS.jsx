import styled from 'styled-components';

export const StyledButton = styled.button`
  min-width: 56px;
  height: 28px;
  border: none;
  border-radius: 26px;
  background-color: #a6ff4d;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  // disabled
  &:disabled {
    background-color: #d2ffa6;
  }
`;
