import React, { useState, useEffect } from 'react';
import {
  LoginInputBox,
  LoginWrapper,
  TextButton,
  ImgContainer,
  ContentsContainer,
  StyledButtonL,
  StyledTextButton,
  ErrorMessage,
} from './FormStyles';
import logo from '../../assets/icons/icon-logo.svg';
import { useNavigate } from 'react-router-dom';
import { postSignUp } from '../../api/signupAPI';

export default function JoinPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountname, setAccountname] = useState('');
  const [image, setImage] = useState('https://api.mandarin.weniv.co.kr/Ellipse.png');
  const [intro, setIntro] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  /* 정규표현식 */
  const isEmailValid = (email) => {
    const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    return emailRegex.test(email);
  };
  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/;
    return passwordRegex.test(password);
  };

  // const handleEmailChange = (e) => {
  //   const newEmail = e.target.value;
  //   setEmail(newEmail);

  //   if (!isEmailValid(newEmail)) {
  //     setEmailError('유효한 이메일 주소를 입력하세요.');
  //   } else {
  //     setEmailError('');
  //   }
  // };

  // const handlePasswordChange = (e) => {
  //   const newPassword = e.target.value;
  //   setPassword(newPassword); // 비밀번호를 먼저 설정

  //   if (!isPasswordValid(newPassword)) {
  //     setPasswordError('영문+숫자+특수기호 조합으로 6자리 이상 입력하세요.');
  //   } else {
  //     setPasswordError('');
  //   }
  // };

  const Signup = async () => {
    setEmailError('');
    setPasswordError('');

    if (!isEmailValid(email)) {
      setEmailError('이메일를 다시 입력하세요.');
      return;
    }
    if (!isPasswordValid(password)) {
      setPasswordError('영문+숫자+특수기호 포함 6자리 이상 입력하세요.');
      return;
    }
    try {
      const userData = {
        user: {
          username,
          email,
          password,
          accountname,
          image,
          intro,
        },
      };

      const response = await postSignUp(userData);
      console.log(response.data);
      alert('회원가입 성공');

      if (response.status === 200) {
        return navigate('/login');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <LoginWrapper>
      <ImgContainer>
        <img src={logo} />
      </ImgContainer>
      <ContentsContainer>
        <div className='signup_input'>
          <label>name</label>
          <br />
          <LoginInputBox
            type='text'
            placeholder='username'
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className='signup_input'>
          <label>Email</label>
          <br />
          <LoginInputBox
            type='text'
            placeholder='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
        </div>
        <div className='signup_input'>
          <label>accountname</label>
          <br />
          <LoginInputBox
            type='text'
            placeholder='accountname'
            onChange={(e) => {
              setAccountname(e.target.value);
            }}
          />
        </div>
        <div className='signup_input'>
          <label>password</label>
          <br />
          <LoginInputBox
            type='password'
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          {password.length > 0 && passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
        </div>
      </ContentsContainer>
      <StyledButtonL name='계정 생성' onClick={Signup} />
      <StyledTextButton
        type='button'
        onClick={() => {
          navigate('/login');
        }}
      >
        로그인
      </StyledTextButton>
    </LoginWrapper>
  );
}
