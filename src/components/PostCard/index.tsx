import Image from 'next/image'
import Link from 'next/link'
import { Heading } from '@components/Heading'

import * as S from './styles'

interface PostCardProps {
  cover: string
  url: string
  title: string
}

export function PostCard({ cover, url, title }: PostCardProps) {
  return (
    <S.Container>
      <Link href={url}>
        <a>
          <Image src={cover} alt={title} width={500} height={500} />
        </a>
      </Link>

      <Heading size="large" color="black">
        {title}
      </Heading>
    </S.Container>
  )
}
