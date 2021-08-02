import Head from 'next/head'
import { useMediaQuery } from 'react-responsive';
import { Controls } from '../components/Controls';
import { Hero } from '../components/Hero';
import styles from '../styles/Home.module.scss'

export default function Home() {

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <>
      {
        isMobile
        ?
        <img className={styles.staticBg} src="/images/marvel-bg-mobile.png" alt="" /> 
        :
        <img className={styles.staticBg} src="/images/marvel-bg.png" alt="" />  
      }
      
      <div className={styles.content}>
        <Head>
          <title>Marvel UI</title>
          <meta name="description" content="Desafio Marvel" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Controls />
        <Hero />
      </div>
    </>
  )
}
