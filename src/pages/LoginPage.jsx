import React from 'react';
import styled from 'styled-components';
import InputLine from '../components/Common/Input/InputLine';
import ButtonL from '../components/Common/Buttons/ButtonL';
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
  gap: 20px;
  margin-bottom: 132px;
`;

const SnsButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 198px;
`;

const StyledButtonL = styled(ButtonL)`
  margin-bottom: 40px;
`;
const StyledTextButton = styled(TextButton)`
  margin-top: 50px;
  margin-bottom: 35px;
`;

export default function LoginPage() {
  return (
    <OnboardWrapper>
      <ImgContainer>
        <img src={logo} />
      </ImgContainer>
      <ContentsContainer className='id'>
        <InputLine placeholder='아이디' />
        <InputLine placeholder='비밀번호' />
      </ContentsContainer>
      <StyledButtonL name='로그인' />
      <StyledTextButton>이메일로 회원가입</StyledTextButton>
      <SnsButtonContainer>
        <Button_sns snsIcon={kakao} />
        <Button_sns snsIcon={google} />
        <Button_sns snsIcon={facebook} />
      </SnsButtonContainer>
    </OnboardWrapper>
  );
}
