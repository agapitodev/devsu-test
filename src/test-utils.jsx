import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import PropTypes from 'prop-types'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'

const AlltheProviders = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

AlltheProviders.propTypes = {
  children: PropTypes.node
}

export const renderWithProviders = (component, options) => {
  return render(component, { wrapper: AlltheProviders, ...options })
}

export const renderWithRouter = (component, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)

  return {
    user: userEvent.setup(),
    ...render(<AlltheProviders>{component}</AlltheProviders>, {
      wrapper: BrowserRouter
    })
  }
}

export * from '@testing-library/react'
