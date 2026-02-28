import { ThemeProvider } from 'styled-components'
import { Profile } from './Pages/Profile'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Project } from './Pages/Project'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Profile />
  },
  {
    path: "/post/:issueNumber",
    element: <Project />
  }
])



export function App() {

  return (

    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>

  )
}