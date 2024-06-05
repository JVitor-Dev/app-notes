import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './Styles/global'

import { ThemeProvider } from 'styled-components'
import theme from './Styles/theme'

import {Profile} from './pages/Profile'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Profile />
    </ThemeProvider>
  </React.StrictMode>,
)
