import React from 'react';
import { StyledPlaceHolder } from './StyledPlaceHolder';

function PlaceHolder(props) {
  return <StyledPlaceHolder type={props.type} src={props.src} />;
}

export default PlaceHolder;
