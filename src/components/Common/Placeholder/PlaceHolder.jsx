import React from 'react';
import { StyledPlaceHolder } from './StyledPlaceHolder';

function PlaceHolder({ type, src }) {
  return <StyledPlaceHolder type={type} src={src} />;
}

export default PlaceHolder;
