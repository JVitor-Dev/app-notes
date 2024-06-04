import React from 'react'
import ReactDOM from 'react-dom/client'
import {Details} from './pages/Details'

import GlobalStyle from './Styles/global'
import { ThemeProvider } from 'styled-components'
import theme from './Styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <Details />
    </ThemeProvider>
  </React.StrictMode>,
)
