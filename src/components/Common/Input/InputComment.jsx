import React from 'react';
import styled from 'styled-components';
import userTokenAtom from '../../../Recoil/userTokenAtom';
import { useRecoilState } from 'recoil';
import { StyledButton, StyledDiv, StyledInput } from './style/StyledInputComment';
export default function InputComment(props) {
  const [userToken, setUserToken] = useRecoilState(userTokenAtom);
  return (
    <StyledDiv>
      <img
        src={userToken.image}
        style={{ width: '25px', height: '25px', borderRadius: '10px', marginTop: '5px' }}
      />
      <StyledInput
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder='댓글 입력하기...'
      />
      <StyledButton onClick={props.onClick}>등록</StyledButton>
    </StyledDiv>
  );
}
