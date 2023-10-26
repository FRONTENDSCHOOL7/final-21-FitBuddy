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
`;

export const CommunityWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  margin-top: 100px;
  /* position: relative; */
`;

export const CategoryTitle = styled.p`
  margin-right: 300px;
  color: var(--color-gray);
  font-size: var(--font-size-sm);
`;

export const CommunityPlaceHolder = styled.img`
  width: 414px;
  height: 228px;
  background-color: #f2f2f2;
  border-radius: 10px;
  border: 0.5px solid #dbdbdb;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${BasicImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50px;
  position: relative;
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
  right: 40%;
  bottom: 69%;
`;
