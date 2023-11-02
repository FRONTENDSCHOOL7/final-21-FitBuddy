import React, { useState } from 'react';
import styled from 'styled-components';
import imgMore from '../../../assets/icons/icon-more.svg';

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

// 모달 배경 컨테이너
const AlertBackground = styled.div`
  position: absolute;
  bottom: 250%;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 모달 내용을 감싸는 컨테이너
const AlertContent = styled.div`
  min-width: 320px;
  min-height: 148.57px;
  padding-top: 35px;
  background-color: #141414;
  box-sizing: border-box;
  border-radius: 10px;
  color: #fff;
  text-align: center;
`;

// 닫기 버튼
const CloseButton = styled.button`
  background-color: #141414;
  color: #fff;
  border: none;
  min-width: 160px;
  padding: 14px 63px;
  box-sizing: border-boxg;
  cursor: pointer;
  margin-top: 52px;
  transition: transform 0.3s ease-in-out;

  &.default {
    border-top: 0.5px solid #8f8f8f;
    border-right: 0.5px solid #8f8f8f;
    border-radius: 0 0 0 10px;
    &:hover {
      color: #141414;
      background-color: #fff;
    }
  }
  &.secondary {
    border-top: 0.5px solid #8f8f8f;
    border-left: 0.5px solid #8f8f8f;
    border-radius: 0 0 10px 0;
    color: #a6ff4d;
    &:hover {
      background-color: #fff;
    }
  }
`;

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
export default function AlertDelete(props) {
  const [AlertOpen, setAlertOpen] = useState(true);
  return (
    <div>
      {/* <button onClick={() => setAlertOpen(true)}>모달 열기</button> */}
      {/* <ImageWrapper onClick={() => setAlertOpen(true)}>
        <img src={imgMore} />
      </ImageWrapper> */}
      <Alert
        isOpen={AlertOpen}
        onClose={() => setAlertOpen(false)}
        handleFeedDelete={props.handleFeedDelete}
      >
        <h3>피드를 삭제하시겠습니까?</h3>
      </Alert>
    </div>
  );
}
