import React, { useState } from 'react';
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
import { emailValid } from '../../api/emailValidAPi';

export default function JoinPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountname, setAccountname] = useState('');
  const [image, setImage] = useState('https://api.mandarin.weniv.co.kr/Ellipse.png');
  const [intro, setIntro] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
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
    setPasswordError('');

    if (!isPasswordValid(password)) {
      setPasswordError('영문+숫자+특수기호 포함 6자리 이상 입력하세요.');
      return;
    }

    async function checkDuplicateEmail() {
      try {
        const response = await emailValid({
          user: {
            email: email,
          },
        });
        if (response.status === 200) {
          const message = response.data.message;
          setEmailErrorMessage(message);

          if (message === '이미 가입된 이메일 주소 입니다.') {
            setEmailError(true);
          } else {
            setEmailError(false);
          }
          console.log(response.data.message);
        }
      } catch (error) {
        console.error('이메일 중복 확인 중 오류 발생:', error);
        return false;
      }

      return true;
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
      // 이메일 중복 확인
      const isEmailUnique = await checkDuplicateEmail(userData);

      if (!isEmailUnique) {
        return;
      }

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
          <label htmlFor='userNameInput' style={{ display: 'none' }}>
            name
          </label>
          <br />
          <LoginInputBox
            type='text'
            placeholder='회원 이름'
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
            placeholder='닉네임'
            id='accountnameInput'
            onChange={(e) => {
              setAccountname(e.target.value);
            }}
          />
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
