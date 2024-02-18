import { defaultTheme } from "./styles/theme/default"
import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from "./styles/global"
import { Router } from "./Router"
import { Helmet, HelmetProvider } from "react-helmet-async"

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <GlobalStyle />
      <HelmetProvider>
        <Helmet titleTemplate="%s | Luisa Simões" />
        <Router />
      </HelmetProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
