import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './Styles/global'

import { ThemeProvider } from 'styled-components'
import theme from './Styles/theme'

import {Home} from './pages/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
