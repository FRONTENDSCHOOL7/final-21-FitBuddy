import React from 'react';
import styled from 'styled-components';
import error from '../assets/icons/icon-error-window.svg';

const StyledErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  color: #fff;
  padding: 0px 24px 0px 24px;
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 600;

  img {
    width: 93px;
    height: 93px;
    margin-bottom: 41px;
  }
`;

export default function ErrorPage() {
  return (
    <StyledErrorPage>
      <img src={error} alt='' />
      <p>찾을 수 없는 페이지입니다.</p>
      <p>요청하신 페이지가 사라졌거나, 잘못된 경로를 입력하셨어요 :)</p>
    </StyledErrorPage>
  );
}
