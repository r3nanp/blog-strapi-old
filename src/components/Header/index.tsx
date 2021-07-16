import { ReactNode } from 'react'
import Router from 'next/router'
import Link from 'next/link'

import * as S from './styles'

export type HeaderProps = {
  icon?: ReactNode
}

export function Header({ icon }: HeaderProps) {
  const handleGoBack = () => Router.back()

  return (
    <S.Container>
      <S.LeftContent>
        {icon ? (
          <S.Icon onClick={handleGoBack}>{icon}</S.Icon>
        ) : (
          <S.Title>Blog</S.Title>
        )}
      </S.LeftContent>

      <S.RightContent>
        <Link href="/">
          <a>Blog</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </S.RightContent>
    </S.Container>
  )
}
