import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css';


import styles from './styles.module.scss';

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

interface HeroProps {
    heroes : Hero[]
}

export function Hero({ heroes } : HeroProps) {
    
    return(
            <>
            <Carousel plugins={['arrows' , 'infinite']}>
                {
                    heroes.map( hero => {
                        return(

                            <div className={styles.container} key={hero?.name}>

                                <div className={styles.top}>

                                    <div className={styles.heroProfile}>
                                        <div className={styles.avatar}>
                                            <img src={hero?.image} alt="" />
                                        </div>
                                        <span>{hero?.name}</span>
                                    </div>

                                    <div className={styles.info}>
                                        <p>
                                            {hero?.description}
                                        </p>
                                    </div>

                                </div>
                                <div className={styles.bottom}>

                                    <div className={styles.events}>

                                        <h1>IMPORTANT EVENTS</h1>

                                        {
                                            hero?.events.map( ev => {
                                                return( 
                                                    <div className={styles.singleEvent} key={ev.name}>
                                                        <div className={styles.eventContent}>
                                                            <div className={styles.eventProfile}>
                                                                <span>{ev.name}</span>
                                                                <img src={ev.image} alt="" />
                                                            </div>
                                                            <p className={styles.eventInfo}>
                                                                {ev.description}
                                                            </p>
                                                        </div>
                                    
                                                        <hr />
                                                    </div>
                                                )
                                            })
                                        }
                                        
                                    </div>
                                </div>
                            </div>    


                        )
                    })
                }
                          
            </Carousel>
            
            

        </>

    )
}