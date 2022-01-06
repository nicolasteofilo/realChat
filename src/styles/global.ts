import { createGlobalStyle } from "styled-components";

// create a createGlobalStyle

const GlobalStyle = createGlobalStyle`
    :root {
        --slack-color: #3f0f40;
        --input-color: #421f44;
        --white-color: #FFF;
        --gray: '#808080';
        --backgroud: '#181a1b';
        --border-sidebar: '#49274b';
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", "Ubuntu" sans-serif;

    }

    html { 
    @media ( max-width: 1080px ) {
      font-size: 93.75%; // 15px
    }
    @media ( max-width: 720px ) {
      font-size: 87.5%; // 14px
    }
    font-family: "Poppins", "Ubuntu" sans-serif;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  
  h1, h2, g3, h4, h5, h6, strong {
    font-weight: 600;
  }

    body {
        overflow: hidden;
        margin: 0;
        padding: 0;
        background: #181a1b;
        font-family: Poppins, Helvetica, Sans-Serif;
  }

  button {
    cursor: pointer;
  }
  [disable] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export { GlobalStyle };
