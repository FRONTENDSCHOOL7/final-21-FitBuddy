import styled from 'styled-components';

export const StyledButton = styled.button`
  min-width: 340px;
  padding: 8px 140px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  border: none;
  background-color: #a6ff4d;
  font-size: 16px;
  font-weight: 600;
  line-height: 27px;
  cursor: pointer;
  margin-bottom: ${(props) => `${props.marginBottom}px`};
  margin-top: ${(props) => `${props.marginTop}px`};

  // disabled
  &:disabled {
    background-color: #d2ffa6;
  }
  &:hover,
  &:active {
    opacity: 0.8;
  }
`;
