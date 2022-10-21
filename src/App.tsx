import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { BlogContextProvider } from './contexts/blogContexts'
import { Router } from './Router'
import { GlobalStyle } from './styles/globals'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BlogContextProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </BlogContextProvider>
    </ThemeProvider>
  )
}
