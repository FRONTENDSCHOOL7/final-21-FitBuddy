import React, { useContext, useEffect, useRef, useState } from 'react';
import PostCommunity from './PostCommunity';
import styled from 'styled-components';
import heartOn from '../../assets/icons/icon-heart-on.svg';
import heartOff from '../../assets/icons/icon-heart-off.svg';
import circle from '../../assets/icons/icon-message-circle.svg';
import CommentPriview from '../Common/Comment/CommentPriview';
import PlaceHolder from '../Common/Placeholder/PlaceHolder';
import { useNavigate } from 'react-router-dom';
import { postLike, postUnlike } from '../../api/postApi';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { commentCount, commentPreview } from '../../Recoil/commentCount';
import CommentContext from '../../pages/community/CommentContext';
import { getCommentList } from '../../api/commentApi';

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
const StyleComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 8px;
`;
const StyleTextArea = styled.div`
  background-color: var(--color-bg);
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
  const [heartCount, setHeartCount] = useState(props.heartCount || 0);
  const [isHearted, setIsHearted] = useState(props.hearted);
  const textAreaRef = useRef(null);
  const [isShowReadMore, setIsShowReadMore] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const checkComments = useRecoilValue(commentPreview);
  const comments = checkComments[props.postId] || [];
  const setCommentPreviewState = useSetRecoilState(commentPreview);

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
              name={comment.author.accountname}
              content={comment.content}
            />
          ))}
        <CommentButton onClick={handleReply}>댓글더보기...</CommentButton>
      </StyleComment>
    </StyledDiv>
  );
}
