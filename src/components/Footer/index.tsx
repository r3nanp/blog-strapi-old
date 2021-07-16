import Link from 'next/link'
import * as S from './styles'

export function Footer() {
  return (
    <S.Container>
      <Link href="/">
        <a>Blog</a>
      </Link>
    </S.Container>
  )
}
