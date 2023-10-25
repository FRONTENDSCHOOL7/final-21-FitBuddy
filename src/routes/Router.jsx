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
import AddGroup from '../pages/addGroup/AddGroup';

export default function Router() {
  return (
    <RouterAlias>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/addgroup' element={<AddGroup />} />
        <Route path='/calender' element={<Calender />} />
        <Route path='/community' element={<Community />} />
        <Route path='/mypage' element={<Mypage />} />
        <Route path='/error' element={<ErrorPage />} />
        <Route path='/signup' element={<JoinPage />} />
      </Routes>
    </RouterAlias>
  );
}
