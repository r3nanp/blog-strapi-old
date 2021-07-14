import Link from 'next/link'
import * as S from './styles'

export type HeaderProps = {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <S.Container>
      <Link href="/">
        <a>{title}</a>
      </Link>
    </S.Container>
  )
}
