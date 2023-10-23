import AlertDelete from './components/Common/Alert/AlertDelete';
import NavBottom from './components/Common/Nav/NavBottom';
import NavTopBack from './components/Common/Nav/NavTopBack';
import NavTopBasic from './components/Common/Nav/NavTopBasic';
import NavTopDetails from './components/Common/Nav/NavTopDetails';
import PlaceHolder from './components/Common/Placeholder/PlaceHolder';
import LoginPage from './pages/LoginPage';
import Onboard from './pages/onBoard/OnBoardingPage';
import Home from './pages/mainhome/Home';
import Calender from './pages/calender/Calender';
import Community from './pages/community/Community';
import Mypage from './pages/mypage/Mypage';
import JoinPage from './pages/join/JoinPage';
import ErrorPage from './pages/ErrorPage';
import CalendarContent from './components/Calendar/CalendarContent';
import CalendarComponent from './components/Calendar/CalendarComponent';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
function App() {
  return (
    <>
      <CalendarContent emoji='💪' title='헬스 배우고 싶은 분' time='오후:6:00 ~ 오후 7:00' />
      <CalendarComponent />
    </>
  );
}
export default App;
