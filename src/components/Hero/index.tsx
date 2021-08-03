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
  }

interface HeroProps {
    heroes : Hero[],
    heroIndex : number
}

export function Hero({ heroes , heroIndex } : HeroProps) {
    
    return(
            <>
            <Carousel plugins={['infinite']} value={heroIndex} draggable={false}>
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
                            </div>    


                        )
                    })
                }
                          
            </Carousel>
            
            

        </>

    )
}