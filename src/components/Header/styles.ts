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
        height: 3rem;
        padding: 1.2rem;
      `}
  `}
`

export const LeftContent = styled.div`
  display: flex;
  justify-content: start;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: 1.4;
    letter-spacing: 0.0875rem;
  `}
`

export const RightContent = styled.nav`
  ${({ theme }) => css`
    display: flex;
    justify-content: end;

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

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.gray.dark};
    order: 1;
    cursor: pointer;

    & > svg {
      width: 2.2rem;
      height: 100%;
      transition: opacity ${theme.transition.default};

      &:hover {
        opacity: 0.7;
      }
    }
  `}
`
