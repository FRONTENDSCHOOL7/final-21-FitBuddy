import React, { useState } from 'react';
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
  overflow: hidden;
  padding-bottom: 70px;
`;

export default function OnBoardingPage({ name, onClick, selectedSports, setSelectedSports }) {
  const [selectedSport, setSelectedSport] = useState([]);

  const handleSelect = (selectedSport) => {
    const updatedSports = [...selectedSports];
    updatedSports.push(selectedSport);
    setSelectedSports(updatedSports);
  };
  console.log(selectedSports);

  return (
    <div>
      <OnboardWrapper>
        <OnboardTitle>
          관심있는 운동을
          <br />
          선택해 주세요.
        </OnboardTitle>
        <ChipsOnboarding
          id='outdoor'
          category='아웃도어'
          items={['🏌골프', '🎣낚시', '🏕캠핑', '🏍바이크', '🚴자전거', '⛰등산', '🏃‍♂️러닝']}
          onSelect={handleSelect}
        />
        <ChipsOnboarding
          id='fitness'
          category='피트니스'
          items={['🏋헬스', '🤸필라테스', '🏋️‍♂️크로스핏', '🧘🏽‍♂️요가', '🏊수영']}
          onSelect={handleSelect}
        />
        <ChipsOnboarding
          id='ballgame'
          category='구기'
          items={['⚽축구', '🏀농구', '⚾야구', '🎱당구', '🎱포켓볼', '⚽풋살']}
          onSelect={handleSelect}
        />

        <Button_L name='완료' onClick={onClick} />
      </OnboardWrapper>
    </div>
  );
}
