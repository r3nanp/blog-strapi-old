import styled, { css } from 'styled-components'

export const Container = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 4rem;
    background: ${theme.colors.primary};
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.white};
    padding: ${theme.spacings.medium};

    a {
      color: ${theme.colors.white};
    }
  `}
`
