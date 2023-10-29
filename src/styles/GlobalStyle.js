import { createGlobalStyle } from 'styled-components';
import './Fonts/fonts.css';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  
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
  body {
    display: flex;
    justify-content: center;
    font-family: 'Pretendard-Regular', sans-serif;
    background-color: var(--color-bg);
    color: var(--color-secondary);
  }
  
  *{
  box-sizing: border-box;
  }
  #root{
    height: 100vh;
    margin: 0 100px;
  }


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
button {
    cursor: pointer;
}
`;

export default GlobalStyle;
