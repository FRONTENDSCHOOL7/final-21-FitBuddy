import React, { useState } from 'react';
import {
  LoginInputBox,
  LoginWrapper,
  ImgContainer,
  ContentsContainer,
  StyledButtonL,
  ErrorMessage,
} from './FormStyles';
import logo from '../../assets/icons/icon-logo.svg';
import { useNavigate } from 'react-router-dom';
import { postSignUp } from '../../api/signupAPI';
import { emailValid } from '../../api/emailValidAPi';

export default function JoinPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountname, setAccountname] = useState('');
  const [image] = useState('https://api.mandarin.weniv.co.kr/Ellipse.png');
  const [intro] = useState('인트로');
  const [emailError, setEmailError] = useState(false);
  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [idErrorMessage, setIdErrorMessage] = useState('');
  const [errorData, setErrorData] = useState('');

  /* 정규표현식 */
  const isEmailValid = (email) => {
    const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/; // eslint-disable-line
    return emailRegex.test(email);
  };
  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/;
    return passwordRegex.test(password);
  };
  const emailInputStyle = emailError
    ? { borderColor: 'red', borderWidth: '1px', borderStyle: 'solid' }
    : {};
  const idInputStyle = idError
    ? { borderColor: 'red', borderWidth: '1px', borderStyle: 'solid' }
    : {};

  const Signup = async () => {
    setPasswordError('');

    if (!isPasswordValid(password)) {
      setPasswordError('영문+숫자+특수기호를 포함하여 6자리 이상 입력하세요.');
      return;
    }

    if (!isEmailValid(email)) {
      setEmailErrorMessage('잘못된 이메일 형식입니다.');
      setEmailError(true);
      return;
    }

    try {
      const isEmailUnique = await emailValid();

      if (!isEmailUnique) {
        return;
      }

      const userData = {
        user: {
          username,
          email,
          password,
          accountname,
          intro,
          image,
        },
      };

      const response = await postSignUp(userData);

      if (response.status === 200) {
        alert('회원가입 성공');
        navigate('/login');
      } else {
        // 응답 상태가 200이 아닌 경우를 처리
      }
    } catch (err) {
      const errData = err.response.data.message;
      setEmailError(false);
      if (errData === '이미 가입된 이메일 주소 입니다.') {
        setEmailError(true);
        setEmailErrorMessage(errData);
      } else if (errData === '이미 사용중인 계정 ID입니다.') {
        setIdError(true);
        setIdErrorMessage(errData);
      } else {
        setErrorData(errorData);
      }
      console.error(err);
    }
  };

  return (
    <LoginWrapper>
      <ImgContainer>
        <img src={logo} alt='logo' />
      </ImgContainer>
      <ContentsContainer>
        <div className='signup_input'>
          <label htmlFor='userNameInput' style={{ display: 'none' }}>
            name
          </label>
          <br />
          <LoginInputBox
            type='text'
            placeholder='회원 닉네임'
            id='userNameInput'
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className='signup_input'>
          <label htmlFor='emailInput' style={{ display: 'none' }}>
            Email
          </label>
          <br />
          <LoginInputBox
            type='text'
            placeholder='이메일'
            id='userNameInput'
            onChange={(e) => setEmail(e.target.value)}
            style={emailInputStyle}
          />
          {emailError && <ErrorMessage>{emailErrorMessage}</ErrorMessage>}
        </div>
        <div className='signup_input'>
          <label htmlFor='accountnameInput' style={{ display: 'none' }}>
            accountname
          </label>
          <br />
          <LoginInputBox
            type='text'
            placeholder='아이디'
            id='accountnameInput'
            onChange={(e) => {
              setAccountname(e.target.value);
            }}
            style={idInputStyle}
          />
          {idError && <ErrorMessage>{idErrorMessage}</ErrorMessage>}
        </div>
        <div className='signup_input'>
          <label htmlFor='passwordInput' style={{ display: 'none' }}>
            password
          </label>
          <br />
          <LoginInputBox
            type='password'
            placeholder='비밀번호'
            id='passwordInput'
            onChange={(e) => setPassword(e.target.value)}
          />
          {password.length > 0 && passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
        </div>
        <div>{errorData}</div>
      </ContentsContainer>
      <StyledButtonL name='계정 생성' onClick={Signup} />
    </LoginWrapper>
  );
}
