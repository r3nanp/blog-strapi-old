import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray.medium};
    font-size: ${theme.font.sizes.xsmall};
    margin: ${theme.spacings.medium} 0;
    font-style: italic;
  `}
`
