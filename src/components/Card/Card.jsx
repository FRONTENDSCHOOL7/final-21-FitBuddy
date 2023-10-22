import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  position: relative;
  background-color: var(--color-neutral);
  border-radius: 10px;
  padding: 20px;
  width: 300px;
`;

const StyledImagePlaceholder = styled.div`
  /* 플레이스 홀더 이미지 */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const EventInfo = styled.div`
  h3 {
    font-size: var(--font-size-sm);
    margin-bottom: 10px;
  }
  p {
    font-size: var(--font-size-xs);
    margin-bottom: 5px;
  }
`;

export default function Card() {
  return (
    <StyledCard>
      <StyledImagePlaceholder></StyledImagePlaceholder>
      <EventInfo>
        <h3>헬스 배우고 싶은 분</h3>
        <p>2023.10.12 (목) 19:00</p>
        <p>핏버디 체육관 · 4명</p>
      </EventInfo>
    </StyledCard>
  );
}
