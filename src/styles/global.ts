import {
  createGlobalStyle,
  DefaultTheme,
  css,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}

export const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input, button {
    border: none;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }

  html {
    font-size: 62.5%;
  }

  ${({ theme }) => css`
    html,
    body {
      background: ${theme.colors.white};
      font-weight: ${theme.font.normal};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.small};
    }
    a {
      text-decoration: none;
      color: ${theme.colors.secondary};
      transition: opacity ${theme.transition.default};

      &:hover {
        opacity: 0.7;
      }
    }
  `}
`
