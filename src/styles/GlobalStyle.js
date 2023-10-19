import { createGlobalStyle } from 'styled-components';
import './Fonts/fonts.css';

const GlobalStyle = createGlobalStyle`

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
    
    /* Font-size */
    --font-size-micro: 10px;
    --font-size-xs: 12px;
    --font-size-sm:  14px;
    --font-size-md:  16px;
    --font-size-lg: 18px;
    --font-size-xl: 20px;
    --font-size-xxl:  24px;
    --font-size-title: 32px;

    /* Button/Link */
    --font-size-btn: 16px;

    /* Font-weight */
    --font-weight-regular: normal; 
    --font-weight-medium: normal; 
    --font-weight-semibold: 600; 
    --font-weight-bold: bold; 
  }

*{
  box-sizing: border-box;
}
  body {
  margin: auto;
  font-family: 'Pretendard-Regular', sans-serif;
  background-color: var(--color-bg);
  color: var(--color-secondary);
  height: 100%;
  overflow-y: scroll;
}

  a {
    color: inherit;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  p,
  input,
  button,
  fieldset,
  input,
  ul,
  figure {
    margin: 0;
    padding: 0;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
  input,button,textarea {
    border: none;
    outline: none;
    font: inherit;
    padding: 0;
    margin: 0;
    appearance: none;
  }
  a,button{
    cursor: pointer;
    font: inherit;
    color: inherit;
  } 
`;

export default GlobalStyle;
