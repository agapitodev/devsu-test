import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import { AppRouter } from './routes'
import { theme } from './theme'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
    </StyleSheetManager>
  </React.StrictMode>
)
