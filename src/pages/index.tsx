import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>PREAMAR</title>
      </Head>

      <main style={{display:'flex', width:'100%', height:'100vh', justifyContent:'center', alignItems:'center'}}>
        PREAMAR
      </main>
    </div>
  )
}

export default Home
