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

  button {
    cursor: pointer;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    html,
    body {
      background: ${theme.colors.white};
      font-weight: ${theme.font.normal};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
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
