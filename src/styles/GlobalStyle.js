import { createGlobalStyle } from 'styled-components';
import './Fonts/fonts.css';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  body {
  font-family: 'Pretendard-Regular', sans-serif;
  background-color: #242424;
  color: #FFFFFF;
  height: 100%;
}
`;

export default GlobalStyle;
