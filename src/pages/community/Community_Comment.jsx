import React, { useState, useEffect } from 'react';
import NavTopDetails from '../../components/Common/Nav/NavTopDetails';
import NavBottom from '../../components/Common/Nav/NavBottom';
import InputComment from '../../components/Common/Input/InputComment';
import CommentList from '../../components/Common/Comment/CommentList';
import { getCommentList, uploadComment } from '../../api/commentApi';
import { useParams } from 'react-router-dom';
import { commentCount } from '../../Recoil/commentCount';
import { useRecoilState } from 'recoil';

export default function Community_Comment(props) {
  const [comments, setComments] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const { postId } = useParams();
  const [replyCount, setReplyCount] = useRecoilState(commentCount);

  //댓글 전체보기
  const fetchFeeds = () => {
    getCommentList(postId)
      .then((data) => {
        console.log(data);
        if (data && Array.isArray(data.comments)) {
          setComments(data.comments);
          setReplyCount(data.comments.length);
        } else {
          console.error('에러', data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(fetchFeeds, []);

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
      const res = await uploadComment(postId, comment);
      console.log(res);
      setInputValue('');
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
            feedId={item.id}
            accoutname={item.author.username}
            content={item.content}
            createdAt={timed}
            removeComment={removeState}
          />
        );
      })}
      <InputComment
        type='text'
        onChange={(e) => handleInput(e)}
        value={inputValue}
        onClick={handlePostComments}
      />
      <NavBottom />
    </>
  );
}
