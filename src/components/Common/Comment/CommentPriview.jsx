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
    width: 200px;
    color: white;
  }
`;

export default function CommentPriview({ commentAuthorImage, name, content }) {
  return (
    <CommentWrapper>
      <img
        src={commentAuthorImage ? commentAuthorImage : avatar}
        style={{ width: '20px', height: '20px', borderRadius: '20px' }}
        alt='comment'
      />
      <StyledP className='name'>{name}</StyledP>
      <StyledP className='contents'>{content}</StyledP>
    </CommentWrapper>
  );
}
