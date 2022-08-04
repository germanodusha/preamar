import type { NextPage } from 'next'
import Head from 'next/head'
import Description from '../components/Description'
import Footer from '../components/Footer'
import Landing from '../components/Landing '
import Organization from '../components/Organizacao'
import SecondGradient from '../components/SecondGradient'
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
        <SecondGradient />
        <Description />
        <Footer />
      </main>
    </div>
  )
}

export default Home
