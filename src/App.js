
import NavBottom from './components/Common/Nav/NavBottom';
import NavTopBack from './components/Common/Nav/NavTopBack';
import NavTopBasic from './components/Common/Nav/NavTopBasic';
import NavTopDetails from './components/Common/Nav/NavTopDetails';
import PlaceHolder from './components/Common/Placeholder/PlaceHolder';
    
import LoginPage from './pages/LoginPage';
function App() {
  return (
    <>
      {/* <NavTopDetails /> */}
      {/* <NavTopBack /> */}
      {/* <NavTopBasic /> */}
      <LoginPage />
      {/* <NavBottom /> */}
  <PlaceHolder type='Ractangle' />
      <PlaceHolder type='Ractangle2' />
      <PlaceHolder type='Photo' />
      <PlaceHolder type='' />
    </>
  );
}
export default App;
