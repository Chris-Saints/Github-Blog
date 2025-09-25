import { ThemeProvider } from 'styled-components'
import { Profile } from './Pages/Profile'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {

  return (
      <div>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Profile />
        </ThemeProvider>

      </div>
  )
}