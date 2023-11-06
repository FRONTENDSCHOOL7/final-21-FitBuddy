import React, { useState, useEffect } from 'react';
import avatar from '../../../assets/placeholder/Placeholder-avatar.svg';
import { deleteComment } from '../../../api/commentApi';
import { useParams } from 'react-router-dom';
import userTokenAtom from '../../../Recoil/userTokenAtom';
import { useRecoilState } from 'recoil';
import { CommentWrapper, DeleteBtn, InfoWrapper, StyledP } from './StyledCommentList';

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
      <img src={avatar} />
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
