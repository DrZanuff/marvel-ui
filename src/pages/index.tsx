import Head from 'next/head'
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Controls } from '../components/Controls';
import { Hero } from '../components/Hero';

import { MD5 } from 'crypto-js';
import styles from '../styles/Home.module.scss'

const heroesId = [
  '1009610', //Spider Man
  '1009189', //Black Widow
  '1009351', //Hulk
  '1009664', //Thor
  '1009187', //Black Panther
  '1009652', //Thanos
  '1009368', //Iron Man
]



export default function Home() {
  let heroesData : Array<Object> = [];

  const publicKey = process.env.MARVEL_PUBLIC_KEY as string;
  const privateKey = process.env.MARVEL_PRIVATE_KEY as string;

  const api = "http://gateway.marvel.com/v1/public/"
//GET /v1/public/characters
  useEffect( ()=> {

    const timeStamp = new Date().getUTCDate().toString
    const hash = MD5( timeStamp + privateKey + publicKey)

    for (let i = 0 ; i < heroesId.length ; i++) {
      fetch(
        api + 'characters/' + heroesId[i] +
        '?ts=' + timeStamp +
        '&apikey=' + process.env.MARVEL_PUBLIC_KEY +
        '&hash=' + hash
        )
        .then( response => response.json() )
        .then( data => heroesData.push(data) )
    }

    console.log(heroesData)
    
  }, [] )

  const isMobile = useMediaQuery({ query: `(max-width: 1024px)` });

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
