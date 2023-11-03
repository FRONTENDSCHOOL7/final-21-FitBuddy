import React from 'react';
import styled from 'styled-components';
import userTokenAtom from '../../../Recoil/userTokenAtom';
import { useRecoilState } from 'recoil';

const StyledInput = styled.input`
  background: none;
  border: none;
  color: #fff;
  margin-left: 15px;
  padding-right: 120px;

  &:focus {
    outline: none;
  }
`;
const StyledDiv = styled.div`
  display: flex;
  width: 400px;
  background-color: #141414;
  padding: 10px;
  border: 1px solid #ccc;
  justify-content: center;
  bottom: 69px;
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
