import React from 'react';
import styled, { keyframes } from 'styled-components';
import man from '../assets/image/man-white.png';
import hand1 from '../assets/image/hand1-white.png';
import foot11 from '../assets/image/foot1-1-white.png';
import foot12 from '../assets/image/foot1-2-white.png';
import foot13 from '../assets/image/foot1-3-white.png';
import foot21 from '../assets/image/foot2-1-white.png';
import foot22 from '../assets/image/foot2-2-white.png';
import foot23 from '../assets/image/foot2-3-white.png';

const hand1Animation = keyframes`
    from {transform:rotate(0);}
    to {transform:rotate(-60deg);}
`;

const hand2Animation = keyframes`
    from {transform:rotate(-90deg);}
    to {transform:rotate(0);}
`;

const foot1_1Animation = keyframes`
    from {transform:rotate(50deg);}
    to {transform:rotate(0);}
`;

const foot1_2Animation = keyframes`
    from {transform:rotate(67deg);}
    40% {transform:rotate(50deg);}
    50% {transform:rotate(0);}
    90% {transform:rotate(0);}
    to {transform:rotate(67deg);}
`;

const toe1Animation = keyframes`
    from {transform:rotate(0deg);}
    50% {transform:rotate(0deg);}
    80% {transform:rotate(-30deg);}
    90% {transform:rotate(-30deg);}
    to {transform:rotate(0deg);}
`;

const foot2_1Animation = keyframes`
    from {transform:rotate(0);}
    to {transform:rotate(50deg);}
`;

const foot2_2Animation = keyframes`
    from {transform:rotate(0);}
    40% {transform:rotate(0);}
    50% {transform:rotate(67deg);}
    90% {transform:rotate(50deg);}
    to {transform:rotate(0);}
`;

const toe2Animation = keyframes`
    from {transform:rotate(0deg);}
    30% {transform:rotate(-30deg);}
    40% {transform:rotate(-30deg);}
    50% {transform:rotate(0deg);}
    to {transform:rotate(0deg);}
`;

const updownAnimation = keyframes`
    from {margin-top:-8px;}
    to {margin-top:0;}
`;

const Section = styled.div`
  position: relative;
`;

const Run = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  width: 100%;
  animation: ${updownAnimation} 0.5s linear infinite alternate;
  background-color: white;

  img {
    width: 100%;
  }
`;

const Hand1 = styled.div`
  position: absolute;
  z-index: 1;
  top: 19.7%;
  left: 45%;
  width: 17%;
  animation: ${hand1Animation} 1s linear infinite alternate;
  transform-origin: 100% 10%;
`;

const Hand2 = styled(Hand1)`
  top: 19.4%;
  left: 46%;
  width: 16%;
  animation: ${hand2Animation} 1s linear infinite alternate;
  transform-origin: 100% 20%;
`;

const Foot1 = styled.div`
  position: absolute;
  z-index: -2;
  top: 45%;
  left: 48.7%;
  width: 22%;
  animation: ${foot1_1Animation}1s linear infinite alternate;
  transform-origin: 40% 10%;
  img {
    width: 100%;
  }
`;

const Foot2 = styled.div`
  position: absolute;
  z-index: -1;
  top: 92%;
  left: 60%;
  width: 121%;
  animation: ${foot1_2Animation} 1s linear infinite alternate;
  transform-origin: 26% 4%;
  img {
    width: 100%;
  }
`;
const Foot3 = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0%;
  right: 0%;
  width: 27%;
  animation: ${toe1Animation} 2s linear infinite;
  transform-origin: left bottom;
`;
const Foot4 = styled.div`
  position: absolute;
  z-index: -1;
  top: 45%;
  left: 48.7%;
  width: 22%;
  animation: ${foot2_1Animation} 1s linear infinite alternate;
  transform-origin: 40% 10%;
`;

const Foot5 = styled.div`
  position: absolute;
  z-index: -1;
  top: 92%;
  left: 60%;
  width: 121%;
  animation: ${foot2_2Animation} 2s linear infinite;
  transform-origin: 26% 4%;
`;
const Foot6 = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0%;
  right: 0%;
  width: 27%;
  animation: ${toe2Animation} 2s linear infinite;
  transform-origin: left bottom;
`;
export default function SplashRun() {
  return (
    <Section>
      <Run>
        <img src={man} alt='man' />

        <Hand1>
          <img src={hand1} alt='hand1' />
        </Hand1>

        <Hand2>
          <img src={hand1} alt='hand1' />
        </Hand2>

        <Foot1>
          <img src={foot11} alt='foot11' />
          <Foot2>
            <img src={foot12} alt='foot12' />
            <Foot3>
              <img src={foot13} alt='foot13' />
            </Foot3>
          </Foot2>
        </Foot1>

        <Foot4>
          <img src={foot21} alt='foot21' />
          <Foot5>
            <img src={foot22} alt='foot22' />
            <Foot6>
              <img src={foot23} alt='foot23' />
            </Foot6>
          </Foot5>
        </Foot4>
      </Run>
    </Section>
  );
}
