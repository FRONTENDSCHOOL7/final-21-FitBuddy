import React from 'react';
import styled from 'styled-components';
import userTokenAtom from '../../../Recoil/userTokenAtom';
import { useRecoilState } from 'recoil';
import { StyledButton, StyledDiv, StyledInput } from './style/StyledInputComment';
import PlaceHolder from '../Placeholder/PlaceHolder';

const StyledInput = styled.input`
  background: none;
  border: none;
  color: #fff;
  margin-left: 15px;
  padding-right: 120px;
  width: 300px;

  &:focus {
    outline: none;
  }
`;
const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  background-color: #141414;
  padding: 10px;
  justify-content: center;
  bottom: 80px;
  position: fixed;
  min-height: 60px;
  border-radius: 10px;
`;
const StyledButton = styled.button`
  background-color: #141414;
  border: none;
  color: #fff;
  &:hover {
    color: var(--color-primary);
  }
`;

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
