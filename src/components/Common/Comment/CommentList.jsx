import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import avatar from '../../../assets/placeholder/Placeholder-avatar.svg';

const CommentWrapper = styled.div`
  width: 358px;
  display: flex;
  align-items: center;
  padding: 5px 5px 5px 0;
  gap: 20px;
`;
const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 200px;
  text-align: left;
`;

const StyledP = styled.p`
  &.name {
    margin-bottom: 8px;
    font-size: var(--font-size-xl);
  }
  &.email {
    font-size: var(--font-size-sm);
  }
  &.time {
    font-size: var(--font-size-sm);
    margin-bottom: 20px;
  }
`;

export default function CommentList() {
  const [currentTime, setCurrentTime] = useState(new Date()); // 초기값으로 현재 시간 설정

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date()); // 1초마다 현재 시간 업데이트
    }, 1000);

    return () => {
      clearInterval(intervalId); // 컴포넌트가 언마운트되면 인터벌 클리어
    };
  }, []);

  const formatAMPM = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours %= 12;
    hours = hours || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  };
  //나중에는 댓글을 작성한 시간으로 snapshot DB에 올려야 함

  return (
    <CommentWrapper>
      <img src={avatar} />
      <InfoWrapper>
        <StyledP className='name'>홍길동</StyledP>
        <StyledP className='email'>maciej.kowalski@email.com</StyledP>
      </InfoWrapper>
      <StyledP className='time'>{formatAMPM(currentTime)}</StyledP>
    </CommentWrapper>
  );
}
