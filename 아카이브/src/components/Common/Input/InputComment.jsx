import React from 'react';
import styled from 'styled-components';
import ButtonImg from '../Buttons/Button_Img';

export default function InputComment(props) {
  return (
    <StyledDiv>
      <ButtonImg />
      <StyledInput
        type={props.type}
        value={props.inputValue}
        onChange={props.onChange}
        placeholder='댓글 입력하기...'
      />
      <StyledButton onClick={props.onClick}>등록</StyledButton>
    </StyledDiv>
  );
}

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
  width: 400px;
  background-color: #141414;
  padding: 10px;
  border: 1px solid #ccc;
  justify-content: center;
  bottom: 69px;
  position: fixed;
`;
const StyledButton = styled.button`
  background-color: #141414;
  border: none;
  color: #fff;
`;
