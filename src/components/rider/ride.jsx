import React from 'react';
import styled from 'styled-components';
import cycleCrank1 from '../../assets/splashImg/cycle-crank1.png';

const CycleIcon = styled.div`
  // Styles for .cycleicon
`;

const Wheel = styled.div`
  // Styles for .front-wheel and .back-wheel
`;

const Foot = styled.div`
  // Styles for .cycle-foot01-1 and .cycle-foot02-1
`;

const FootInner = styled.div`
  // Styles for .cycle-foot01-2 and .cycle-foot02-2
`;

const Crank = styled.div`
  // Styles for .cycle-crank1 and .cycle-crank2
`;

const Pedal = styled.div`
  // Styles for .cycle-pedal
`;

export default function Bicycle() {
  return (
    <CycleIcon>
      <img src='./img/cycle.png' alt='Cycle' />
      <Wheel className='front-wheel'>
        <img src='./img/cycle-wheel.png' alt='Front Wheel' />
      </Wheel>
      <Wheel className='back-wheel'>
        <img src='./img/cycle-wheel.png' alt='Back Wheel' />
      </Wheel>
      <Foot>
        <img src='./img/cycle-foot01.png' alt='Foot' />
        <FootInner>
          <img src='./img/cycle-foot02.png' alt='Foot Inner' />
        </FootInner>
      </Foot>
      <Foot>
        <img src='./img/cycle-foot01.png' alt='Foot' />
        <FootInner>
          <img src='./img/cycle-foot02.png' alt='Foot Inner' />
        </FootInner>
      </Foot>
      <Crank>
        <img src='./img/cycle-crank1.png' alt='Crank' />
        <Pedal>
          <img src='./img/cycle-pedal.png' alt='Pedal' />
        </Pedal>
      </Crank>
      <Crank>
        <img src='./img/cycle-crank2.png' alt='Crank' />
        <Pedal>
          <img src='./img/cycle-pedal.png' alt='Pedal' />
        </Pedal>
      </Crank>
    </CycleIcon>
  );
}
