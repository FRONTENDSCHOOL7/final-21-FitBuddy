import React from 'react';
import PostCommunity from './PostCommunity';
import styled from 'styled-components';
import heart from '../../assets/icons/icon-heart-on.svg';
import circle from '../../assets/icons/icon-message-circle.svg';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 414px;
  padding: 20px;
  border: 1px solid #fff;

  .reaction {
    display: flex;
    gap: 6px;
    p {
      margin-right: 8px;
    }
  }
`;
const StyleCommnet = styled.div``;

export default function PostProfile() {
  return (
    <StyledDiv>
      <PostCommunity />
      <div>플레이스홀더</div>
      <div className='reaction'>
        <img src={heart} alt='heart' />
        <p>58</p>
        <img src={circle} alt='' />
        <p>21</p>
      </div>
      <textarea name='' id='' cols='30' rows='10'>
        옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한
        그들의 그와 약동하다. 대고, 못할 풍부하게 뛰노는 인생의 더 ...더보기
      </textarea>
      <p>2020년 10월 21일</p>
      <StyleCommnet />
      <StyleCommnet />
    </StyledDiv>
  );
}
