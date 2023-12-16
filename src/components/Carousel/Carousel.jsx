import React from 'react';
import {
  CarouselWrapper,
  StylediconWrapper,
  HorizontalAlignWrapper,
  TimeWrapper,
} from './StyledCarousel';
import PlaceHolder from '../Common/Placeholder/PlaceHolder';
import { ReactComponent as Iconlocation } from '../../../src/assets/icons/icon-location-fill.svg';
import { ReactComponent as Iconperson } from '../../../src/assets/icons/icon-person.svg';

function Carousel({ image, day, time, location, attendees, title }) {
  return (
    <CarouselWrapper>
      <PlaceHolder src={image} type='Carousel' />
      <div>
        <h3>{title}</h3>
        <HorizontalAlignWrapper>
          <TimeWrapper>{day}</TimeWrapper>
          <p>{time}</p>
        </HorizontalAlignWrapper>
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
