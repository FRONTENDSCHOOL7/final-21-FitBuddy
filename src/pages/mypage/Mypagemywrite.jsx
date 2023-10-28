import React from 'react';
import styled from 'styled-components';
import Placeholderavatar from '../../assets/placeholder/Placeholder-avatar.svg';
import PlaceholderImg from '../../assets/placeholder/Placeholder-img.svg';
import Iconnext from '../../assets/icons/icon-next.svg';
import PostProfile from '../../components/Post/PostProfile';

const MypageWrapper = styled.div`
  padding: 20px;
`;

const MypageHeader = styled.h1`
  font-size: var(--font-size-title);
  text-align: left;
  margin-bottom: 50px;
  font-family: 'Pretendard-Medium'; /* 글로벌 스타일 한 번에 */
`;

export default function Mypagemywrite() {
  return (
    <MypageWrapper>
      <MypageHeader>내가 쓴 글</MypageHeader>
      <PostProfile />
      <PostProfile />
    </MypageWrapper>
  );
}
