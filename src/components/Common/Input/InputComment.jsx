import React from 'react';
import styled from 'styled-components';
import userTokenAtom from '../../../Recoil/userTokenAtom';
import { useRecoilState } from 'recoil';
import { StyledButton, StyledDiv, StyledInput } from './style/StyledInputComment';
import PlaceHolder from '../Placeholder/PlaceHolder';

export default function InputComment(props) {
  const [userToken, setUserToken] = useRecoilState(userTokenAtom);
  return (
    <StyledDiv>
      <PlaceHolder type='Person' src={userToken.image} />
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
