import React, { useState } from 'react';
import PostCommunity from './PostCommunity';
import styled from 'styled-components';
import heartOn from '../../assets/icons/icon-heart-on.svg';
import heartOff from '../../assets/icons/icon-heart-off.svg';
import circle from '../../assets/icons/icon-message-circle.svg';
import CommentPriview from '../Common/Comment/CommentPriview';
import PlaceHolder from '../Common/Placeholder/PlaceHolder';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 414px;
  padding: 20px;
  border: 1px solid #fff;
  border-radius: 20px;

  .reaction {
    display: flex;
    gap: 6px;
    p {
      margin-right: 8px;
    }
  }
  .date {
    margin: 5px 0px;
    color: gray;
    font-size: 10px;
  }
  .community {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
const StyleCommnet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 8px;
`;
const StyleTextArea = styled.div`
  background-color: #000;
  overflow: hidden;
  color: #fff;
  font-size: 14px;
  height: auto;
  overflow: ${({ overflow }) => (overflow ? 'visible' : 'hidden')};
`;
const Button = styled.div`
  cursor: pointer;
  max-height: 2rem;
  line-height: 2rem;
  font-size: 14px;

  &.hide {
    display: none;
  }
`;
const CommentButton = styled.button`
  display: inline;
  background-color: transparent;
  border: none;
  width: 70px;
  color: gray;
  font-size: 10px;
  cursor: pointer;
`;
export default function PostProfile() {
  const [isShowReadMore, setIsShowReadMore] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [heartCount, setHeartCount] = useState(0);
  const [isLinked, setIsLinked] = useState(false);
  const [reply, setReply] = useState(0);

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };
  const HandleHeart = () => {
    if (isLinked) {
      setHeartCount(heartCount - 1);
    } else {
      setHeartCount(heartCount + 1);
    }
    setIsLinked(!isLinked);
  };

  return (
    <StyledDiv>
      <div className='community'>
        <PostCommunity />
        <PlaceHolder type='Ractangle' />
        <div className='reaction'>
          <img src={isLinked ? heartOn : heartOff} alt='heart' onClick={HandleHeart} />
          <p style={{ color: 'white', paddingTop: '3px' }}>{heartCount}</p>
          <img src={circle} alt='comment' />
          <p style={{ color: 'white', paddingTop: '3px' }}>{reply}</p>
        </div>
        <StyleTextArea>
          {expanded
            ? '옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 풍부하게 뛰노는 인생의 더 가나다라마바사아자차카나타파나아나나나나'
            : '옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 풍부하게 뛰노는 인생의 더'}
        </StyleTextArea>
      </div>
      {isShowReadMore && (
        <Button style={{ color: 'white' }} onClick={toggleReadMore}>
          {expanded ? '간략히' : '...더보기'}
        </Button>
      )}
      <p className='date'>2020년 10월 21일</p>
      <StyleCommnet>
        <CommentPriview />
        <CommentPriview />
        <CommentButton>댓글더보기...</CommentButton>
      </StyleCommnet>
    </StyledDiv>
  );
}
