import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card/Card.jsx';

const MypageWrapper = styled.div`
  padding: 20px;
`;

const MypageHeader = styled.h1`
  font-size: 24px; //var(--font-size-title);
  text-align: left;
  margin-bottom: 20px;
`;

const Myjoinpost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const myjointitle = styled.p`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export default function Mypagemyjoin() {
  return (
    <MypageWrapper>
      <MypageHeader>작성한 모집글</MypageHeader>
      <myjointitle>
        <p>2023. 10. 12</p>
      </myjointitle>
      <Myjoinpost>
        <Card />
      </Myjoinpost>
      <myjointitle>
        <p>2023. 10. 10</p>
      </myjointitle>
      <Myjoinpost>
        <Card />
      </Myjoinpost>
      <myjointitle>
        <p>2023. 10. 5</p>
      </myjointitle>
      <Myjoinpost>
        <Card />
        <Card />
      </Myjoinpost>
    </MypageWrapper>
  );
}
