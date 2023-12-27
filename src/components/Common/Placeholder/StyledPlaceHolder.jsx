import styled from 'styled-components';
import icon from '../../../assets/placeholder/Placeholder-icon.svg';

export const StyledPlaceHolder = styled.img.attrs((props) => ({
  src: props.src || icon,
}))`
  width: ${(props) =>
    props.type === 'Ractangle'
      ? '360px'
      : props.type === 'Ractangle2'
      ? '316px'
      : props.type === 'Photo'
      ? '414px'
      : props.type === 'Comment'
      ? '54px'
      : props.type === 'Person'
      ? '42px'
      : props.type === 'JoinMember'
      ? '60px'
      : props.type === 'Carousel'
      ? '140px'
      : props.type === 'ProfileImage'
      ? '110px'
      : '100px'};
  height: ${(props) =>
    props.type === 'Ractangle'
      ? '204px'
      : props.type === 'Ractangle2'
      ? '204px'
      : props.type === 'Photo'
      ? '228px'
      : props.type === 'Comment'
      ? '54px'
      : props.type === 'Person'
      ? '42px'
      : props.type === 'JoinMember'
      ? '60px'
      : props.type === 'Carousel'
      ? '90px'
      : props.type === 'ProfileImage'
      ? '110px'
      : '100px'};
  border-radius: ${(props) =>
    props.type === 'Person'
      ? '20px'
      : props.type === 'Comment'
      ? '50px'
      : props.type === 'JoinMember'
      ? '20px'
      : props.type === 'Photo'
      ? '8px'
      : props.type === 'ProfileImage'
      ? '50px'
      : '8px'};
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => (props.src ? 'none' : `url(${icon})`)};
  background-repeat: no-repeat;
  background-position: center center;
`;
