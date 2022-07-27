import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    max-height: 100vh;
    height: 100%;
    background: #e0e9f9;
    -webkit-font-smoothing: antialiased !important;
  }
  
  *, button, input {
    border: 0;
    outline: 0;
    font-family: sans-serif
  }
`;
