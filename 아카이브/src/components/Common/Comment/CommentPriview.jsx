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
  margin-left: 5px;
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
      <StyledP>{props.accountname}</StyledP>
      <StyledP className='contents'>{props.comment}</StyledP>
    </CommentWrapper>
  );
}
