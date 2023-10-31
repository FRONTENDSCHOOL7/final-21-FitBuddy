import React, { useState, useEffect } from 'react';
import NavTopDetails from '../../components/Common/Nav/NavTopDetails';
import NavBottom from '../../components/Common/Nav/NavBottom';
import InputComment from '../../components/Common/Input/InputComment';
import CommentList from '../../components/Common/Comment/CommentList';
import { getCommentList, uploadComment } from '../../api/commentApi';
import { useLocation } from 'react-router-dom';
import userTokenAtom from '../../Recoil/userTokenAtom';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';

export default function Community_Comment(props) {
  const [comments, setComments] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const location = useLocation();
  const auth = useRecoilValue(userTokenAtom);
  const { postId } = useParams();

  const getComments = async () => {
    try {
      const response = await getCommentList(postId);
      console.log(postId);
      console.log(response);
      if (!response) {
        console.error('API response is undefined');
        return;
      }
      if (response.status === 200) setComments(response.comments);
    } catch (error) {
      console.error('Error', error);
    }
  };
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  // const handlePostComments = async (e) => {
  //   e.preventDefault();
  //   console.log(postId);
  //   const uploadResponse = await uploadComment({
  //     postId,
  //     comment: inputValue,
  //   });
  //   console.log('upLoadResponse', uploadResponse);
  //   await getComments();
  //   setInputValue('');
  // };

  const handlePostComments = async (e) => {
    e.preventDefault();
    const comment = {
      content: {
        inputValue,
      },
    };
    updateComment(postId, comment);
  };

  const updateComment = async (postId, comment) => {
    try {
      const res = await uploadComment(postId, comment);
      console.log(res);
      setInputValue('');
      await getComments('');
    } catch (error) {
      console.error('요청 중 에러 발생:', error.message);
      alert('댓글 실패');
    }
  };

  // const handlePostComments = async (e) => {
  //   e.preventDefault();
  //   console.log(postId);
  //   const uploadResponse = await uploadComment({
  //     comment: {
  //       content: 'asdasdasd',
  //     },
  //   });
  //   console.log(uploadResponse);
  //   console.log('upLoadResponse', uploadResponse);
  //   // await getComments();
  //   setInputValue('');
  // };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      <NavTopDetails title='댓글' />
      {comments.map((comment) => {
        return (
          <CommentList
            key={comment.id}
            comment={comment}
            feedId={props.postId}
            accoutname={comment.accoutname}
            getComments={getComments}
          />
        );
      })}
      <InputComment
        type='text'
        onChange={handleInput}
        value={inputValue}
        onClick={handlePostComments}
      />
      <NavBottom />
    </>
  );
}
