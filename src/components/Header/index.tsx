import { ReactNode } from 'react'
import Link from 'next/link'
import * as S from './styles'

export type HeaderProps = {
  title: string
  icon?: ReactNode
}

export function Header({ title, icon }: HeaderProps) {
  return (
    <S.Container>
      {!!icon && <S.Icon>{icon}</S.Icon>}

      <S.Title>{title}</S.Title>
      <S.LeftContent>
        <Link href="/">
          <a>Blog</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </S.LeftContent>
    </S.Container>
  )
}
