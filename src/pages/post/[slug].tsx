import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { api } from 'services/api'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

import { formatDate } from 'utils/format-date'
import type { PostData } from 'domain/posts'

import { FaArrowLeft } from 'react-icons/fa'
import * as S from 'styles/pages/post'

type PostProps = {
  post: PostData
}

export default function Post({ post }: PostProps) {
  const { title, content, cover, createdAt } = post

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Header icon={<FaArrowLeft />} />

      <S.Container>
        <S.ImageWrapper>
          <Image src={cover.url} alt={title} width={400} height={400} />
        </S.ImageWrapper>

        <div dangerouslySetInnerHTML={{ __html: content }} />

        <p>Post criado em: {createdAt}</p>
      </S.Container>

      <Footer />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get<PostData[]>('/posts')

  const paths = data.map(post => {
    return {
      params: {
        slug: String(post.id)
      }
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params

  const { data } = await api.get(`/posts/${slug}`)

  const post = {
    id: data.id,
    title: data.title,
    content: data.content,
    author: data.author,
    cover: data.cover,
    createdAt: formatDate(data.created_at)
  }

  return {
    props: {
      post
    },
    revalidate: 60 * 60 * 24 * 3
  }
}
