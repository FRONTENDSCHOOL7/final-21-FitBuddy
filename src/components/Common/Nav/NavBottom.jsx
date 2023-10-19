import React from 'react';
import styled from 'styled-components';
import './NavBottom.css';
import home from '../../../assets/icons/icon-home.svg';
import calender from '../../../assets/icons/icon-calendar.svg';
import chat from '../../../assets/icons/icon-chat.svg';
import community from '../../../assets/icons/icon-community.svg';
import profile from '../../../assets/icons/icon-my.svg';

const StyledNavIcons = styled.img`
  width: 28px;
  height: 28px;
`;
const Nav = styled.nav`
  overflow: hidden;
  background-color: black;
  color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
`;

const NavDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  float: left;
  width: 20%;
  height: 45px;
  padding-top: 10px;
`;

export default function NavBottom() {
  return (
    <Nav>
      <NavDiv>
        <StyledNavIcons src={home} alt='home icon' />홈
      </NavDiv>
      <NavDiv>
        <StyledNavIcons src={home} alt='home icon' />홈
      </NavDiv>
      <NavDiv>
        <StyledNavIcons src={home} alt='home icon' />홈
      </NavDiv>
      <NavDiv>
        <StyledNavIcons src={home} alt='home icon' />홈
      </NavDiv>
      <NavDiv>
        <StyledNavIcons src={home} alt='home icon' />홈
      </NavDiv>
    </Nav>

    // <nav className='wrapper'>
    //   <div>
    //     <StyledNavIcons src={home} alt='home icon' />홈
    //   </div>
    //   <div>
    //     <StyledNavIcons src={calender} alt='home icon' />
    //     캘린더
    //   </div>
    //   <div>
    //     <StyledNavIcons src={chat} alt='home icon' />
    //     채팅
    //   </div>
    //   <div>
    //     <StyledNavIcons src={community} alt='home icon' />
    //     커뮤니티
    //   </div>
    //   <div>
    //     <StyledNavIcons src={profile} alt='home icon' />
    //     마이페이지
    //   </div>
    // </nav>
  );
}
