import React from 'react';
import ChipsOnboarding from '../../components/Chips/ChipsOnboarding';
import styled from 'styled-components';
import ButtonL from '../../components/Common/Buttons/ButtonL';

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
  const handleSelect = (selectedSport) => {
    // 스포츠가 배열에 이미 있는지 확인
    if (selectedSports.includes(selectedSport)) {
      // 배열에서 스포츠 제거
      const updatedSports = selectedSports.filter((sport) => sport !== selectedSport);
      setSelectedSports(updatedSports);
    } else {
      // 배열에 스포츠 추가
      const updatedSports = [...selectedSports, selectedSport];
      setSelectedSports(updatedSports);
    }
  };

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

        <ButtonL name='완료' onClick={onClick} />
      </OnboardWrapper>
    </div>
  );
}
