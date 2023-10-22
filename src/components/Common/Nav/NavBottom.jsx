import React, { useState } from 'react';
import home from '../../../assets/icons/icon-home.svg';
import calender from '../../../assets/icons/icon-calendar.svg';
import community from '../../../assets/icons/icon-community.svg';
import profile from '../../../assets/icons/icon-my.svg';
import home_fill from '../../../assets/icons/icon-home-fill.svg';
import calender_fill from '../../../assets/icons/icon-calendar-fill.svg';
import community_fill from '../../../assets/icons/icon-community-fill.svg';
import profile_fill from '../../../assets/icons/icon-my-fill.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Nav, NavDiv, StyledNavIcons, NavText } from './NavStyles';

export default function NavBottom() {
  const [activeTab, setActiveTab] = useState('home');

  const handleClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <Nav>
      <BrowserRouter>
        <NavDiv onClick={() => handleClick('home')}>
          <StyledNavIcons src={activeTab === 'home' ? home_fill : home} alt='home icon' />
          <NavText isActive={activeTab === 'home'}>홈</NavText>
        </NavDiv>
        <NavDiv onClick={() => handleClick('calender')}>
          <StyledNavIcons
            src={activeTab === 'calender' ? calender_fill : calender}
            alt='calender icon'
          />
          <NavText isActive={activeTab === 'calender'}>캘린더</NavText>
        </NavDiv>
        <NavDiv onClick={() => handleClick('community')}>
          <StyledNavIcons
            src={activeTab === 'community' ? community_fill : community}
            alt='community icon'
          />
          <NavText isActive={activeTab === 'community'}>커뮤니티</NavText>
        </NavDiv>
        <NavDiv onClick={() => handleClick('profile')}>
          <StyledNavIcons
            src={activeTab === 'profile' ? profile_fill : profile}
            alt='profile icon'
          />
          <NavText isActive={activeTab === 'profile'}>마이페이지</NavText>
        </NavDiv>
      </BrowserRouter>
    </Nav>
  );
}
