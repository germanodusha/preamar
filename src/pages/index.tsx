import type { NextPage } from 'next'
import Head from 'next/head'
import Landing from '../components/Landing '
import Organization from '../components/Organizacao'
import Slider from '../components/Slider'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>PREAMAR</title>
      </Head>

      <main>
        <Landing />
        <Organization />
        <Slider />
      </main>
    </div>
  )
}

export default Home
