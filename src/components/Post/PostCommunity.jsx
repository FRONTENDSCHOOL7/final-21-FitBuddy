import React, { useState } from 'react';
import styled from 'styled-components';
import person from '../../assets/icons/icon-person.svg';
import editIcon from '../../assets/icons/icon_edit.svg';
import ModalComment from '../Common/Modal/ModalPost';

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
  display: ${({ visible }) => (visible ? 'block' : 'none')};
`;

const StyledPost = styled.div`
  display: flex;
  width: 372px;
  padding: 0px 10px;
  gap: 12px;
  color: var(--color-secondary);

  p {
    color: gray;
  }
`;

const StyledPostEdit = styled.button`
  display: flex;
  cursor: pointer;
  margin-left: auto;
  background-color: transparent;
  border: none;
`;

export default function PostCommunity(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <StyledPost>
        <img src={person} alt='profileImg' />
        <div>
          <p style={{ color: 'var(--color-secondary)', paddingTop: '3px' }}>{props.name}</p>
        </div>

        <StyledPostEdit onClick={toggleModal}>
          <img src={editIcon} alt='editIcon' />
        </StyledPostEdit>
        <StyledOverlay visible={modal} onClick={toggleModal} />
      </StyledPost>
      {modal && <ModalComment visible={modal} postId={props.postId} />}
    </>
  );
}
