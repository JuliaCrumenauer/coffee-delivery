import { BrowserRouter } from 'react-router-dom'
import { Router } from './components/Router'
import { GlobalStyle } from './styles/global'
import { DefaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <Router />

        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
