import React from 'react';
import styled from 'styled-components';
import avatar from '../../../assets/placeholder/Placeholder-avatar.svg';

const CommentWrapper = styled.div`
  width: 348px;
  display: flex;
  align-items: center;
  color: white;
`;

const StyledP = styled.p`
  min-width: 35px;
  font-size: var(--font-size-xs);
  &.name {
    font-weight: var(--font-weight-bold);
  }
  margin: 0px 7px;
  &.contents {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 280px;
    color: white;
  }
`;

export default function CommentPriview(props) {
  return (
    <CommentWrapper>
      <img src={avatar} style={{ width: '20px', height: '20px' }} />
      <StyledP className='name'>{props.name}</StyledP>
      <StyledP className='contents'>{props.content}</StyledP>
    </CommentWrapper>
  );
}
