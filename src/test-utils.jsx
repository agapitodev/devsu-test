import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'

const AlltheProviders = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

AlltheProviders.propTypes = {
  children: PropTypes.node
}

const AlltheProvidersAndRouter = ({ children }) => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>{children}</BrowserRouter>
  </ThemeProvider>
)

AlltheProvidersAndRouter.propTypes = {
  children: PropTypes.node
}

export const renderWithProviders = (component, options) => {
  return render(component, { wrapper: AlltheProviders, ...options })
}

export const renderWithProvidersandRouter = (component, options) => {
  return render(component, { wrapper: AlltheProvidersAndRouter, ...options })
}

export * from '@testing-library/react'
