import React, { useEffect, useState } from 'react';
import ButtonL from '../../components/Common/Buttons/ButtonL';
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
import { useSetRecoilState } from 'recoil';
import userTokenAtom from '../../Recoil/userTokenAtom';

export default function LoginPage({ marginBottom }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [loginValid, setLoginValid] = useState('');

  const [notAllow, setNotAllow] = useState(true);

  const navigate = useNavigate();

  const emailInputStyle = emailValid
    ? {}
    : { borderColor: 'red', borderWidth: '1px', borderStyle: 'solid' };
  // 토큰 로컬 저장
  const setUserTokenAtom = useSetRecoilState(userTokenAtom); //리코일 구독
  const saveToken = (token) => {
    //토큰값
    setUserTokenAtom(token);
  };
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

      if (response.status === 200) {
        setLoginValid(response.data.message);
        const receivedToken = response.data.user.token;
        localStorage.setItem('token', receivedToken);
        saveToken(response.data.user);
        navigate('/Home');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (emailValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid]);

  const moveSignup = () => {
    navigate('/signup');
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!notAllow) {
      handleLoginSubmit();
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <LoginWrapper>
        <img src={logo} className='logoImg' />
        <ContentsContainer marginBottom={132}>
          <LoginInputBox
            type='text'
            // id='user-email'
            placeholder='이메일'
            marginBottom={10}
            // value={email}
            onChange={handleEmailChange}
            style={email.length > 0 ? emailInputStyle : {}}
          />
          <div className='errorMessageWrap'>
            {!emailValid && email.length > 0 && <div>올바른 이메일을 입력해주세요.</div>}
          </div>
          <LoginInputBox
            type='password'
            placeholder='비밀번호'
            marginTop={10}
            value={password}
            onChange={handlePasswordChange}
          />
          <div className='loginValid'>{loginValid}</div>
        </ContentsContainer>
        <ButtonL name='로그인' marginBottom={30} onClick={handleLoginSubmit} />
        {/* disabled={notAllow}는 나중에 넣기*/}
        <Button_text
          marginBottom={20}
          content='이메일로 회원가입'
          type='submit'
          onClick={moveSignup}
        />
        <SnsButtonContainer>
          <Button_sns snsIcon={kakao} />
          <Button_sns snsIcon={google} />
          <Button_sns snsIcon={facebook} />
        </SnsButtonContainer>
      </LoginWrapper>
    </form>
  );
}
