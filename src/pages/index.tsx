import type { NextPage } from 'next'
import Head from 'next/head'
import Landing from '../components/Landing '
import Organization from '../components/Organizacao'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>PREAMAR</title>
      </Head>

      <main>
        <Landing />
        <Organization />
      </main>
    </div>
  )
}

export default Home
