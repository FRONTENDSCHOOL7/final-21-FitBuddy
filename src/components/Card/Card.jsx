import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as Iconlocation } from '../../../src/assets/icons/icon-location-fill.svg';
import { ReactComponent as Iconperson } from '../../../src/assets/icons/icon-person.svg';
import PlaceHolder from '../Common/Placeholder/PlaceHolder';
import ButtonImg from '../Common/Buttons/ButtonImg';
import { useCollection } from '../../hooks/useCollection';
import userImg from '../../assets/placeholder/Placeholder-avatar.svg';
import { getProfile } from '../../api/mypageapi';

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
  const { documents } = useCollection('FitBuddyGroup', ['postId', '==', groupId]);
  const [profileImages, setProfileImages] = useState({});

  useEffect(() => {
    const fetchProfileImages = async () => {
      const imageMap = {};
      const imageFetchPromises = documents.map(async (document) => {
        try {
          const res = await getProfile(document.user.accountname);
          return { id: document.user._id, image: res.profile.image || userImg };
        } catch (error) {
          console.error('Error fetching profile image:', error);
          return { id: document.user._id, image: userImg };
        }
      });

      const images = await Promise.all(imageFetchPromises);

      images.forEach(({ id, image }) => {
        if (id) {
          // 여기서 id가 undefined가 아닌지 확인합니다.
          imageMap[id] = image;
        }
      });

      setProfileImages(imageMap);
    };

    if (documents) {
      fetchProfileImages();
    }
  }, [documents]);

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
            documents
              .filter((document) => document.postId === groupId)
              .slice(0, 4)
              .map((document, index) => {
                const myImg = profileImages[document.user._id] || userImg;
                return (
                  <div className='placeholder-container' key={index}>
                    <PlaceHolder type='Person' src={myImg} />
                  </div>
                );
              })}
          {/* {documents && documents.length > 4 && <PlaceHolder type='Person' src={Button_Img} />} */}
        </StyledimgiconWrapper>
      </div>
    </StyledCard>
  );
}
