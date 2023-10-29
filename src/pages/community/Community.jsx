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
        console.log(item.content);

        return <PostProfile key={item._id} content={item.content} image={item.image} />;
      })}
      <CommunityButton onClick={handleButtonClick} />
      <NavBottom />
    </>
  );
}
