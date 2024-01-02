import React, { useState, useEffect } from 'react';
import NavTopDetails from '../../components/Common/Nav/NavTopDetails';
import InputComment from '../../components/Common/Input/InputComment';
import CommentList from '../../components/Common/Comment/CommentList';
import { getCommentList, uploadComment } from '../../api/commentApi';
import { commentPreview } from '../../Recoil/commentCount';
import { useSetRecoilState } from 'recoil';
import { useLocation } from 'react-router-dom';
import { CommentSection } from './StyledCommunity';
import PostProfile from '../../components/Post/PostProfile';
import { getDetailPost } from '../../api/postApi';

export default function CommunityComment(props) {
  const [comments, setComments] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [postDetails, setPostDetails] = useState(null);
  const setCommentPreviewState = useSetRecoilState(commentPreview);
  const location = useLocation();
  const postId = location.state && location.state.postId;

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await getDetailPost(postId);
        if (response && response.post) {
          setPostDetails(response.post);
        }
      } catch (error) {
        console.error('게시물 상세 정보를 가져오는 중 에러 발생:', error);
      }
    };

    fetchPostDetails();
    fetchFeeds();
  }, [postId]);

  //댓글 전체보기
  const fetchFeeds = () => {
    getCommentList(postId)
      .then((data) => {
        if (data && Array.isArray(data.comments)) {
          setComments(data.comments);
          setCommentPreviewState((prev) => ({
            ...prev,
            [postId]: data.comments.slice(0, 2),
          }));
        } else {
          console.error('에러', data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchFeeds();
  }, []);
  // 댓글 작성
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const handlePostComments = async (e) => {
    e.preventDefault();
    const comments = {
      comment: {
        content: inputValue,
      },
    };
    updateComment(postId, comments);
  };

  const updateComment = async (postId, comment) => {
    try {
      setInputValue('');
      await uploadComment(postId, comment);
      fetchFeeds();
    } catch (error) {
      console.error('요청 중 에러 발생:', error.message);
      alert('댓글 실패');
    }
  };
  //댓삭 리렌더링
  const removeState = (commentId) => {
    setComments((prev) => prev.filter((comment) => comment.id !== commentId));
  };

  return (
    <>
      <NavTopDetails title='댓글' />
      {postDetails && (
        <PostProfile
          heartCount={postDetails.heartCount}
          hearted={postDetails.hearted}
          postId={postId}
          content={postDetails.content}
          accountname={postDetails.author.username}
          username={postDetails.author.username}
          authorId={postDetails.author._id}
          authorImage={postDetails.author.image}
          image={postDetails.image}
          commentLength={comments.length}
          hide={true}
        />
      )}
      <CommentSection>
        {[...comments].reverse().map((item) => {
          const time = new Date(item.createdAt);
          let hours = time.getHours();
          const minutes = time.getMinutes();
          let period = 'AM';
          if (hours >= 12) {
            period = 'PM';
            if (hours > 12) {
              hours -= 12;
            }
          } else if (hours === 0) {
            hours = 12;
          }
          const timed = `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')} ${period}`;
          return (
            <CommentList
              key={item.id}
              commentId={item.id}
              accoutname={item.author.username}
              content={item.content}
              createdAt={timed}
              removeComment={removeState}
              authorId={item.author._id}
              authorImage={item.author.image}
              postId={postId}
            />
          );
        })}
      </CommentSection>
      <InputComment
        type='text'
        onChange={(e) => handleInput(e)}
        value={inputValue}
        onClick={handlePostComments}
      />
    </>
  );
}
