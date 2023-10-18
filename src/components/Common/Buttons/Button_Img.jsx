import React from 'react';
import styled from 'styled-components';
import picture from '../../../assets/icons/icon-picture.svg';

const StyledButton = styled.button`
  width: 42px;
  height: 42px;
  margin: 0;
  border: none;
  border-radius: 50%;
  background-color: #c4c4c4;
`;

export default function Button_Img() {
  return (
    <StyledButton>
      <img src={picture} alt='sns_picture' />
    </StyledButton>
  );
}
