import React from 'react';
import NavTopDetails from '../../components/Common/Nav/NavTopDetails';
import NavBottom from '../../components/Common/Nav/NavBottom';
import InputComment from '../../components/Common/Input/InputComment';
import CommentList from '../../components/Common/Comment/CommentList';

export default function Community_Comment() {
  return (
    <>
      <NavTopDetails title='댓글' />
      <CommentList />
      <CommentList />
      <CommentList />
      <InputComment />
      <NavBottom />
    </>
  );
}
