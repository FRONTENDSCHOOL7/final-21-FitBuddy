import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Iconlocation } from '../../../src/assets/icons/icon-location-fill.svg';
import { ReactComponent as Iconperson } from '../../../src/assets/icons/icon-person.svg';
import PlaceHolder from '../Common/Placeholder/PlaceHolder';
import ButtonImg from '../Common/Buttons/ButtonImg';
import { useCollection } from '../../hooks/useCollection';
import userImg from '../../assets/placeholder/Placeholder-avatar.svg';

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
`;

const StylediconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  & > svg:not(:last-child) {
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

export default function Card({ groupId, image, day, time, location, attendees, authorImg, title }) {
  const { documents } = useCollection(groupId, null);

  return (
    <StyledCard>
      <StyledholderWrapper>
        <PlaceHolder src={image} />
      </StyledholderWrapper>
      <div>
        <EventInfo>
          <h3>{title}</h3>
          <p className='date' style={{ display: 'inline-block' }}>
            {day}
          </p>
          <p className='date' style={{ display: 'inline-block', marginLeft: '5px' }}>
            {time}
          </p>
          <p>
            <StylediconWrapper>
              <Iconlocation style={{ width: '16px', height: '16px' }} />
              {location}
              <Iconperson style={{ width: '16px', height: '16px', marginLeft: '5px' }} />
              {attendees}
            </StylediconWrapper>
          </p>
        </EventInfo>

        <StyledimgiconWrapper>
          {/* 참여하는 사람 프로필 받아오기, 참여한는 사람 명수 대로 map 돌리기, 대신 3명까지만 */}
          <PlaceHolder type='Person' src={authorImg ? authorImg : ButtonImg} />

          {documents &&
            documents.slice(0, 4).map((document, index) => {
              const myImg = document.user.user.image;
              return (
                <div className='placeholder-container' key={index}>
                  <PlaceHolder type='Person' src={myImg ? myImg : userImg} />
                </div>
              );
            })}
        </StyledimgiconWrapper>
      </div>
    </StyledCard>
  );
}
