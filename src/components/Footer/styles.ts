import styled, { css } from 'styled-components'

export const Container = styled.footer`
  ${({ theme }) => css`
    display: grid;
    place-items: center;

    width: 100%;
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};

    background: ${theme.colors.gray.dark};

    a {
      color: ${theme.colors.white};
    }
  `}
`
