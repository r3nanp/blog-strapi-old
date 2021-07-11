import Head from 'next/head'
import { Heading } from '@components/Heading'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>

      <main>
        <Heading size="huge" color="black">
          hello world!
        </Heading>
      </main>
    </>
  )
}
