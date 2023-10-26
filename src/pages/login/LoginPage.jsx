import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InputLine from '../../components/Common/Input/InputLine';
import Button_L from '../../components/Common/Buttons/Button_L';
import logo from '../../assets/icons/icon-logo.svg';
import Button_sns from '../../components/Common/Buttons/Button_sns';
import Button_text from '../../components/Common/Buttons/Button_Text';
import kakao from '../../assets/icons/icon-kakao.svg';
import google from '../../assets/icons/icon-google.svg';
import facebook from '../../assets/icons/icon-facebook.svg';
import { LoginWrapper, ContentsContainer, SnsButtonContainer } from './Form.style';
import { PostLogin } from '../../api/loginApi';
import Home from '../mainhome/Home';
import { useNavigate } from 'react-router-dom';
import { LoginInputBox } from './Form.style';

export default function LoginPage({ marginBottom }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const [notAllow, setNotAllow] = useState(true);

  const navigate = useNavigate();

  // const Login = async () => {
  //   try {
  //     const userData = {
  //       email,
  //       password,
  //     };
  //     console.log(userData);
  //   } catch (error) {
  //     console.error('로그인 오류:', error);
  //   }
  // };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    const regex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  const handleLoginSubmit = async () => {
    try {
      const response = await PostLogin({
        user: {
          email,
          password,
        },
      });
      console.log(response.data);

      if (response.status === 200) {
        return navigate('/login');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (emailValid && passwordValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, passwordValid]);

  return (
    <LoginWrapper>
      <img src={logo} className='logoImg' />
      <ContentsContainer marginBottom={132}>
        <LoginInputBox
          type='text'
          // id='user-email'
          placeholder='이메일'
          marginBottom={20}
          // value={email}
          onChange={handleEmailChange}
        />
        <div className='errorMessageWrap'>
          {!emailValid && email.length > 0 && <div>올바른 이메일을 입력해주세요.</div>}
        </div>
        <LoginInputBox
          type='password'
          placeholder='비밀번호'
          marginBottom={0}
          value={password}
          onChange={handlePasswordChange}
        />
      </ContentsContainer>
      <Button_L name='로그인' marginBottom={30} onClick={handleLoginSubmit} />
      {/* disabled={notAllow}는 나중에 넣기*/}
      <Button_text marginBottom={20} content='이메일로 회원가입' />
      <SnsButtonContainer>
        <Button_sns snsIcon={kakao} />
        <Button_sns snsIcon={google} />
        <Button_sns snsIcon={facebook} />
      </SnsButtonContainer>
    </LoginWrapper>
  );
}
