import styled, { css } from 'styled-components'

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;

    width: 100%;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray.medium};
  `}
`
