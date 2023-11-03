import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import AlertDelete from '../Alert/AlertDelete';
import { useState } from 'react';
import { PostDelete } from '../../../api/postApi';
import { useRecoilState } from 'recoil';
import { deleteProduct } from '../../../api/productApi';
import { useNavigate } from 'react-router-dom';
import { postsState } from '../../../Recoil/communityAtom';

const slideIn = keyframes`
  from{
    bottom: -500px;
  }
  to{
    bottom: 65px;
  }
`;
const slideOut = keyframes`
  from{
    bottom: 65px;
  }
  to{
    bottom: -500px;
  }
`;

const slideInAnimation = css`
  ${slideIn} 0.5s ease-in-out forwards
`;
const slideOutAnimation = css`
  ${slideOut} 0.5s ease-in-out forwards
`;

const StyledModal = styled.div`
  /* position: relative; */
  background-color: var(--color-neutral);
  border-radius: 10px 10px 0px 0px;
  padding: 20px;
  width: 500px;
  position: fixed;
  z-index: 1;
  left: 50%;
  transform: translate(-50%);

  bottom: ${({ visible }) => (visible ? '65px' : '-500px')};
  animation: ${({ visible }) => (visible ? slideInAnimation : slideOutAnimation)};

  &::before {
    content: '';
    position: absolute;
    left: calc(50%);
    transform: translate(-50%);
    top: 10px;
    width: 50px;
    height: 5px;
    border-radius: 50px;
    background-color: var(--color-secondary);
  }
`;

const DeleteBtn = styled.button`
  background-color: inherit;
  color: var(--color-secondary);
  padding: 20px 0px;
  border: none;
  cursor: pointer;
  font-size: var(--font-size-md);
  display: flex;
  flex-direction: column;

  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    color: var(--color-primary);
  }
`;

export default function ModalEditAndDel(props) {
  const [alertVisible, setAlertVisible] = useState(false);
  const [posts, setPosts] = useRecoilState(postsState);

  const postId = props.postId;
  const navigate = useNavigate();
  const isPostorJoin = props.isPostorJoin;
  const token = localStorage.getItem('token');

  const showModal = () => {
    setAlertVisible(true);
  };

  const handleFeedDelete = async () => {
    try {
      if (isPostorJoin === 'Post') {
        const res = await PostDelete(postId, token);
        setPosts((prev) => prev.filter((post) => post._id !== postId));
        return res;
      }
      if (isPostorJoin === 'Join') {
        const res = await deleteProduct(postId);
        console.log(res);
        console.log('삭제성공');
        navigate('/home');
        return res;
      }
    } catch (error) {
      console.error('게시물 삭제 중 오류:', error);
    }
  };

  const handleEditPost = () => {
    if (isPostorJoin === 'Post') {
      navigate(`/edit/${postId}`);
    }
    if (isPostorJoin === 'Join') {
      navigate(`/editgroup/${postId}`);
    }
  };
  return (
    <StyledModal visible={props.visible}>
      <DeleteBtn onClick={handleEditPost}>피드 수정</DeleteBtn>
      <DeleteBtn onClick={showModal}>피드 삭제</DeleteBtn>
      {alertVisible && <AlertDelete handleFeedDelete={handleFeedDelete} />}
    </StyledModal>
  );
}
