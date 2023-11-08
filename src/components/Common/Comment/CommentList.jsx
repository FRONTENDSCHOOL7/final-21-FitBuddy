import React, { useState, useEffect } from 'react';
import { deleteComment } from '../../../api/commentApi';
import { useParams } from 'react-router-dom';
import userTokenAtom from '../../../Recoil/userTokenAtom';
import { useRecoilState } from 'recoil';
import {
  CommentWrapper,
  DeleteBtn,
  InfoWrapper,
  StyledP,
  StyledCommentEdit,
} from './StyledCommentList';
import PlaceHolder from '../Placeholder/PlaceHolder';
import editIcon from '../../../assets/icons/icon_edit.svg';
import ModalEditAndDel from '../Modal/ModalPost';

export default function CommentList(props) {
  const { postId } = useParams();
  const [userToken, setUserToken] = useRecoilState(userTokenAtom);
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <CommentWrapper>
      <PlaceHolder type='Comment' src={props.authorImage} />
      <InfoWrapper>
        <StyledP className='name'>{props.accoutname}</StyledP>
        <StyledP className='text'>{props.content}</StyledP>
      </InfoWrapper>
      <StyledP className='time'>
        {props.createdAt}
        {userToken && userToken._id === props.authorId && (
          <StyledCommentEdit onClick={toggleModal}>
            <img src={editIcon} alt='editIcon' className='comment' />
          </StyledCommentEdit>
        )}
      </StyledP>
      {modal && (
        <ModalEditAndDel
          visible={modal}
          postId={props.postId}
          commentId={props.commentId}
          isPostorJoin='Comment'
          removeComment={props.removeComment}
        />
      )}
    </CommentWrapper>
  );
}
