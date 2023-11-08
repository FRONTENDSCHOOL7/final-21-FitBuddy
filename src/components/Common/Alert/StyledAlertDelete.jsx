import styled from 'styled-components';

// 모달 배경 컨테이너
export const AlertBackground = styled.div`
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
export const AlertContent = styled.div`
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
export const CloseButton = styled.button`
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
