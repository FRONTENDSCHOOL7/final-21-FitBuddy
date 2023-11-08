import React, { useState } from 'react';
import editIcon from '../../assets/icons/icon_edit.svg';
import ModalEditAndDel from '../Common/Modal/ModalPost';
import userTokenAtom from '../../Recoil/userTokenAtom';
import { useRecoilState } from 'recoil';
import PlaceHolder from '../Common/Placeholder/PlaceHolder';
import { StyledOverlay, StyledPost, StyledPostEdit } from '../../components/Post/StyledPost';

export default function PostCommunity({ authorImage, username, accountname, authorId, postId }) {
  const [modal, setModal] = useState(false);
  const [userToken] = useRecoilState(userTokenAtom);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <StyledPost>
        <PlaceHolder type='Person' src={authorImage} />
        <div>
          <p className='username'>{username}</p>
          <p className='accountname'>@{accountname}</p>
        </div>
        {userToken && userToken._id === authorId && (
          <StyledPostEdit onClick={toggleModal}>
            <img src={editIcon} alt='editIcon' />
          </StyledPostEdit>
        )}
        <StyledOverlay visible={modal} onClick={toggleModal} />
      </StyledPost>
      {modal && <ModalEditAndDel visible={modal} postId={postId} isPostorJoin='Post' />}
    </>
  );
}
