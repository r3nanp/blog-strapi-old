import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.main`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;

    max-width: 45rem;
    margin: 0 auto;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.medium};
    text-align: center;

    ${media.lessThan('medium')`
      width: 100%;
    `}
  `}
`

export const LatestPost = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-bottom: ${theme.spacings.medium};
    border-bottom: 1px solid ${theme.colors.primary};
    padding: ${theme.spacings.medium};
  `}
`

export const Grid = styled.section`
  ${({ theme }) => css`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacings.medium};
    margin-top: ${theme.spacings.small};

    ${media.lessThan('medium')`
      grid-template-columns: 1fr;
    `}
  `}
`
