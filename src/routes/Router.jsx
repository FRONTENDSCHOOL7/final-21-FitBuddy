import React from 'react';
import { BrowserRouter as RouterAlias, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/login/LoginPage';
import Onboard from '../pages/onBoard/OnBoardingPage';
import Home from '../pages/mainhome/Home';
import Calender from '../pages/calender/Calender';
import Community from '../pages/community/Community';
import Mypage from '../pages/mypage/Mypage';
import JoinPage from '../pages/join/JoinPage';
import ErrorPage from '../pages/ErrorPage';
import CommunityFeed from '../pages/community/CommunityFeed';
import AddGroup from '../pages/mainhome/addGroup/AddGroup';
import GroupDetailPage from '../pages/mainhome/groupDetail/GroupDetailPage';
import CommunityComment from '../pages/community/CommunityComment';
import Splash from '../pages/Splash';
import SplashRun from '../components/SplashRun';
import Mypagemyjoin from '../pages/mypage/Mypagemyjoin';
import Mypagemywrite from '../pages/mypage/Mypagemywrite';
import AuthRoute from './AuthRoute';
import NonAuthRoute from './NonAuthRoute';
import { useRecoilState } from 'recoil';
import userTokenAtom from '../Recoil/userTokenAtom';

const Router = () => {
  // const { userToken } = useContext(AuthContextStore);
  const userToken = useRecoilState(userTokenAtom);
  return (
    <RouterAlias>
      <Routes>
        <Route path='/*' element={<ErrorPage />} />
        <Route path='/run' element={<SplashRun />} />
        <Route path='/' element={<Splash />} />
        <Route path='/login' element={<LoginPage />} />

        <Route element={<NonAuthRoute authenticated={userToken} />}>
          <Route path='/onboard' element={<Onboard />} />
          <Route path='/signup' element={<JoinPage />} />
        </Route>

        <Route element={<AuthRoute authenticated={userToken} />}>
          <Route path='/home' element={<Home />} />
          <Route path='/addgroup' element={<AddGroup />} />
          <Route path='/group/:groupId' element={<GroupDetailPage />} />
          <Route path='/calender' element={<Calender />} />
          <Route path='/community' element={<Community />} />
          <Route path='/mypage' element={<Mypage />} />
          <Route path='/feedWrite' element={<CommunityFeed />} />
          <Route path='/feedReply/:postId' element={<CommunityComment />} />
          <Route path='/mypagejoin' element={<Mypagemyjoin />} />
          <Route path='/mypagewrite' element={<Mypagemywrite />} />
          <Route path='/edit/:postId' element={<CommunityFeed />} />
          <Route path='/editgroup/:postId' element={<AddGroup />} />
        </Route>
      </Routes>
    </RouterAlias>
  );
};

export default Router;
