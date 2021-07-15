import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 4rem;
    background: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.primary};
    padding: ${theme.spacings.medium};
    border-bottom: 2px solid ${theme.colors.gray.dark};

    ${media.lessThan('small')`
        height: 2rem;
      `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: 1.4;
    letter-spacing: 0.0875rem;
  `}
`

export const LeftContent = styled.nav`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};

    ${media.lessThan('medium')`
        padding: 0.2rem;
      `}

    a {
      ${media.lessThan('medium')`
        display: none;
      `}

      color: ${theme.colors.primary};
      margin: ${theme.spacings.small};

      transition: all ${theme.transition.default};

      &:hover {
        text-decoration: underline;
      }
    }
  `}
`

export const Icon = styled.div``
