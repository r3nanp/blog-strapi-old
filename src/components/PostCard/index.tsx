import Image from 'next/image'
import Link from 'next/link'
import { Heading } from 'components/Heading'

import * as S from './styles'

export type PostCardProps = {
  cover: string
  url: string
  title: string
}

export function PostCard({ cover, url, title }: PostCardProps) {
  return (
    <S.Container>
      <S.Cover>
        <Link href={url}>
          <a>
            <Image src={cover} alt={title} width={500} height={500} />
          </a>
        </Link>
      </S.Cover>

      <Heading color="black">
        <Link href={url}>
          <a className="title">{title}</a>
        </Link>
      </Heading>
    </S.Container>
  )
}
