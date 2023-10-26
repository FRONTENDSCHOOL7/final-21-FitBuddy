import React from 'react';
import NavBottom from '../../components/Common/Nav/NavBottom';
import NavTopBasic from '../../components/Common/Nav/NavTopBasic';
import PostProfile from '../../components/Post/PostProfile';
// import ButtonFloating from '../../components/Common/Buttons/ButtonFloating';
import ChipsHome from '../../components/Chips/ChipsHome';
import { CommunityButton } from './CommunityStyle';
import { useNavigate } from 'react-router-dom';
import AlertDelete from '../../components/Common/Alert/AlertDelete';

export default function Community() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/feedWrite');
  };
  return (
    <>
      <NavTopBasic title='커뮤니티' />
      <ChipsHome />
      <PostProfile />
      <CommunityButton onClick={handleButtonClick} />
      <NavBottom />
    </>
  );
}
