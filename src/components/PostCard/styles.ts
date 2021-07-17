import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;

    .title {
      color: ${theme.colors.gray.dark};
    }
  `}
`

export const Cover = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};

    img {
      width: 100%;
      display: block;
      height: 10rem;
      object-fit: contain;
    }
  `}
`
