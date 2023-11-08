import React from 'react';
import userTokenAtom from '../../../Recoil/userTokenAtom';
import { useRecoilState } from 'recoil';
import { StyledButton, StyledDiv, StyledInput } from './style/StyledInputComment';
import PlaceHolder from '../Placeholder/PlaceHolder';

export default function InputComment({ type, value, onChange, onClick }) {
  const [userToken] = useRecoilState(userTokenAtom);
  return (
    <StyledDiv>
      <PlaceHolder type='Person' src={userToken.image} />
      <StyledInput type={type} value={value} onChange={onChange} placeholder='댓글 입력하기...' />
      <StyledButton onClick={onClick}>등록</StyledButton>
    </StyledDiv>
  );
}
