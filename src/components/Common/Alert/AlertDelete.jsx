import React, { useState } from 'react';
import { AlertBackground, AlertContent, CloseButton } from './StyledAlertDelete';

// 모달 컴포넌트
const Alert = ({ isOpen, onClose, handleFeedDelete, children }) => {
  if (!isOpen) return null;

  const closeHandler = () => {
    onClose();
  };

  const deleteAndCloseHandler = () => {
    handleFeedDelete();
    onClose();
  };

  return (
    <AlertBackground>
      <AlertContent>
        {children}
        <CloseButton onClick={closeHandler} className='default'>
          닫기
        </CloseButton>
        <CloseButton onClick={deleteAndCloseHandler} className='secondary'>
          삭제
        </CloseButton>
      </AlertContent>
    </AlertBackground>
  );
};
export default function AlertDelete({ handleFeedDelete, isComment }) {
  const [AlertOpen, setAlertOpen] = useState(true);
  return (
    <div>
      <Alert
        isOpen={AlertOpen}
        onClose={() => setAlertOpen(false)}
        handleFeedDelete={handleFeedDelete}
      >
        <h3>{isComment ? '댓글을 삭제하시겠습니까?' : '피드를 삭제하시겠습니까?'}</h3>
      </Alert>
    </div>
  );
}
