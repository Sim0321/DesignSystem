import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// import BMJua from "../fonts/BMJUA_ttf.ttf";
/* @font-face {
    font-family: "BMJua";
    src: url(${BMJua}) format('truetype') ; 
} */

const GlobalStyle = createGlobalStyle`
  ${reset}

  html{
    font-size: 62.5%;
    
  }
  *{
    box-sizing: border-box;
  }

  

  @font-face {
    font-family: 'TheJamsil1Thin';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil1Thin.woff2') format('woff2');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'TheJamsil2Light';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil2Light.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
  }
            
  @font-face {
    font-family: 'TheJamsil3Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil3Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}
            
  @font-face {
    font-family: 'TheJamsil4Medium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil4Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
  } 
            
  @font-face {
    font-family: 'TheJamsil5Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'BMJUA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body{
    font-family: JamsilBold, BMJUA,sans-serif;
  }
  
`;

export default GlobalStyle;
