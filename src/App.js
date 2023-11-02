import GlobalStyle from './styles/GlobalStyle';
import Router from './routes/Router';
import styled from 'styled-components';

function App() {
  return (
    <>
      <GlobalStyle />
      <MainFrame>
        <Router />
      </MainFrame>
    </>
  );
}
export default App;

const MainFrame = styled.div`
  max-width: 414px;
  margin: 0 auto;
`;
