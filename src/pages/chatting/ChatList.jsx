import React from 'react';
import NavTopBasic from '../../components/Common/Nav/NavTopBasic';
import NavBottom from '../../components/Common/Nav/NavBottom';
import { CommunityHome } from '../community/StyledCommunity';
import CommentList from '../../components/Common/Comment/CommentList';
export default function ChatList() {
  return (
    <CommunityHome>
      <NavTopBasic title='채팅' />

      <NavBottom />
    </CommunityHome>
  );
}
