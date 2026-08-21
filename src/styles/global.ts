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

  ::-webkit-scrollbar {
    width: 8px;
  };

  ::-webkit-scrollbar-track {
    background: #D0C5BF;
  };

  ::-webkit-scrollbar-thumb {
    background: #C39C73;
    border-radius: 4px;
  };

  ::-webkit-scrollbar-thumb:hover {
    background: #9D6F31;
  };

  html  {
    font-weight: 400;
    font-size: 10px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    scroll-behavior: smooth;
  };
`
