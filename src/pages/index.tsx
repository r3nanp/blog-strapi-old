import Head from 'next/head'
import { GetStaticProps } from 'next'
import { api } from 'services/api'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { Heading } from 'components/Heading'
import { PostCard } from 'components/PostCard'

import type { PostData } from 'domain/posts'
import * as S from 'styles/pages/home'

type HomeProps = {
  latestPost: PostData[]
  allPosts: PostData[]
}

export default function Home({ allPosts, latestPost }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>

      <Header />

      <S.Container>
        <Heading color="black">Post mais recente</Heading>

        <S.LatestPost>
          {latestPost.map(post => (
            <PostCard
              key={post.slug}
              url={`/post/${post.id}`}
              cover={post.cover.url}
              title={post.title}
            />
          ))}
        </S.LatestPost>

        <Heading color="black">Todos os posts</Heading>
        <S.Grid>
          {allPosts.map(post => {
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

      <Footer />
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

  const latestPost = posts.slice(0, 1)
  const allPosts = posts.slice(1, posts.length)

  return {
    props: {
      latestPost,
      allPosts
    },
    revalidate: 60 * 60 * 24
  }
}
