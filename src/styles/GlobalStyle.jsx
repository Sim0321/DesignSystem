import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html{
    font-size: 62.5%;
  }
  *{
    box-sizing: border-box;
  }

  @font-face {
  font-family: "jua";
  src: url(../fonts/BMJUA_ttf.ttf);
}

@font-face {
  font-family: "Roboto Bold";
  src: url(../fonts/Roboto-Bold.ttf);
}

@font-face {
  font-family: "Roboto Medium";
  src: url(../fonts/Roboto-Bold.ttf);
}
@font-face {
  font-family: "Roboto Regular";
  src: url(../fonts/Roboto-Bold.ttf);
}

@font-face {
  font-family: "Roboto Light";
  src: url(../fonts/Roboto-Bold.ttf);
}

  body{
   

  }
`;

export default GlobalStyle;
