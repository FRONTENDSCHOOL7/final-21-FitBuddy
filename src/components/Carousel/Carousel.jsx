import React from 'react';
import { CarouselWrapper, CarouselImages, StylediconWrapper } from './StyledCarousel';
import PlaceHolder from '../Common/Placeholder/PlaceHolder';
import { ReactComponent as Iconlocation } from '../../../src/assets/icons/icon-location-fill.svg';
import { ReactComponent as Iconperson } from '../../../src/assets/icons/icon-person.svg';

function Carousel({ groupId, image, day, time, location, attendees, authorImg, title }) {
  return (
    <CarouselWrapper>
      <PlaceHolder src={image} type='Carousel' />
      <div>
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
      </div>
    </CarouselWrapper>
  );
}

export default Carousel;
