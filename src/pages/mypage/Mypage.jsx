import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Placeholderavatar from '../../assets/placeholder/Placeholder-avatar.svg';
import PlaceholderImg from '../../assets/placeholder/Placeholder-img.svg';
import IconWrite from '../../assets/icons/icon-write.svg';
import Iconnext from '../../assets/icons/icon-next.svg';
import Card from '../../components/Card/Card.jsx';
import Chips from '../../components/Chips/ChipsHome.jsx';
import { getMyInfo } from '../../api/Mypagemainapi';
import { useNavigate } from 'react-router-dom';
import { Router, Route, Switch } from 'react-router-dom';
import Button_Ms from '../../components/Common/Buttons/Button_Ms';

const MypageWrapper = styled.div`
  padding: 20px;
`;

const MypageHeader = styled.h1`
  font-size: var(--font-size-title);
  text-align: left;
  font-family: 'Pretendard-Medium';
  display: flex;
  justify-content: space-between;

  & > button {
    margin-top: 3px;
    margin-left: 20px;
  }
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
  font-size: var(--font-size-xl);
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
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

const ProfileandiconWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export default function Mypage() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    getMyInfo()
      .then((data) => {
        console.log(data.user.username);
        setProfiles(data.user.username);
      })
      .catch((error) => {
        console.error('Error fetching profiles:', error);
      });
  }, []);

  const handleLogout = () => {
    // 로컬 스토리지의 모든 항목 삭제
    localStorage.clear();

    console.log('로그아웃 되었습니다.');
  };

  return (
    <MypageWrapper>
      <MypageHeader>
        마이페이지
        <Button_Ms name='로그아웃' onClick={handleLogout} />
      </MypageHeader>

      <ProfileWrapper>
        <ProfileImageWrapper>
          <ProfileImage src={Placeholderavatar} alt='프로필 사진' />
          <EditImage src={PlaceholderImg} alt='프로필 변경 버튼' />
        </ProfileImageWrapper>
        <ProfileandiconWrapper>
          <ProfileName>{profiles ? profiles : '사용자 없음'}</ProfileName>
          {/* <Button onClick={handleNameChange}><img src={IconWrite} alt='수정 아이콘' /></Button>
           */}
        </ProfileandiconWrapper>
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
