import React from 'react';
import styled from 'styled-components';
import icon from '../../../assets/placeholder/Placeholder-icon.svg';

const StyledPlaceHolder = styled.div`
  width: ${(props) =>
    props.type === 'Ractangle'
      ? '360px'
      : props.type === 'Ractangle2'
      ? '316px'
      : props.type === 'Photo'
      ? '414px'
      : '100px'};
  height: ${(props) =>
    props.type === 'Ractangle'
      ? '204px'
      : props.type === 'Ractangle2'
      ? '204px'
      : props.type === 'Photo'
      ? '228px'
      : '100px'};
  background-color: #f2f2f2;
  border-radius: 10px;
  border: 0.5px solid #dbdbdb;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function PlaceHolder(props) {
  return (
    <StyledPlaceHolder type={props.type}>
      <img src={icon} alt='placeholder_icon' />
    </StyledPlaceHolder>
  );
}

export default PlaceHolder;
