import React from 'react';
import styled from 'styled-components';
import plus from '../../assets/icons/icon-plus.svg';
import BasicImg from '../../assets/placeholder/Placeholder-icon.svg';
import UploadImg from '../../assets/placeholder/Placeholder-img.svg';

export const CommunityButton = styled.button`
  width: 56px;
  height: 56px;
  margin-top: 30px;
  border: none;
  border-radius: 50%;
  background-color: var(--color-primary);
  position: fixed;
  bottom: 100px;
  right: 35px;
  cursor: pointer;
  background-image: url(${plus});
  background-repeat: no-repeat;
  background-position: center center;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

export const CommunityWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  margin-top: 50px;
  /* position: relative; */
`;

export const CategoryTitle = styled.p`
  margin-right: 300px;
  color: var(--color-gray);
  font-size: var(--font-size-sm);
`;

export const IconBtn = styled.button`
  border-radius: 50%;
  border: none;
  width: 50px;
  height: 50px;
  background-color: var(--color-gray);
  background-image: url(${UploadImg});
  background-repeat: no-repeat;
  background-size: 100px;
  position: absolute;
  background-size: cover;
  bottom: 10px;
  right: 10px;
`;

export const InputWrapper = styled.div`
  width: 400px;
  background: #141414;
  border-radius: 8px;
  border: 2px solid #8f8f8f;
  position: relative; // 글자수를 오른쪽 아래에 배치하기 위해
`;

export const StyledActualInput = styled.textarea`
  padding: 18px 20px 71px 16px;
  width: 100%;
  background: transparent;
  border: none;
  color: var(--color-secondary);
  resize: none;
`;

export const CharacterCount = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: var(--color-gray);
`;
