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
import { commentPreview } from '../../Recoil/commentCount';
import { getCommentList } from '../../api/commentApi';
import userTokenAtom from '../../Recoil/userTokenAtom';
import { getDetailPost } from '../../api/postApi';

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
  transition: color 0.5s ease-in-out;
  animation: ${({ animate }) =>
    animate
      ? css`
          ${popAnimation} 0.5s ease
        `
      : 'none'};
  padding-top: 3px;
`;

export default function PostProfile({
  heartCount,
  hearted,
  postId,
  content,
  accountname,
  username,
  authorId,
  authorImage,
  image,
  commentLength,
  updatedAt,
}) {
  const [heartCounty, setHeartCounty] = useState(heartCount);
  const [isHearted, setIsHearted] = useState(hearted);
  const textAreaRef = useRef(null);
  const [isShowReadMore, setIsShowReadMore] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const checkComments = useRecoilValue(commentPreview);
  const comments = checkComments[postId] || [];
  const setCommentPreviewState = useSetRecoilState(commentPreview);
  const [animate, setAnimate] = useState(false);
  const heart = useRef();

  const navigate = useNavigate();
  const token = useRecoilValue(userTokenAtom);

  const fetchPostData = async () => {
    try {
      const response = await getDetailPost(postId);
      if (response && response.post) {
        setHeartCounty(response.post.heartCount);
        setIsHearted(response.post.hearted);
      }
    } catch (error) {
      console.error('Failed to fetch post details:', error);
    }
  };

  useEffect(() => {
    fetchPostData();
  }, [postId, token]);

  const like = async () => {
    try {
      const response = await postLike(postId, token);
      if (response && response.data) {
        setHeartCounty((prevHeartCount) => prevHeartCount + 1);
        setIsHearted(true);
      }
    } catch (error) {
      console.error('Error liking the post:', error);
    }
  };

  const cancellike = async () => {
    try {
      const response = await postUnlike(postId, token);
      if (response && response.data) {
        setHeartCounty((prevHeartCount) => prevHeartCount - 1);
        setIsHearted(false);
      }
    } catch (error) {
      console.error('Error unliking the post:', error);
    }
  };

  // const like = async () => {
  //   try {
  //     const response = await postLike(postId, token);
  //     if (response && response.post) {
  //       setHeartCounty(heartCounty + 1);
  //       setIsHearted(true);
  //     } else {
  //       console.error('error', response);
  //     }
  //   } catch (error) {
  //     console.error('Error', error);
  //   }
  // };

  // // 좋아요 취소
  // const cancellike = async () => {
  //   try {
  //     const response = await postUnlike(postId, token);
  //     if (response && response.post) {
  //       setHeartCounty(heartCounty - 1);
  //       setIsHearted(false);
  //     } else {
  //       console.error('error', response);
  //     }
  //   } catch (error) {
  //     console.error('Error', error);
  //   }
  // };

  const handleToggleLike = async () => {
    setAnimate(true);
    if (isHearted) {
      await cancellike();
    } else {
      await like();
    }
    fetchPostData().finally(() => {
      setAnimate(false);
    });
  };

  const onAnimationEnd = () => {
    setAnimate(false);
  };

  // 댓글 상세 페이지 이동
  const handleReply = () => {
    navigate(`/feedReply/${postId}`, { state: { postId: postId } });
  };

  //더보기
  useEffect(() => {
    const element = textAreaRef.current;
    if (element.scrollHeight > element.clientHeight) {
      setIsShowReadMore(true);
    } else {
      setIsShowReadMore(false);
    }
  }, [content]);
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
    fetchCommentsForPost(postId);
  }, [postId]);

  return (
    <StyledDiv>
      <div className='community'>
        <PostCommunity
          accountname={accountname}
          username={username}
          postId={postId}
          authorId={authorId}
          authorImage={authorImage}
        />
        <PlaceHolder type='Ractangle' src={image} />
        <div className='reaction'>
          <HeartIcon
            ref={heart}
            src={isHearted ? heartOn : heartOff}
            alt='heart'
            onClick={handleToggleLike}
          />
          <HeartCount isHearted={isHearted} animate={animate} onAnimationEnd={onAnimationEnd}>
            {heartCounty}
          </HeartCount>
          <img src={circle} alt='comment' />
          <p style={{ color: 'white', paddingTop: '3px' }}>{commentLength}</p>
        </div>
        <div>
          <StyleTextArea ref={textAreaRef} expanded={expanded}>
            {content}
          </StyleTextArea>
        </div>
        {isShowReadMore && (
          <Button style={{ color: 'var(--color-gray)' }} onClick={toggleReadMore}>
            {expanded ? '간략히' : '...더보기'}
          </Button>
        )}
      </div>
      <p className='date'>{updatedAt}</p>
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
          {commentLength > 0 ? `댓글 ${commentLength}개 모두 보기` : '댓글 작성하기'}
        </CommentButton>
      </StyleComment>
    </StyledDiv>
  );
}
