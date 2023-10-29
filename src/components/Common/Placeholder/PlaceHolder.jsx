import React from 'react';
import styled from 'styled-components';
import icon from '../../../assets/placeholder/Placeholder-icon.svg';
import BasicImg from '../../../assets/placeholder/Placeholder-icon.svg';

const StyledPlaceHolder = styled.img.attrs((props) => ({
  src: props.src || icon,
}))`
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
  background-image: ${(props) => (props.src ? 'none' : `url(${icon})`)};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50px;
`;

function PlaceHolder(props) {
  return <StyledPlaceHolder type={props.type} src={props.src} />;
}

export default PlaceHolder;
