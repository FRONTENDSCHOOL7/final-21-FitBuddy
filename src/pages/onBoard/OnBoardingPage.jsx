import React from 'react';
import ChipsOnboarding from '../../components/Chips/ChipsOnboarding';
import styled from 'styled-components';
import Button_L from '../../components/Common/Buttons/Button_L';

const OnboardTitle = styled.h1`
  font-size: var(--font-size-title);
  color: #fff;
  margin-right: 160px;
  margin-top: 40px;
`;
const OnboardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: scroll;
  padding-bottom: 70px;
`;

export default function OnBoardingPage({ name }) {
  return (
    <div>
      <OnboardWrapper>
        <OnboardTitle>
          관심있는 운동을
          <br />
          선택해 주세요.
        </OnboardTitle>
        <ChipsOnboarding
          id='onboard1'
          items={['전체', '🏃🏻‍♀️러닝', '등산', '🏊수영', '러닝2', '러닝3', '러닝4', '러닝5']}
        />
        <ChipsOnboarding id='onboard2' items={['🚴자전거', '⛷️스키', '🏌️골프']} />
        <ChipsOnboarding id='onboard3' items={['🏀농구', '⚽️축구', '🏸배드민턴']} />
        <Button_L name='다음' />
      </OnboardWrapper>
    </div>
  );
}
