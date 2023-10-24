import AlertDelete from './components/Common/Alert/AlertDelete';
import NavBottom from './components/Common/Nav/NavBottom';
import NavTopBack from './components/Common/Nav/NavTopBack';
import NavTopBasic from './components/Common/Nav/NavTopBasic';
import NavTopDetails from './components/Common/Nav/NavTopDetails';
import PlaceHolder from './components/Common/Placeholder/PlaceHolder';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Onboard from './pages/onBoard/OnBoardingPage';
import Home from './pages/mainhome/Home';
import Calender from './pages/calender/Calender';
import Community from './pages/community/Community';
import Mypage from './pages/mypage/Mypage';
import JoinPage from './pages/join/JoinPage';
import ErrorPage from './pages/ErrorPage';
import PostCommunity from './components/Post/PostCommunity';
import PostProfile from './components/Post/PostProfile';
function App() {
  return (
    <>
      <PostCommunity />
      <PostProfile />
    </>
  );
}
export default App;
