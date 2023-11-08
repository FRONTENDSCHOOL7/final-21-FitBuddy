import React, { useState } from 'react';
import userTokenAtom from '../../../Recoil/userTokenAtom';
import { useRecoilState } from 'recoil';
import { CommentWrapper, InfoWrapper, StyledP, StyledCommentEdit } from './StyledCommentList';
import PlaceHolder from '../Placeholder/PlaceHolder';
import editIcon from '../../../assets/icons/icon_edit.svg';
import ModalEditAndDel from '../Modal/ModalPost';

export default function CommentList({
  authorImage,
  accoutname,
  content,
  createdAt,
  authorId,
  postId,
  commentId,
  removeComment,
}) {
  const [userToken] = useRecoilState(userTokenAtom);
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <CommentWrapper>
      <PlaceHolder type='Comment' src={authorImage} />
      <InfoWrapper>
        <StyledP className='name'>{accoutname}</StyledP>
        <StyledP className='text'>{content}</StyledP>
      </InfoWrapper>
      <StyledP className='time'>
        {createdAt}
        {userToken && userToken._id === authorId && (
          <StyledCommentEdit onClick={toggleModal}>
            <img src={editIcon} alt='editIcon' className='comment' />
          </StyledCommentEdit>
        )}
      </StyledP>
      {modal && (
        <ModalEditAndDel
          visible={modal}
          postId={postId}
          commentId={commentId}
          isPostorJoin='Comment'
          removeComment={removeComment}
        />
      )}
    </CommentWrapper>
  );
}
