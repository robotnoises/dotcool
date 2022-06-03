import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>cool</title>
        <meta name="description" content="david nichols cool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>
            Welcome to <span className="underline">David</span>
          </h1>
        </div>
      </main>

      <footer className={styles.footer}>
        cool.
      </footer>
    </div>
  )
}

export default Home
