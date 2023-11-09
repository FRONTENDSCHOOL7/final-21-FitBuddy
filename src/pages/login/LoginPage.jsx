import React, { useEffect, useState } from 'react';
import ButtonL from '../../components/Common/Buttons/ButtonL';
import logo from '../../assets/icons/icon-logo.svg';
import ButtonSns from '../../components/Common/Buttons/ButtonSns';
import ButtonText from '../../components/Common/Buttons/ButtonText';
import kakao from '../../assets/icons/icon-kakao.svg';
import google from '../../assets/icons/icon-google.svg';
import facebook from '../../assets/icons/icon-facebook.svg';
import { LoginWrapper, ContentsContainer, SnsButtonContainer } from './Form.style';
import { PostLogin } from '../../api/loginApi';
import { useNavigate } from 'react-router-dom';
import { LoginInputBox } from './Form.style';
import { useRecoilState, useSetRecoilState } from 'recoil';
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
  const setUserTokenAtom = useSetRecoilState(userTokenAtom);
  const saveToken = (token) => {
    //토큰값
    setUserTokenAtom(token);
  };
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;

    setEmail(newEmail);

    const regex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/; // eslint-disable-line
    if (regex.test(newEmail)) {
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
  const [, setUserToken] = useRecoilState(userTokenAtom);

  // 컴포넌트가 마운트될 때 로그아웃 로직을 실행합니다.
  useEffect(() => {
    // Recoil 상태를 업데이트하여 사용자 토큰을 null로 설정합니다.
    setUserToken({});

    // 로컬 스토리지에서 'recoil-persist'와 'token' 항목을 제거합니다.
    localStorage.removeItem('recoil-persist');
    localStorage.removeItem('token');

    // 추가적으로 다른 정리 작업이 필요하면 여기에 추가할 수 있습니다.
  }, [setUserToken]);

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
        <img src={logo} className='logoImg' alt='logo' />
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
        <ButtonText
          marginBottom={20}
          content='이메일로 회원가입'
          type='submit'
          onClick={moveSignup}
        />
        <SnsButtonContainer>
          <ButtonSns snsIcon={kakao} />
          <ButtonSns snsIcon={google} />
          <ButtonSns snsIcon={facebook} />
        </SnsButtonContainer>
      </LoginWrapper>
    </form>
  );
}
