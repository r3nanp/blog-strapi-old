export const theme = {
  font: {
    family:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      small: '1.2rem',
      medium: '1.8rem',
      large: '2rem'
    }
  },
  spacings: {
    small: '1rem',
    medium: '2rem',
    large: '3rem'
  },
  colors: {
    white: '#FAFAFA',
    primary: '#010101',
    secondary: '#005b96',
    gray: {
      light: '#dddddd',
      medium: '#999999',
      dark: '#333333'
    }
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  shadows: {
    magical:
      'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px'
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
}
