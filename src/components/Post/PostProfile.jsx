import React, { useEffect, useState } from 'react';
import PostCommunity from './PostCommunity';
import styled from 'styled-components';
import heartOn from '../../assets/icons/icon-heart-on.svg';
import heartOff from '../../assets/icons/icon-heart-off.svg';
import circle from '../../assets/icons/icon-message-circle.svg';
import CommentPriview from '../Common/Comment/CommentPriview';
import PlaceHolder from '../Common/Placeholder/PlaceHolder';
import { useNavigate } from 'react-router-dom';
import { postLike, postUnlike } from '../../api/postApi';
import { useRecoilValue } from 'recoil';
import { commentCount } from '../../Recoil/commentCount';

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
  const [liked, setLiked] = useState(false);
  const [heartCount, setHeartCount] = useState(props.heartCount || 0);
  const [isHearted, setIsHearted] = useState(props.hearted);
  const replyCount = useRecoilValue(commentCount);

  const navigate = useNavigate();
  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  //좋아요 토글
  const handleToggleLike = async () => {
    if (liked) {
      await handleUnHeart();
      setLiked(false);
    } else {
      await handleHeart();
      setLiked(true);
    }
  };

  const handleUnHeart = async () => {
    try {
      const response = await postUnlike(props.postId, isHearted);
      setHeartCount(response.post.heartCount);
      setIsHearted(false);
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleHeart = async () => {
    try {
      const response = await postLike(props.postId, isHearted);
      console.log(response);
      setIsHearted(true);
      setHeartCount(response.post.heartCount);
    } catch (error) {
      console.log(error.message);
    }
  };

  // 댓글 상세 페이지
  const handleReply = () => {
    navigate(`/feedReply/${props.postId}`);
  };

  return (
    <StyledDiv>
      <div className='community'>
        <PostCommunity name={props.name} postId={props.postId} />
        <PlaceHolder type='Ractangle' src={props.image} />
        <div className='reaction'>
          <img src={isHearted ? heartOn : heartOff} alt='heart' onClick={handleToggleLike} />
          <p
            style={{
              color: isHearted ? 'var(--color-primary)' : 'var(--color-secondary)',
              paddingTop: '3px',
            }}
          >
            {heartCount}
          </p>
          <img src={circle} alt='comment' />
          <p style={{ color: 'white', paddingTop: '3px' }}>{replyCount}</p>
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
        <CommentPriview name={props.accountname} />
        <CommentButton onClick={handleReply}>댓글더보기...</CommentButton>
      </StyleCommnet>
    </StyledDiv>
  );
}
