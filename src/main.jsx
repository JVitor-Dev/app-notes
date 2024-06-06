import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './Styles/global'

import { ThemeProvider } from 'styled-components'
import theme from './Styles/theme'

import {New} from './pages/New'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <New />
    </ThemeProvider>
  </React.StrictMode>,
)
