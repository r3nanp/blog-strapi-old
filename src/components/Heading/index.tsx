import { ReactElement, ReactNode } from 'react'

import * as S from './styles'

export type HeadingProps = {
  children: ReactNode
  color?: 'white' | 'black'
  size?: 'small' | 'medium' | 'huge'
}

export function Heading({
  children,
  color = 'white',
  size = 'medium'
}: HeadingProps): ReactElement {
  return (
    <S.Container color={color} size={size}>
      {children}
    </S.Container>
  )
}
