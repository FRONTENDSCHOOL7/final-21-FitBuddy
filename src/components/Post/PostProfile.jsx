import React, { useEffect, useRef, useState } from 'react';
import PostCommunity from './PostCommunity';
import styled, { keyframes, css } from 'styled-components';
import heartOn from '../../assets/icons/icon-heart-on.svg';
import heartOff from '../../assets/icons/icon-heart-off.svg';
import circle from '../../assets/icons/icon-message-circle.svg';
import CommentPriview from '../Common/Comment/CommentPriview';
import PlaceHolder from '../Common/Placeholder/PlaceHolder';
import { useNavigate } from 'react-router-dom';
import { postLike, postUnlike } from '../../api/postApi';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { commentCount, commentPreview } from '../../Recoil/commentCount';
import { getCommentList } from '../../api/commentApi';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 414px;
  padding: 20px;
  border-radius: 10px;

  .reaction {
    display: flex;
    gap: 6px;
    p {
      margin-right: 8px;
    }
  }
  .date {
    margin: 5px 0px;
    color: var(--color-gray);
    font-size: var(--font-size-xs);
  }
  .community {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const StyleComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 8px;
`;
const StyleTextArea = styled.div`
  overflow: hidden;
  color: #fff;
  font-size: 14px;
  line-height: 1.2;
  height: ${({ expanded }) => (expanded ? 'auto' : '2rem')};
  white-space: pre-wrap;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${({ expanded }) => (expanded ? 'none' : '2')};
  -webkit-box-orient: vertical;
  /* min-height: 3.2rem; */
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
  display: flex;
  background-color: transparent;
  border: none;
  color: gray;
  font-size: var(--font-size-xs);
  cursor: pointer;
  padding: 0;
`;
const HeartIcon = styled.img`
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;
const popAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`;

const HeartCount = styled.p`
  color: ${({ isHearted }) => (isHearted ? 'var(--color-primary)' : 'var(--color-secondary)')};
  transition: color 0.3s ease-in-out;
  animation: ${({ animate }) =>
    animate
      ? css`
          ${popAnimation} 0.5s ease
        `
      : 'none'};
  padding-top: 3px;
`;

export default function PostProfile(props) {
  const [heartCount, setHeartCount] = useState(props.heartCount || 0);
  const [isHearted, setIsHearted] = useState(props.hearted);
  const textAreaRef = useRef(null);
  const [isShowReadMore, setIsShowReadMore] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const checkComments = useRecoilValue(commentPreview);
  const comments = checkComments[props.postId] || [];
  const setCommentPreviewState = useSetRecoilState(commentPreview);
  const [animate, setAnimate] = useState(false);

  const navigate = useNavigate();

  //좋아요
  const handleToggleLike = async () => {
    if (isHearted) {
      setHeartCount((prevCount) => prevCount - 1);
      setIsHearted(false);
      try {
        const response = await postUnlike(props.postId);
        setHeartCount(response.post.heartCount);
      } catch (error) {
        setIsHearted(true);
      }
    } else {
      setIsHearted(true);
      setHeartCount((prevCount) => prevCount + 1);
      try {
        const response = await postLike(props.postId);
        setHeartCount(response.post.heartCount);
      } catch (error) {
        setIsHearted(false);
        console.log(error.message);
      }
    }
    setAnimate(!animate);
    setTimeout(() => setAnimate(!animate), 500);
  };

  // 댓글 상세 페이지 이동
  const handleReply = () => {
    navigate(`/feedReply/${props.postId}`);
  };

  //더보기
  useEffect(() => {
    const element = textAreaRef.current;
    if (element.scrollHeight > element.clientHeight) {
      setIsShowReadMore(true);
    } else {
      setIsShowReadMore(false);
    }
  }, [props.content]);
  const toggleReadMore = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  //댓글 미리보기 업데이트
  const fetchCommentsForPost = async (postId) => {
    try {
      const data = await getCommentList(postId);
      if (data && Array.isArray(data.comments)) {
        setCommentPreviewState((prev) => ({
          ...prev,
          [postId]: data.comments.slice(0, 2),
        }));
      }
    } catch (error) {
      console.error('댓글 오류:', error);
    }
  };

  useEffect(() => {
    fetchCommentsForPost(props.postId);
  }, [props.postId]);

  return (
    <StyledDiv>
      <div className='community'>
        <PostCommunity
          accountname={props.accountname}
          username={props.username}
          postId={props.postId}
          authorId={props.authorId}
          authorImage={props.authorImage}
        />
        <PlaceHolder type='Ractangle' src={props.image} />
        <div className='reaction'>
          <HeartIcon src={isHearted ? heartOn : heartOff} alt='heart' onClick={handleToggleLike} />
          <HeartCount isHearted={isHearted} animate={animate}>
            {heartCount}
          </HeartCount>
          <img src={circle} alt='comment' />
          <p style={{ color: 'white', paddingTop: '3px' }}>{props.commentLength}</p>
        </div>
        <div>
          <StyleTextArea ref={textAreaRef} expanded={expanded}>
            {props.content}
          </StyleTextArea>
        </div>
        {isShowReadMore && (
          <Button style={{ color: 'var(--color-gray)' }} onClick={toggleReadMore}>
            {expanded ? '간략히' : '...더보기'}
          </Button>
        )}
      </div>
      <p className='date'>{props.updatedAt}</p>
      <StyleComment>
        {comments &&
          comments.map((comment, index) => (
            <CommentPriview
              key={index}
              name={comment.author.username}
              content={comment.content}
              commentAuthorImage={comment.author.image}
            />
          ))}
        <CommentButton onClick={handleReply}>
          {props.commentLength > 0 ? `댓글 ${props.commentLength}개 모두 보기` : '댓글 작성하기'}
        </CommentButton>
      </StyleComment>
    </StyledDiv>
  );
}
