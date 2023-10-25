//styled components
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globalStyle'
import { defaultTheme } from './styles/DefaultTheme'

//react router dom
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ProjectsProvider } from './Contexts/ProjectContext'

function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <ProjectsProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ProjectsProvider>
      </ThemeProvider>
    </div>
    
  )
}

export default App
