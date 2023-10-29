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
        let content = item.content;
        let data = content ? content.split('\n') : [];
        const result = {};

        for (let i = 1; i < data.length - 1; i++) {
          const line = data[i].trim();
          const [key, value] = line.split(':');
          if (key && value) {
            result[key.trim()] = value.trim();
          }
        }

        return (
          <PostProfile
            key={item._id}
            content={result.content}
            createAt={result.createAt}
            name={result.accountname}
            image={result.image}
          />
        );

      })}
      <CommunityButton onClick={handleButtonClick} />
      <NavBottom />
    </div>
  );
}
