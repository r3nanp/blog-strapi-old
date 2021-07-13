import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    max-width: 96rem;
    margin: 0 auto;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.medium};
  `}
`

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  ${({ theme }) => css`
    gap: ${theme.spacings.medium};
    margin-top: ${theme.spacings.small};
  `}
`
