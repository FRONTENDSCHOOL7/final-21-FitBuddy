import React from 'react';
import AlertDelete from '../Alert/AlertDelete';
import { useState } from 'react';
import { PostDelete } from '../../../api/postApi';
import { useSetRecoilState } from 'recoil';
import { deleteProduct } from '../../../api/productApi';
import { useNavigate } from 'react-router-dom';
import { postsState } from '../../../Recoil/communityAtom';
import { DeleteBtn, StyledModal } from './style/StyledModalPost';
import { deleteComment } from '../../../api/commentApi';

export default function ModalEditAndDel({
  postId,
  isPostorJoin,
  commentId,
  removeComment,
  visible,
}) {
  const [alertVisible, setAlertVisible] = useState(false);
  const setPosts = useSetRecoilState(postsState);

  const navigate = useNavigate();

  const showModal = () => {
    setAlertVisible(true);
  };

  const handleFeedDelete = async () => {
    try {
      if (isPostorJoin === 'Post') {
        alert('삭제되었습니다.');
        const res = await PostDelete(postId);
        setPosts((prev) => prev.filter((post) => post._id !== postId));
        return res;
      }
      if (isPostorJoin === 'Join') {
        const res = await deleteProduct(postId);
        navigate('/home');
        return res;
      }
      if (isPostorJoin === 'Comment') {
        const res = await deleteComment(postId, commentId);
        removeComment(commentId);
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
    <StyledModal visible={visible}>
      {isPostorJoin !== 'Comment' && <DeleteBtn onClick={handleEditPost}>피드 수정</DeleteBtn>}
      {isPostorJoin === 'Comment' ? (
        <DeleteBtn onClick={showModal}>댓글 삭제</DeleteBtn>
      ) : (
        <DeleteBtn onClick={showModal}>피드 삭제</DeleteBtn>
      )}
      {alertVisible && <AlertDelete handleFeedDelete={handleFeedDelete} isComment={true} />}
    </StyledModal>
  );
}
