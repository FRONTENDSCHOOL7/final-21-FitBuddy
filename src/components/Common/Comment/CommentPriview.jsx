import React from 'react';
import styled from 'styled-components';
import avatar from '../../../assets/placeholder/Placeholder-avatar.svg';

const CommentWrapper = styled.div`
  width: 348px;
  display: flex;
  align-items: center;
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
  }
`;

export default function CommentPriview() {
  return (
    <CommentWrapper>
      <img src={avatar} style={{ width: '20px', height: '20px' }} />
      <StyledP>홍길동</StyledP>
      <StyledP className='contents'>
        가나다라마바사아자차카타파하가나다라마바사아자차카타파하
      </StyledP>
    </CommentWrapper>
  );
}
