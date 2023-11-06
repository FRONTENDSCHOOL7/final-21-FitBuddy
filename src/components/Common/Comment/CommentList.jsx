import React, { useState, useEffect } from 'react';
import avatar from '../../../assets/placeholder/Placeholder-avatar.svg';
import { deleteComment } from '../../../api/commentApi';
import { useParams } from 'react-router-dom';
import userTokenAtom from '../../../Recoil/userTokenAtom';
import { useRecoilState } from 'recoil';
import { CommentWrapper, DeleteBtn, InfoWrapper, StyledP } from './StyledCommentList';
import PlaceHolder from '../Placeholder/PlaceHolder';

const CommentWrapper = styled.div`
  width: 420px;
  display: flex;
  align-items: center;
  padding: 5px 20px;
  gap: 10px;
`;
const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  text-align: left;
`;

const StyledP = styled.p`
  &.name {
    margin-bottom: 8px;
    font-size: var(--font-size-md);
  }
  &.email {
    font-size: var(--font-size-sm);
  }
  &.text {
    font-size: var(--font-size-sm);
  }
  &.time {
    font-size: var(--font-size-sm);
    margin-bottom: 10px;
  }
`;
const DeleteBtn = styled.button`
  border: none;
  background-color: transparent;
  margin-top: 5px;
  color: var(--color-secondary);
`;

export default function CommentList(props) {
  const { postId } = useParams();
  const [userToken, setUserToken] = useRecoilState(userTokenAtom);

  const handleDeleteComment = async () => {
    try {
      const res = await deleteComment(postId, props.feedId);
      if (res) {
        alert('삭제하겠습니까?');
        props.removeComment(props.feedId);
      } else {
        console.log('댓글 삭제 실패');
      }
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CommentWrapper>
      <PlaceHolder type='Comment' />
      <InfoWrapper>
        <StyledP className='name'>{props.accoutname}</StyledP>
        <StyledP className='text'>{props.content}</StyledP>
      </InfoWrapper>
      <StyledP className='time'>
        {props.createdAt}
        {userToken && userToken._id === props.authorId && (
          <DeleteBtn onClick={handleDeleteComment}>X</DeleteBtn>
        )}
      </StyledP>
    </CommentWrapper>
  );
}
