import React from 'react';
import styled from 'styled-components';
import snsIcon from '../../../assets/icons/sns.svg';

const StyledButton = styled.button`
  width: 42px;
  height: 42px;
  margin: 0;
  border: none;
  border-radius: 50%;
  background-color: #fff;
`;

export default function Button_sns() {
  return (
    <StyledButton>
      <img src={snsIcon} alt='snsIcon' />
    </StyledButton>
  );
}
