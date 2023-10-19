import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import './Fonts/fonts.css';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root{
    /* Primary */
    --color-primary: #a6ff4d;
    --color-secondary: #FFFFFF;

    /* Background Color */
    --color-bg: #141414;

    /* Neutral */
    --color-neutral: #242424;

    /* Error */
    --color-error: #ff5b5b;

    /* Disabled */
    --color-disabled: #d2ffa6;

    /* Gray */
    --color-gray: #8f8f8f;
    --color-lightGray: #848484;
    
    /* font-size */
    --font-size-micro: 10px;
    --font-size-xs: 12px;
    --font-size-sm: 14px;
    --font-size-
  }

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  body {
  font-family: 'Pretendard-Regular', sans-serif;
  background-color: #141414;
  color: #FFFFFF;
  height: 100%;
}
`;

export default GlobalStyle;
