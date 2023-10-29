import React, { useEffect, useState } from 'react';
import NavBottom from '../../components/Common/Nav/NavBottom';
import NavTopBasic from '../../components/Common/Nav/NavTopBasic';
import PostProfile from '../../components/Post/PostProfile';
// import ButtonFloating from '../../components/Common/Buttons/ButtonFloating';
import ChipsHome from '../../components/Chips/ChipsHome';
import { CommunityButton } from './CommunityStyle';
import { useNavigate } from 'react-router-dom';
import { getPosts } from '../../api/postApi';

export default function Community() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    getPosts()
      .then((data) => {
        if (data && Array.isArray(data.posts)) {
          setPosts(data.posts);
          console.log(data.posts);
        } else {
          console.error('예상되지 않은 데이터 형식:', data);
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
  return (
    <div style={{ paddingBottom: '70px' }}>
      <NavTopBasic title='커뮤니티' />
      <ChipsHome />
      {posts.map((item) => {
        console.log(item.updatedAt);
        return (
          <PostProfile
            key={item._id}
            content={item.content}
            image={item.image}
            updatedAt={item.updatedAt}
          />
        );
      })}
      <CommunityButton onClick={handleButtonClick} />
      <NavBottom />
    </div>
  );
}
