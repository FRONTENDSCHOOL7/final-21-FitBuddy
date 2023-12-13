import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ProfileCardWrapper,
  FollowWrapper,
  Follow,
  ButtonWrapper,
  UserInfo,
} from './styledProfileCard';
import PlaceHolder from '../../components/Common/Placeholder/PlaceHolder';
import ButtonM from '../Common/Buttons/ButtonM';
import ButtonIcon from '../Common/Buttons/ButtonIcon';
import chat from '../../assets/icons/icon-message-circle.svg';
import share from '../../assets/icons/icon-share.svg';
import userTokenAtom from '../../Recoil/userTokenAtom';
import { useRecoilState } from 'recoil';

const ProfileCard = () => {
  const { accountname } = useParams();
  const [userToken] = useRecoilState(userTokenAtom);

  return (
    <ProfileCardWrapper>
      <FollowWrapper>
        <Follow>
          <p>2950</p>
          <p>followers</p>
        </Follow>
        <PlaceHolder type='ProfileImage' />
        <Follow>
          <p>128</p>
          <p>followings</p>
        </Follow>
      </FollowWrapper>
      <UserInfo>
        <p>핏버디</p>
        <p>@{accountname}</p>
        <p>자기소개어쩌구</p>
      </UserInfo>
      <ButtonWrapper>
        <ButtonIcon icon={chat} />
        <ButtonM />
        <ButtonIcon icon={share} />
      </ButtonWrapper>
    </ProfileCardWrapper>
  );
};

export default ProfileCard;
