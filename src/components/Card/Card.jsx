import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Iconlocation } from '../../../src/assets/icons/icon-location-fill.svg';
import { ReactComponent as Iconperson } from '../../../src/assets/icons/icon-person.svg';
import { ReactComponent as Placeholdersquare } from '../../assets/placeholder/Placeholder-square.svg';
import { ReactComponent as Placeholderimg } from '../../assets/placeholder/Placeholder-img.svg';

const StyledCard = styled.div`
  position: relative;
  background-color: var(--color-neutral);
  border-radius: 10px;
  padding: 20px;
  width: auto;
  display: flex;
  align-items: start;
`;

const StyledholderWrapper = styled.div`
  margin-right: 20px;
`;

const StyledimgiconWrapper = styled.div`
  display: flex;
  align-items: center;
  & > svg:not(:last-child) {
    margin-top: 5px;
    margin-right: 5px;
  }
`;

const StylediconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  & > svg:not(:last-child) {
    margin-width: 5px;
  }
`;

const EventInfo = styled.div`
  color: #fff;
  h3 {
    font-size: var(--font-size-sm);
    margin-bottom: 10px;
  }
  p {
    font-size: var(--font-size-xs);
    margin-bottom: 5px;
  }
  .date {
    color: #a6ff4d;
  }
`;

export default function Card() {
  return (
    <StyledCard>
      <StyledholderWrapper>
        <Placeholdersquare />
      </StyledholderWrapper>
      <div>
        <EventInfo>
          <h3>헬스 배우고 싶은 분</h3>
          <p className='date'>2023.10.12 (목) 19:00</p>
          <p>
            <StylediconWrapper>
              <Iconlocation style={{ width: '16px', height: '16px' }} />
              핏버디 체육관
              <Iconperson style={{ width: '16px', height: '16px', marginLeft: '5px' }} />
              4명
            </StylediconWrapper>
          </p>
        </EventInfo>

        <StyledimgiconWrapper>
          <Placeholderimg />
          <Placeholderimg />
          <Placeholderimg />
        </StyledimgiconWrapper>
      </div>
    </StyledCard>
  );
}
