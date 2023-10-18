import React from 'react';
import styled from 'styled-components';
import ButtonImg from '../Buttons/Button_Img';

const StyledInput = styled.input`
  background: none;
  border: none;
  color: #fff;
  margin-left: 15px;
  padding-right: 90px;

  &:focus {
    outline: none;
  }
`;
const StyledDiv = styled.div`
  display: flex;
  width: 360px;
  background-color: #141414;
  padding: 10px;
  border: 1px solid #ccc;
`;
const StyledButton = styled.button`
  background-color: #141414;
  border: none;
  color: #fff;
`;

export default function InputComment() {
  return (
    <StyledDiv>
      <ButtonImg />
      <StyledInput placeholder='댓글 입력하기...' />
      <StyledButton>등록</StyledButton>
    </StyledDiv>
  );
}
