import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
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
// export default function Button_Ms() {
//   return <StyledButton>저장</StyledButton>;
// }

export default function Button_Ms({
  name = '저장',
  marginBottom,
  onClick,
  disabled,
  marginTop,
  type,
  value,
}) {
  return (
    <StyledButton
      onClick={onClick}
      marginBottom={marginBottom}
      disabled={disabled}
      marginTop={marginTop}
      type={type}
      value={value}
    >
      {name}
    </StyledButton>
  );
}
