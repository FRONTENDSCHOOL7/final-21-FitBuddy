import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import avatar from '../../../assets/placeholder/Placeholder-avatar.svg';
import { deleteComment } from '../../../api/commentApi';
import { useParams } from 'react-router-dom';

const CommentWrapper = styled.div`
  width: 420px;
  display: flex;
  align-items: center;
  padding: 5px 5px 5px 0;
  gap: 20px;
`;
const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  text-align: left;
`;

const StyledP = styled.p`
  &.name {
    margin-bottom: 8px;
    font-size: var(--font-size-md);
  }
  &.email {
    font-size: var(--font-size-sm);
  }
  &.text {
    font-size: var(--font-size-sm);
  }
  &.time {
    font-size: var(--font-size-sm);
    margin-bottom: 10px;
  }
`;
const DeleteBtn = styled.button`
  border: none;
  background-color: transparent;
  margin-top: 5px;
`;

export default function CommentList(props) {
  // const [currentTime, setCurrentTime] = useState(new Date());

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentTime(new Date()); // 1초마다 현재 시간 업데이트
  //   }, 1000);

  //   return () => {
  //     clearInterval(intervalId); // 컴포넌트가 언마운트되면 인터벌 클리어
  //   };
  // }, []);

  // const formatAMPM = (date) => {
  //   let hours = date.getHours();
  //   let minutes = date.getMinutes();
  //   const ampm = hours >= 12 ? 'PM' : 'AM';
  //   hours %= 12;
  //   hours = hours || 12;
  //   minutes = minutes < 10 ? '0' + minutes : minutes;
  //   const strTime = hours + ':' + minutes + ' ' + ampm;
  //   return strTime;
  // };
  //나중에는 댓글을 작성한 시간으로 snapshot DB에 올려야 함

  const { postId } = useParams();

  const handleDeleteComment = async () => {
    try {
      const res = await deleteComment(postId, props.feedId);
      if (res) {
        alert('삭제하겠습니까?');
        props.removeComment(props.feedId);
      } else {
        console.log('댓글 삭제 실패');
      }
      return res;
    } catch (error) {
      console.error(error);
    }
  };
  console.log(props.feedId);

  return (
    <CommentWrapper>
      <img src={avatar} />
      <InfoWrapper>
        <StyledP className='name'>{props.accoutname}</StyledP>
        <StyledP className='text'>{props.content}</StyledP>
      </InfoWrapper>
      <StyledP className='time'>
        {props.createdAt}
        <DeleteBtn onClick={handleDeleteComment}>X</DeleteBtn>
      </StyledP>
    </CommentWrapper>
  );
}
