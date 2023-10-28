import { BrowserRouter as RouterAlias, Routes, Route } from 'react-router-dom';
import AlertDelete from '../components/Common/Alert/AlertDelete';
import NavBottom from '../components/Common/Nav/NavBottom';
import NavTopBack from '../components/Common/Nav/NavTopBack';
import NavTopBasic from '../components/Common/Nav/NavTopBasic';
import NavTopDetails from '../components/Common/Nav/NavTopDetails';
import PlaceHolder from '../components/Common/Placeholder/PlaceHolder';
import LoginPage from '../pages/login/LoginPage';
import Onboard from '../pages/onBoard/OnBoardingPage';
import Home from '../pages/mainhome/Home';
import Calender from '../pages/calender/Calender';
import Community from '../pages/community/Community';
import Mypage from '../pages/mypage/Mypage';
import JoinPage from '../pages/join/JoinPage';
import ErrorPage from '../pages/ErrorPage';
import CalendarContent from '../components/Calendar/CalendarContent';
import CalendarComponent from '../components/Calendar/CalendarComponent';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import Community_feed from '../pages/community/Community_feed';
import AddGroup from '../pages/mainhome/addGroup/AddGroup';
import GroupDetailPage from '../pages/mainhome/groupDetail/GroupDetailPage';
import Community_Comment from '../pages/community/Community_Comment';
import Splash from '../pages/Splash';

export default function Router() {
  return (
    <RouterAlias>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/onboard' element={<Onboard />} />
        <Route path='/home' element={<Home />} />
        <Route path='/addgroup' element={<AddGroup />} />
        <Route path='/group/:groupId' element={<GroupDetailPage />} />
        <Route path='/calender' element={<Calender />} />
        <Route path='/community' element={<Community />} />
        <Route path='/mypage' element={<Mypage />} />
        <Route path='/error' element={<ErrorPage />} />
        <Route path='/signup' element={<JoinPage />} />
        <Route path='/feedWrite' element={<Community_feed />} />
        <Route path='/feedReply' element={<Community_Comment />} />
      </Routes>
    </RouterAlias>
  );
}
