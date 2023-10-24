import React, { useState } from 'react';
import home from '../../../assets/icons/icon-home.svg';
import calender from '../../../assets/icons/icon-calendar.svg';
import community from '../../../assets/icons/icon-community.svg';
import profile from '../../../assets/icons/icon-my.svg';
import home_fill from '../../../assets/icons/icon-home-fill.svg';
import calender_fill from '../../../assets/icons/icon-calendar-fill.svg';
import community_fill from '../../../assets/icons/icon-community-fill.svg';
import profile_fill from '../../../assets/icons/icon-my-fill.svg';
import { useNavigate } from 'react-router-dom';
import { Nav, NavDiv, StyledNavIcons, NavText } from './NavStyles';

export default function NavBottom() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    switch (tabIndex) {
      case 0:
        goHome();
        break;
      case 1:
        goCalendar();
        break;
      case 2:
        goCommunity();
        break;
      case 3:
        goMypage();
        break;
      default:
        break;
    }
  };

  const goHome = () => {
    navigate('/Home');
  };
  const goCalendar = () => {
    navigate('/calender');
  };
  const goCommunity = () => {
    navigate('/community');
  };
  const goMypage = () => {
    navigate('/mypage');
  };

  return (
    <Nav>
      <NavDiv onClick={() => handleTabClick(0)}>
        <StyledNavIcons src={activeTab === 0 ? home_fill : home} alt='home icon' />
        <NavText isActive={activeTab === 0}>홈</NavText>
      </NavDiv>
      <NavDiv onClick={() => handleTabClick(1)}>
        <StyledNavIcons src={activeTab === 1 ? calender_fill : calender} alt='calender icon' />
        <NavText isActive={activeTab === 1}>캘린더</NavText>
      </NavDiv>
      <NavDiv onClick={() => handleTabClick(2)}>
        <StyledNavIcons src={activeTab === 2 ? community_fill : community} alt='community icon' />
        <NavText isActive={activeTab === 2}>커뮤니티</NavText>
      </NavDiv>
      <NavDiv onClick={() => handleTabClick(3)}>
        <StyledNavIcons src={activeTab === 3 ? profile_fill : profile} alt='profile icon' />
        <NavText isActive={activeTab === 3}>홈</NavText>
      </NavDiv>
    </Nav>
  );
}
