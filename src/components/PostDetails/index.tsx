import * as S from './styles'

type PostDetailsProps = {
  author: string
  category: string
  date: string
}

export function PostDetails({ author, category, date }: PostDetailsProps) {
  return (
    <S.Container>
      Publicado em: {date} por {author} | {category}
    </S.Container>
  )
}
