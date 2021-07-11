import styled, { css } from 'styled-components'
import { HeadingProps } from '.'

export const Container = styled.h2<HeadingProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color]};
    size: ${theme.font.sizes[size]};
  `}
`
