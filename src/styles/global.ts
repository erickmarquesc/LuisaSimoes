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

  @media (prefers-color-scheme: dark) {
    body {
      background-color: #2C2C2C;
    }
  }

  html  {
    font-weight: 400;
    font-size: 10px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    scroll-behavior: smooth;
  };
`
/* Fundo escuro: #1A1A1A
Texto claro: #FFFFFF
Texto cinza escuro: #868686
Links ou destaques: #007AFF(azul típico da Apple)
Sombra ou contorno: #2C2C2C */