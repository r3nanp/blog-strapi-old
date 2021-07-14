import '../.jest/next-image.mock.js'

import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import { ThemeProvider } from 'styled-components'

import { theme } from '../src/styles/theme'
import { GlobalStyles } from '../src/styles/global'

export const parameters = {
  backgrounds: {
    default: 'blog-light',
    values: [
      {
        name: 'blog-light',
        value: theme.colors.white
      },
      {
        name: 'blog-dark',
        value: theme.colors.black
      }
    ] // Add background options
  }
}

addDecorator(withNextRouter())

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  )
]
