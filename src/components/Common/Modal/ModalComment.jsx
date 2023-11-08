import React from 'react';
import { DeleteBtn, StyledModal } from './style/StyledModalComment';

export default function ModalComment() {
  return (
    <StyledModal>
      <DeleteBtn>댓글 삭제</DeleteBtn>
    </StyledModal>
  );
}
