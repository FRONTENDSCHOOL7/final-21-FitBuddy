import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import NavTopBasic from '../../components/Common/Nav/NavTopBasic';
import NavBottom from '../../components/Common/Nav/NavBottom';
import {
  AccountName,
  Interests,
  Introduction,
  MypageHeader,
  MypageWrapper,
  NameInput,
  Posts,
  ProfileImage,
  ProfileImages,
  ProfileIntro,
  SaveButton,
  StyledInputFile,
  StyledTextarea,
  TitleWithEdit,
} from '../mypage/StyledMypage';
import ProfileCard from '../../components/UserProfile/ProfileCard';
import { ProfilePageWrapper } from './styledProfilepage';
import PostProfile from '../../components/Post/PostProfile';

export default function Profilepage() {
  return (
    <>
      <NavTopBasic title='마이페이지' />
      <ProfilePageWrapper>
        <ProfileCard />
        <p>나의 핏버디 모집</p>
        <Carousel />
        <p>나의 작성글</p>
        <PostProfile />
      </ProfilePageWrapper>
      <NavBottom />
    </>
  );
}
