import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  body {
    background: #FAFAFA;
  };

  html  {
    font-weight: 400;
    font-size: 10px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    scroll-behavior: smooth;
  };
`
