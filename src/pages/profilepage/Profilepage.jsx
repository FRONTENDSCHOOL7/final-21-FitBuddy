import React, { useEffect, useState } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import NavTopBasic from '../../components/Common/Nav/NavTopBasic';
import NavBottom from '../../components/Common/Nav/NavBottom';
import {
  AccountName,
  Interests,
  Introduction,
  MypageHeader,
  MypageWrapper,
  NameInput,
  Posts,
  ProfileImage,
  ProfileImages,
  ProfileIntro,
  SaveButton,
  StyledInputFile,
  StyledTextarea,
  TitleWithEdit,
} from '../mypage/StyledMypage';
import ProfileCard from '../../components/UserProfile/ProfileCard';
import { ProfilePageWrapper } from './styledProfilepage';
import PostProfile from '../../components/Post/PostProfile';
import { getMyProducts } from '../../api/productApi.jsx';
import { useRecoilState } from 'recoil';
import userTokenAtom from '../../Recoil/userTokenAtom';
import { getMyInfo } from '../../api/mypageapi';
import { getUserPosts } from '../../api/postApi';
import CarouselMap from '../../components/Carousel/CarouselMap';

export default function Profilepage() {
  const [myProduct, setMyProduct] = useState([]);
  const [myPost, setMyPost] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [accountname, setAccountname] = useState('');
  const [userToken, setUserToken] = useRecoilState(userTokenAtom);

  useEffect(() => {
    //토큰 정보와 내 정보가 일치할 경우
    if (userToken.accountname) {
      setAccountname(userToken.accountname);
      const fetchData = async () => {
        try {
          // getDetailPost 함수를 호출하여 게시물 정보 가져오기
          const info = await getMyInfo();
          const data = await getMyProducts(accountname);
          const post = await getUserPosts(accountname);
          setUserInfo(info.user);
          setMyProduct(data);
          setMyPost(post.post);
        } catch (error) {
          console.error('Error fetching group data:', error);
        }
      };

      fetchData();
    } //토큰 정보와 다를 경우
    else {
    }
  }, [userToken]);

  return (
    <>
      <NavTopBasic title='마이페이지' />
      <ProfilePageWrapper>
        <ProfileCard userInfo={userInfo} />
        <p>나의 핏버디 모집</p>
        <CarouselMap myProduct={myProduct} />
        <p>나의 작성글</p>
        {myPost.length > 0 &&
          myPost.map((item) => {
            console.log('item', item);
            return (
              <PostProfile
                key={item.id}
                content={item.content}
                image={item.image}
                updatedAt={item.updatedAt}
                accountname={item.author.accountname}
                username={item.author.username}
                postId={item.id}
                heartCount={item.heartCount}
                commentLength={item.comments.length}
                hearted={item.hearted}
                authorId={item.author._id}
                authorImage={item.author.image}
              />
            );
          })}
      </ProfilePageWrapper>
      <NavBottom />
    </>
  );
}
