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
  events : Event[]
}


export default function Home() {
  let heroesData = [] as Hero[];
  const [heroes , setHeroes ] = useState<Hero[]>( [] )
  const [ isLoaded , setIsLoaded ] = useState(false);

  const publicKey = process.env.MARVEL_PUBLIC_KEY as string;
  const privateKey = process.env.MARVEL_PRIVATE_KEY as string;

  function updateData(heroList : Hero[]) {
    console.log(heroList)
    setIsLoaded(true)
    setHeroes(heroList)
    console.log('AQUI È DO UPDATEDATA:')
  }

  const api = "http://gateway.marvel.com/v1/public/"
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
            description :  heroData.data.results[0].description,
            name : heroData.data.results[0].name,
            image : heroData.data.results[0].thumbnail.path+'.jpg',
            events : [] as Event[]
          } as Hero
          
          const totalEvents = heroData.data.results[0].events.items
          for ( let z = 0 ; z < Math.min( 5 , totalEvents.length ) ; z++ ) {

            const eventCall =
            totalEvents[z].resourceURI
            + '?ts=' + timeStamp
            + '&apikey=' + process.env.MARVEL_PUBLIC_KEY
            + '&hash=' + hash;
            

            fetch( eventCall )
            .then( eventResponse => eventResponse.json() )
            .then( eventData => {
              let event = {
                name : eventData.data.results[0].title as string,
                description : eventData.data.results[0].description as string,
                image : eventData.data.results[0].thumbnail.path+'.jpg'
              }
              hero.events.push(event as Event)
            })
            
          }

          if (hero.description == ''){
            hero.description = 'Check out this character appeareances bellow: '
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
        <Controls />
        {
          isLoaded ? <Hero heroes={heroes}/> : <h1>Loading...</h1>
        }
        
      </div>
    </>
  )
}
