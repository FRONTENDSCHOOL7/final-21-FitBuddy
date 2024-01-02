import React from 'react';
import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0% {
    transform: translateX(0);
  }
  50%, 100% {
    transform: translateX(460px);
  }
`;

const SkeletonContainer = styled.div`
  background-color: #242424;
  width: 414px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const SkeletonItem = styled.li`
  display: flex;
  align-items: center;
  margin: 15px 0;
  padding: 20px;
  border-radius: 4px;
  position: relative;
`;

const SkeletonImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #f2f2f2;
  position: relative;
`;

const SkeletonInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
`;

const SkeletonP = styled.p`
  width: 50%;
  height: 20px;
  background: #f2f2f2;
  position: relative;
  overflow: hidden;
  margin-top: ${({ marginTop }) => marginTop || '0px'};
  border-radius: 5px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 2s infinite linear;
  }
`;

const SkeletonPlaceholder = styled.div`
  width: 360px;
  height: 205px;
  background: #f2f2f2;
  position: relative;
  overflow: hidden;
  border-radius: 10px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 360px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 2s infinite linear;
  }
`;

const Skeleton = () => {
  return (
    <SkeletonContainer>
      <SkeletonItem>
        <SkeletonImg />
        <SkeletonInfo>
          <SkeletonP />
          <SkeletonP width='85%' marginTop='3px' />
        </SkeletonInfo>
      </SkeletonItem>
      <SkeletonPlaceholder />
      <SkeletonP marginTop='10px' />
    </SkeletonContainer>
  );
};

export default Skeleton;
