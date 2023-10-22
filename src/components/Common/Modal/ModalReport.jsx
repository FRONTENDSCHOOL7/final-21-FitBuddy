import React from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  position: relative;
  background-color: var(--color-neutral);
  border-radius: 10px 10px 0px 0px;
  padding: 20px;
  width: 200px;
  &::before {
    content: '';
    position: absolute;
    left: calc(50%);
    transform: translate(-50%);
    top: 10px;
    width: 50px;
    height: 5px;
    border-radius: 50px;
    background-color: var(--color-secondary);
  }
`;

const DeleteBtn = styled.button`
  background-color: inherit;
  color: var(--color-secondary);
  padding: 20px 0px;
  border: none;
  cursor: pointer;
  font-size: var(--font-size-md);
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default function ModalComment() {
  return (
    <StyledModal>
      <DeleteBtn>신고하기</DeleteBtn>
    </StyledModal>
  );
}
