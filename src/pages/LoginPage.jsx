import React from 'react';
import styled from 'styled-components';
import InputLine from '../components/Common/Input/InputLine';
import Button_L from '../components/Common/Buttons/Button_L';
import logo from '../assets/icons/icon-logo.svg';
import Button_sns from '../components/Common/Buttons/Button_sns';
import kakao from '../assets/icons/icon-kakao.svg';
import google from '../assets/icons/icon-google.svg';
import facebook from '../assets/icons/icon-facebook.svg';

const OnboardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: scroll;
  padding-bottom: 70px;
`;

const TextButton = styled.button`
  background-color: transparent;
  color: #fff;
  padding: 0;
  border: none;
  cursor: pointer;
  font-size: var(--font-size-sm);
`;

const ImgContainer = styled.div`
  margin-top: 138px;
  margin-bottom: 100px;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  &.id {
    margin-bottom: 20px;
  }
  &.pw {
    margin-bottom: 132px;
  }
  &.loginbutton {
    margin-bottom: 30px;
  }
  &.txt-btn {
    margin-bottom: 65px;
  }
`;

const SnsButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 198px;
`;

export default function LoginPage() {
  return (
    <OnboardWrapper>
      <ImgContainer>
        <img src={logo} />
      </ImgContainer>
      <ContentsContainer className='id'>
        <InputLine content='아이디' />
      </ContentsContainer>
      <ContentsContainer className='pw'>
        <InputLine content='비밀번호' />
      </ContentsContainer>
      <ContentsContainer className='loginbutton'>
        <Button_L name='로그인' />
      </ContentsContainer>
      <ContentsContainer className='txt-btn'>
        <TextButton>이메일로 회원가입</TextButton>
      </ContentsContainer>
      <SnsButtonContainer>
        <Button_sns snsIcon={kakao} />
        <Button_sns snsIcon={google} />
        <Button_sns snsIcon={facebook} />
      </SnsButtonContainer>
    </OnboardWrapper>
  );
}
