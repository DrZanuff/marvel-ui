import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  //Ubuntu Condensed
  return (
    <div className={styles.content}>
      <Head>
        <title>Marvel UI</title>
        <meta name="description" content="Desafio Marvel" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h1>Controls</h1>
      <h1>Hero</h1>
    </div>
  )
}
