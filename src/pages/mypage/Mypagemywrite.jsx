import React from 'react';
import styled from 'styled-components';
import Placeholderavatar from '../../assets/placeholder/Placeholder-avatar.svg';
import PlaceholderImg from '../../assets/placeholder/Placeholder-img.svg';
import PostProfile from '../../components/Post/PostProfile';

const MypageWrapper = styled.div`
  padding: 20px;
`;

const MypageHeader = styled.h1`
  font-size: 24px; //var(--font-size-title);
  text-align: left;
  margin-bottom: 20px;
`;

export default function Mypagemywrite() {
  return (
    <MypageWrapper>
      <MypageHeader>내가 쓴 글</MypageHeader>
      <PostProfile />
    </MypageWrapper>
  );
}
