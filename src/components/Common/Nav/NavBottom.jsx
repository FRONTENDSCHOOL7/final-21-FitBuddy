import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import home from '../../../assets/icons/icon-home.svg';
import calender from '../../../assets/icons/icon-calendar.svg';
import community from '../../../assets/icons/icon-community.svg';
import profile from '../../../assets/icons/icon-my.svg';
import home_fill from '../../../assets/icons/icon-home-fill.svg';
import calender_fill from '../../../assets/icons/icon-calendar-fill.svg';
import community_fill from '../../../assets/icons/icon-community-fill.svg';
import profile_fill from '../../../assets/icons/icon-my-fill.svg';
import { Nav, NavDiv, StyledNavIcons, NavText } from './NavStyles';

export default function NavBottom() {
  const navigate = useNavigate();
  const location = useLocation();

  const getInitialTab = () => {
    switch (location.pathname) {
      case '/Home':
        return 0;
      case '/calender':
        return 1;
      case '/community':
        return 2;
      case '/mypage':
        return 3;
      default:
        return 0;
    }
  };

  const [activeTab, setActiveTab] = useState(getInitialTab());

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    switch (tabIndex) {
      case 0:
        navigate('/Home');
        break;
      case 1:
        navigate('/calender');
        break;
      case 2:
        navigate('/community');
        break;
      case 3:
        navigate('/mypage');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setActiveTab(getInitialTab());
  }, [location.pathname]);

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
        <NavText isActive={activeTab === 3}>마이페이지</NavText>
      </NavDiv>
    </Nav>
  );
}
