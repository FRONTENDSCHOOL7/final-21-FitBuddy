import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Iconlocation } from '../../../src/assets/icons/icon-location-fill.svg';
import { ReactComponent as Iconperson } from '../../../src/assets/icons/icon-person.svg';
import { ReactComponent as Placeholderimg } from '../../assets/placeholder/Placeholder-img.svg';
import PlaceHolder from '../Common/Placeholder/PlaceHolder';
import BasicImg from '../../assets/placeholder/Placeholder-icon.svg';
import Button_Img from '../../components/Common/Buttons/Button_Img';

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
  gap: 5px;
  /* & > svg:not(:last-child) {
    margin-top: 5px;
    margin-right: 5px;
  } */
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

export default function Card(props) {
  return (
    <StyledCard>
      <StyledholderWrapper>
        <PlaceHolder src={props.image} />
      </StyledholderWrapper>
      <div>
        <EventInfo>
          <h3>{props.title}</h3>
          <p className='date'>
            {props.day}
            {props.time}
          </p>
          <p>
            <StylediconWrapper>
              <Iconlocation style={{ width: '16px', height: '16px' }} />
              {props.location}
              <Iconperson style={{ width: '16px', height: '16px', marginLeft: '5px' }} />
              {props.attendees}
            </StylediconWrapper>
          </p>
        </EventInfo>

        <StyledimgiconWrapper>
          {/* 참여하는 사람 프로필 받아오기, 참여한는 사람 명수 대로 map 돌리기, 대신 3명까지만 */}
          <PlaceHolder type='Person' src={props.image ? props.image : Button_Img} />
          <PlaceHolder type='Person' src={props.image} />
          <PlaceHolder type='Person' src={props.image} />
        </StyledimgiconWrapper>
      </div>
    </StyledCard>
  );
}
