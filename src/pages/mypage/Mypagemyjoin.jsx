import React from 'react';
import styled from 'styled-components';
import Iconnext from '../../assets/icons/icon-next.svg';
import Card from '../../components/Card/Card.jsx';

const MypageWrapper = styled.div`
  padding: 20px;
`;

const MypageHeader = styled.h1`
  font-size: var(--font-size-title);
  text-align: left;
  margin-bottom: 50px;
  font-family: 'Pretendard-Medium';
`;

const Myjointitle = styled.p`
  display: flex;
  align-items: left;
  font-family: 'Pretendard-Medium'; /* 글로벌 스타일 한 번에 */
  margin-top: 20px;
  margin-bottom: 20px;
`;

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Myjoinpost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Mypagemyjoin() {
  return (
    <MypageWrapper>
      <MypageHeader>작성한 모집글</MypageHeader>
      <Myjointitle>
        <p>2023. 10. 12</p>
      </Myjointitle>
      <Myjoinpost>
        <Card />
      </Myjoinpost>
      <Myjointitle>
        <p>2023. 10. 10</p>
      </Myjointitle>
      <Myjoinpost>
        <Card />
      </Myjoinpost>
      <Myjointitle>
        <p>2023. 10. 5</p>
      </Myjointitle>
      <Myjoinpost>
        <CardWrap>
          <Card />
          <Card />
        </CardWrap>
      </Myjoinpost>
    </MypageWrapper>
  );
}
