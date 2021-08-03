import Head from 'next/head'
import { useEffect, useState } from 'react';
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

interface Event {
  description : string,
  name : string,
  image : string,
}

interface Hero {
  description : string,
  image : string,
  name : string,
}


export default function Home() {
  const [currentHero , setCurrentHero ] = useState(0);
  let heroesData = [] as Hero[];
  const [heroes , setHeroes ] = useState<Hero[]>( [] )
  const [ isLoaded , setIsLoaded ] = useState(false);

  const publicKey = process.env.MARVEL_PUBLIC_KEY as string;
  const privateKey = process.env.MARVEL_PRIVATE_KEY as string;

  const api = "http://gateway.marvel.com/v1/public/"

  function nextHero() {
    console.log( `Current Hero ${currentHero} Hero Size ${heroesId.length}` )
    setCurrentHero( currentHero == heroesId.length ? 0 : currentHero+1 )
  }

  function prevHero() {
    setCurrentHero( currentHero == 0 ? heroesId.length : currentHero-1 )
  }

//GET /v1/public/characters
  useEffect( ()=> {
    
    const timeStamp = new Date().getUTCDate().toString()
    const hash = MD5( timeStamp + privateKey + publicKey)

    for (let i = 0 ; i < heroesId.length ; i++) {

      const call = api + 'characters/' + heroesId[i] +
      '?ts=' + timeStamp +
      '&apikey=' + process.env.MARVEL_PUBLIC_KEY +
      '&hash=' + hash;

      fetch(call)
        .then( response => response.json() )
        .then( heroData => {

          let hero = {
            description :  heroData.data?.results[0].description,
            name : heroData.data?.results[0].name,
            image : heroData.data?.results[0].thumbnail.path+'.jpg',
          } as Hero

          if (hero.description == ''){
            hero.description = 'Check out more about this character at marvel.com. All Marvel Characters and the distinctive likeness(es) thereof are Trademarks & Copyright © 1941 - 2021 Marvel Characters, Inc. and used with permission. ALL RIGHTS RESERVED. '
          }

          heroesData = [...heroesData,hero]
          setHeroes( [...heroesData] )
        } )
    }

    setIsLoaded(true)
    
    
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
        <Controls nextHero={nextHero} prevHero={prevHero} />
        {
          isLoaded ? <Hero  heroIndex={currentHero} heroes={heroes}/> : <h1>Loading...</h1>
        }
        
      </div>
    </>
  )
}
