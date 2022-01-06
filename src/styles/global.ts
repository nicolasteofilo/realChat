import { createGlobalStyle } from "styled-components";

// create a createGlobalStyle

const GlobalStyle = createGlobalStyle`
    :root {
        --slack-color: #3f0f40;
        --input-color: #421f44;
        --white-color: #FFF;
        --gray: '#808080';
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button {
        color: red;
    }

    body { 
        overflow: hidden;
        font-family: 'Roboto', 'Ubuntu' sans-serif;
    }
`;

export { GlobalStyle };
