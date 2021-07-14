import Head from 'next/head'
import { GetStaticProps } from 'next'
import { api } from 'services/api'
import { Header } from 'components/Header'
import { PostCard } from 'components/PostCard'

import type { PostData } from 'domain/posts'
import * as S from 'styles/home'

type HomeProps = {
  posts: PostData[]
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>

      <Header title="Blog" />

      <S.Container>
        <S.Grid>
          {posts.map(post => {
            return (
              <PostCard
                key={post.slug}
                url={`/post/${post.id}`}
                cover={post.cover.url}
                title={post.title}
              />
            )
          })}
        </S.Grid>
      </S.Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/posts', {
    params: {
      _limit: 10,
      _sort: 'created_at'
    }
  })

  const posts = data.map(post => {
    return {
      id: post.id,
      title: post.title,
      slug: post.slug,
      author: post.author,
      category: post.category,
      cover: post.cover
    }
  })

  return {
    props: {
      posts
    },
    revalidate: 60 * 60 * 24
  }
}
