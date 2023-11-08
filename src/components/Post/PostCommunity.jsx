import React, { useState } from 'react';
import styled from 'styled-components';
import person from '../../assets/icons/icon-person.svg';
import editIcon from '../../assets/icons/icon_edit.svg';
import ModalEditAndDel from '../Common/Modal/ModalPost';
import userTokenAtom from '../../Recoil/userTokenAtom';
import { useRecoilState } from 'recoil';
import PlaceHolder from '../Common/Placeholder/PlaceHolder';
import { StyledOverlay, StyledPost, StyledPostEdit } from '../../components/Post/StyledPost';

export default function PostCommunity(props) {
  const [modal, setModal] = useState(false);
  const [userToken, setUserToken] = useRecoilState(userTokenAtom);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <StyledPost>
        <PlaceHolder type='Person' src={props.authorImage} />
        <div>
          <p className='username'>{props.username}</p>
          <p className='accountname'>@{props.accountname}</p>
        </div>
        {userToken && userToken._id === props.authorId && (
          <StyledPostEdit onClick={toggleModal}>
            <img src={editIcon} alt='editIcon' />
          </StyledPostEdit>
        )}
        <StyledOverlay visible={modal} onClick={toggleModal} />
      </StyledPost>
      {modal && <ModalEditAndDel visible={modal} postId={props.postId} isPostorJoin='Post' />}
    </>
  );
}
