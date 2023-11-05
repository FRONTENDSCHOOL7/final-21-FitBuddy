import React from 'react';
import styled from 'styled-components';
import icon from '../../../assets/placeholder/Placeholder-icon.svg';

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
      : props.type === 'Person'
      ? '42px'
      : props.type === 'JoinMember'
      ? '60px'
      : '100px'};
  height: ${(props) =>
    props.type === 'Ractangle'
      ? '204px'
      : props.type === 'Ractangle2'
      ? '204px'
      : props.type === 'Photo'
      ? '228px'
      : props.type === 'Person'
      ? '42px'
      : props.type === 'JoinMember'
      ? '60px'
      : '100px'};
  border-radius: ${(props) =>
    props.type === 'Person'
      ? '20px'
      : props.type === 'JoinMember'
      ? '20px'
      : props.type === 'Photo'
      ? '0px'
      : '10px'};
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => (props.src ? 'none' : `url(${icon})`)};
  background-repeat: no-repeat;
  background-position: center center;
`;

function PlaceHolder(props) {
  return <StyledPlaceHolder type={props.type} src={props.src} />;
}

export default PlaceHolder;
