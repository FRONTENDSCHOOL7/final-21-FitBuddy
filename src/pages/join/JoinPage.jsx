import React from 'react';
import styled from 'styled-components';
import Button_L from '../../components/Common/Buttons/Button_L';
import InputLine from '../../components/Common/Input/InputLine';
import logo from '../../assets/icons/icon-logo.svg';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const url = 'https://api.mandarin.weniv.co.kr';

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50vh auto 0;
  transform: translateY(-50%);
  img.logoImg {
    margin-top: 138px;
    margin-bottom: 100px;
  }
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

const StyledButtonL = styled(Button_L)`
  margin-bottom: 40px;
`;

const StyledTextButton = styled(TextButton)`
  margin-top: 50px;
  margin-bottom: 35px;
`;

export default function JoinPage() {
  const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  const [email, setEmail] = useState('');
  const [valid, setValidEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(true);

  const navigate = useNavigate();

  const checkValidPw = () => {
    if (password.length < 6) {
      setValidPassword(false);
    } else {
      setValidPassword(true);
    }
  };

  return (
    <LoginWrapper>
      <ImgContainer>
        <img src={logo} />
      </ImgContainer>
      <ContentsContainer>
        <InputLine placeholder='Email' />
        <InputLine placeholder='비밀번호' />
        <InputLine placeholder='비밀번호 확인' />
        <InputLine placeholder='닉네임' />
      </ContentsContainer>
      <StyledButtonL name='계정 생성' />
      <StyledTextButton>로그인</StyledTextButton>
    </LoginWrapper>
  );
}
