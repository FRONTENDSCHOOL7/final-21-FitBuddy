import React, { useEffect, useState } from 'react';
import NavBottom from '../../components/Common/Nav/NavBottom';
import NavTopBasic from '../../components/Common/Nav/NavTopBasic';
import PostProfile from '../../components/Post/PostProfile';
// import ButtonFloating from '../../components/Common/Buttons/ButtonFloating';
import ChipsHome from '../../components/Chips/ChipsHome';
import { CommunityButton } from './CommunityStyle';
import { useNavigate } from 'react-router-dom';
import AlertDelete from '../../components/Common/Alert/AlertDelete';
import { getPosts } from '../../api/postApi';

export default function Community() {
  const [posts, setFosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((data) => {
        setFosts(data.posts);
        console.log(data.posts);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/feedWrite');
  };
  return (
    <>
      <NavTopBasic title='커뮤니티' />
      <ChipsHome />
      {posts.map((item) => {
        let content = item.content;
        let data = content.split('\n');
        const result = {};

        for (let i = 1; i < data.length - 1; i++) {
          const line = data[i].trim();
          const [key, value] = line.split(':');
          result[key.trim()] = value.trim();
        }
        console.log(result);

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
    </>
  );
}
