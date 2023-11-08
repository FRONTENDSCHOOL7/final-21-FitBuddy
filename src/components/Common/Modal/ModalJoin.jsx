import React from 'react';
import AlertDelete from '../Alert/AlertDelete';
import { useState } from 'react';
import { PostDelete } from '../../../api/postApi';
import { useRecoilState } from 'recoil';
import userTokenAtom from '../../../Recoil/userTokenAtom';
import { DeleteBtn, StyledModal } from './style/StyledModalJoin';

export default function ModalJoin(props) {
  const [alertVisible, setAlertVisible] = useState(false);
  const token = useRecoilState(userTokenAtom);
  const postId = props.postId;
  const handleFeedDelete = async () => {
    try {
      const res = await PostDelete(postId);
      return res;
    } catch (error) {
      console.error('게시물 삭제 중 오류:', error);
    }
  };
  return (
    <StyledModal visible={props.visible}>
      <DeleteBtn onClick={handleFeedDelete}>피드 삭제</DeleteBtn>
      <DeleteBtn>피드 수정</DeleteBtn>
      {alertVisible && <AlertDelete handleFeedDelete={handleFeedDelete} />}
    </StyledModal>
  );
}
