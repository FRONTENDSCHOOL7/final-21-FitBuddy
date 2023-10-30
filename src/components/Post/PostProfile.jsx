import React, { useEffect, useState } from 'react';
import PostCommunity from './PostCommunity';
import styled from 'styled-components';
import heartOn from '../../assets/icons/icon-heart-on.svg';
import heartOff from '../../assets/icons/icon-heart-off.svg';
import circle from '../../assets/icons/icon-message-circle.svg';
import CommentPriview from '../Common/Comment/CommentPriview';
import PlaceHolder from '../Common/Placeholder/PlaceHolder';
import { useNavigate } from 'react-router-dom';
import { postLike } from '../../api/postApi';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 414px;
  padding: 20px;
  border: 1px solid #fff;
  border-radius: 20px;
  margin-bottom: 70px;

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
export default function PostProfile(props) {
  const [isShowReadMore, setIsShowReadMore] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [heartCount, setHeartCount] = useState(props.post.heartCount);
  const [isHearted, setIsHearted] = useState(props.post?.hearted);
  const [reply, setReply] = useState(0);
  const [isLinked, setIsLinked] = useState(false);

  const navigate = useNavigate();

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };
  const HandleHeart = async () => {
    try {
      const response = await postLike(props.post._id, isHearted);
      console.log(response);
      setIsHearted(!isHearted);
      setHeartCount(response.heartCount);
      setIsLinked(!isLinked);
    } catch (error) {
      console.log(error.message);
    }
  };

  // 댓글 상세 페이지
  const handleReply = () => {
    navigate('/feedReply');
  };

  return (
    <StyledDiv>
      <div className='community'>
        <PostCommunity name={props.name} postId={props.postId} />
        <PlaceHolder type='Ractangle' src={props.image} />
        <div className='reaction'>
          <img
            src={isLinked ? heartOn : heartOff}
            isHearted={isHearted}
            alt='heart'
            onClick={HandleHeart}
          />
          <p style={{ color: 'white', paddingTop: '3px' }}>{heartCount}</p>
          <img src={circle} alt='comment' />
          <p style={{ color: 'white', paddingTop: '3px' }}>{reply}</p>
        </div>
        <StyleTextArea>{props.content}</StyleTextArea>
      </div>
      {isShowReadMore && (
        <Button style={{ color: 'white' }} onClick={toggleReadMore}>
          {expanded ? '간략히' : '...더보기'}
        </Button>
      )}
      <p className='date'>{props.updatedAt}</p>
      <StyleCommnet>
        <CommentPriview />
        <CommentPriview />
        <CommentButton onClick={handleReply}>댓글더보기...</CommentButton>
      </StyleCommnet>
    </StyledDiv>
  );
}
