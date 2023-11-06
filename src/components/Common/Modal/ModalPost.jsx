import React from 'react';
import AlertDelete from '../Alert/AlertDelete';
import { useState } from 'react';
import { PostDelete } from '../../../api/postApi';
import { useRecoilState } from 'recoil';
import { deleteProduct } from '../../../api/productApi';
import { useNavigate } from 'react-router-dom';
import { postsState } from '../../../Recoil/communityAtom';
import { DeleteBtn, StyledModal } from './style/StyledModalPost';

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
