export const theme = {
  palette: {
    primary: {
      light: '#FFE333',
      main: '#FFDD00',
      dark: '#B29A00'
    },
    secondary: {
      light: '#3f517c',
      main: '#0F265C',
      dark: '#0A1A40'
    },
    default: {
      main: '#EEEEEE'
    },
    gray: {
      100: '#F5F5F5',
      300: '#E0E0E0',
      500: '#9E9E9E',
      700: '#616161',
      900: '#212121'
    }
  },
  spacing: (number) => `${8 * number}px`
}
