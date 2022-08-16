import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { GithubContextProvider } from "./contexts/GithubContext"
import { Home } from "./pages/Home"
import { Router } from "./Router"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"



function App() {

  return (
    <ThemeProvider theme={defaultTheme}>

      <BrowserRouter>
        <GithubContextProvider>
          <Header />
          <Router />
        </GithubContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
