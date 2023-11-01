import React, { useEffect, useState } from 'react';
import NavBottom from '../../components/Common/Nav/NavBottom';
import NavTopBasic from '../../components/Common/Nav/NavTopBasic';
import PostProfile from '../../components/Post/PostProfile';
import ChipsHome from '../../components/Chips/ChipsHome';
import { CommunityButton } from './CommunityStyle';
import { useNavigate } from 'react-router-dom';
import { getPosts } from '../../api/postApi';
import { commentCount } from '../../Recoil/commentCount';
import { useRecoilState } from 'recoil';

export default function Community(props) {
  const [posts, setPosts] = useState([]);
  const [replyCount, setReplyCount] = useRecoilState(commentCount);

  const fetchPosts = () => {
    getPosts()
      .then((data) => {
        console.log(data);
        if (data && Array.isArray(data.posts)) {
          setPosts(data.posts);
          console.log(data.posts);
        } else {
          console.error('에러:', data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(fetchPosts, []);

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/feedWrite');
  };
  const extractTitleFromContent = (content) => {
    const titlePattern = /title: '(.*?)'/;
    const match = content.match(titlePattern);
    return match ? match[1] : null;
  };
  const extractContentFromPost = (postContent) => {
    const contentPattern = /content: (.*?)(\n|$)/;
    const match = postContent.match(contentPattern);
    return match ? match[1] : null;
  };

  return (
    <div style={{ paddingBottom: '70px' }}>
      <NavTopBasic title='커뮤니티' />
      <ChipsHome />
      {/* {posts.map((item) => {
        const date = new Date(item.updatedAt);
        console.log(item.comments.length);
        const dated = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
        return (
          <PostProfile
            key={item._id}
            content={item.content}
            image={item.image}
            updatedAt={dated}
            name={item.author.accountname}
            postId={item._id}
            heartCount={item.heartCount}
            commentLength={item.comments.length}
            hearted={item.__v}
          />
        );
      })} */}
      {posts
        .filter((item) => item.content && extractTitleFromContent(item.content) === 'FitBuddy')
        .map((item) => {
          const date = new Date(item.updatedAt);
          const dated = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
          return (
            <PostProfile
              key={item._id}
              content={item.content && extractContentFromPost(item.content)}
              image={item.image}
              updatedAt={dated}
              name={item.author.accountname}
              postId={item._id}
              heartCount={item.heartCount}
              commentLength={item.comments.length}
              hearted={item.__v}
            />
          );
        })}
      <CommunityButton onClick={handleButtonClick} />
      <NavBottom />
    </div>
  );
}
