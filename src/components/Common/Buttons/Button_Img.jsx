import React from 'react';
import picture from '../../../assets/icons/icon-picture.svg';
import { StyledButton } from './style/StyledButtonImg';

export default function Button_Img() {
  return (
    <StyledButton>
      <img src={picture} alt='sns_picture' />
    </StyledButton>
  );
}
