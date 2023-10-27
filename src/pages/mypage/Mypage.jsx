import React from 'react';
import styled from 'styled-components';
import Placeholderavatar from '../../assets/placeholder/Placeholder-avatar.svg';
import PlaceholderImg from '../../assets/placeholder/Placeholder-img.svg';
import IconWrite from '../../assets/icons/icon-write.svg';
import Iconnext from '../../assets/icons/icon-next.svg';
import Card from '../../components/Card/Card.jsx';
import Chips from '../../components/Chips/ChipsHome.jsx';
import { useNavigate } from 'react-router-dom';
import { Router, Route, Switch } from 'react-router-dom';
import Mypagemywrite from './Mypagemywrite';
import Mypagemyjoin from './Mypagemyjoin';

const MypageWrapper = styled.div`
  padding: 20px;
`;

const MypageHeader = styled.h1`
  font-size: var(--font-size-title);
  text-align: left;
  font-family: 'Pretendard-Medium';
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  font-family: 'Pretendard-Medium';
`;

const ProfileImageWrapper = styled.div`
  position: relative;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const EditImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const ProfileName = styled.p`
  margin-top: 20px;
  font-size: 20px; //글로벌 스타일
`;

const Introduction = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Pretendard-Medium';
`;

const TitleWithEdit = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--font-size-m);
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
  font-family: 'Pretendard-Medium';
`;

const IntroductionInput = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  font-family: 'Pretendard-Medium';
`;

const Interests = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Posts = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default function Mypage() {
  return (
    <MypageWrapper>
      <MypageHeader>마이페이지</MypageHeader>

      <ProfileWrapper>
        <ProfileImageWrapper>
          <ProfileImage src={Placeholderavatar} alt='프로필 사진' />
          <EditImage src={PlaceholderImg} alt='프로필 변경 버튼' />
        </ProfileImageWrapper>
        <ProfileName>박규경</ProfileName>
      </ProfileWrapper>

      <Introduction>
        <TitleWithEdit>
          <p>소개글</p>
          <img src={IconWrite} alt='수정 아이콘' />
        </TitleWithEdit>
        <IntroductionInput placeholder='안녕하세요' />
      </Introduction>

      <Interests>
        <TitleWithEdit>
          <p>나의 관심사</p>
          <img src={IconWrite} alt='수정 아이콘' />
        </TitleWithEdit>
        <Chips />
      </Interests>

      <Posts>
        <TitleWithEdit>
          <p>작성한 모집글</p>
          <img src={Iconnext} alt='다음 버튼' />
          {/* <button onClick={Mypagemyjoin} /> */}
        </TitleWithEdit>
        <CardWrap>
          <Card />
          <Card />
        </CardWrap>
      </Posts>

      <TitleWithEdit>
        <p>내가 쓴 글</p>
        <img src={Iconnext} alt='다음 버튼' />
      </TitleWithEdit>
    </MypageWrapper>
  );
}

// function Mypagemyjoin = () => {
//   navigate("/Mypagejoin");
// }
