import React from 'react';
import styled from 'styled-components';
import InputLine from '../../components/Common/Input/InputLine';
import Button_L from '../../components/Common/Buttons/Button_L';
import logo from '../../assets/icons/icon-logo.svg';
import Button_sns from '../../components/Common/Buttons/Button_sns';
import Button_text from '../../components/Common/Buttons/Button_Text';
import kakao from '../../assets/icons/icon-kakao.svg';
import google from '../../assets/icons/icon-google.svg';
import facebook from '../../assets/icons/icon-facebook.svg';
import { LoginWrapper, ContentsContainer, SnsButtonContainer } from './FormStyle';

const url = 'https://api.mandarin.weniv.co.kr';

export default function LoginPage({ marginBottom }) {
  return (
    <LoginWrapper>
      <img src={logo} className='logoImg' />
      <ContentsContainer marginBottom={132}>
        <InputLine placeholder='이메일' marginBottom={20} />
        <InputLine placeholder='비밀번호' marginBottom={0} />
      </ContentsContainer>
      <Button_L name='로그인' marginBottom={30} />
      <Button_text marginBottom={20} content='이메일로 회원가입' />
      <SnsButtonContainer>
        <Button_sns snsIcon={kakao} />
        <Button_sns snsIcon={google} />
        <Button_sns snsIcon={facebook} />
      </SnsButtonContainer>
    </LoginWrapper>
  );
}
