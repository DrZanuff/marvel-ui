import { useMediaQuery } from 'react-responsive';
import styles from './styles.module.scss';

interface ControlsProp {
    nextHero : () => void;
    prevHero : () => void;
}
 
export function Controls( {nextHero , prevHero } : ControlsProp ) {

    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <span>MARVEL HEROES</span>
            </div>
            {
                !isMobile && <aside></aside>
            }
            <div className={styles.controls}>
                <button onClick={prevHero} className={styles.left}>&lt;</button>
                <button onClick={nextHero} className={styles.right}>&gt;</button>
            </div>

            <span className={styles.marvel}>&ldquo;Data provided by Marvel. © 2014 Marvel&ldquo;</span>
        </div>
    );
}