import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Description from '../components/Description'
import Footer from '../components/Footer'
import Landing from '../components/Landing '
import Organization from '../components/Organizacao'
import Slider from '../components/Slider'
import { promises as fs } from 'fs'
import path from 'path'

const Home: NextPage = (props:any) => {
  return (
    <div >
      <Head>
        <title>PREAMAR</title>
      </Head>

      <main>
        <Landing />
        <Organization />
        <Slider fileNames={props.filenames}/>
        <Description/>
        <Footer />
      </main>
    </div>
  )
}
export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'public/corousel-photos')
  const filenames = await fs.readdir(postsDirectory)

  return {
    props: {
      filenames
    },
  }
}
export default Home
