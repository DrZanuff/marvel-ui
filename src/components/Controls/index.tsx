import { useMediaQuery } from 'react-responsive';
import styles from './styles.module.scss';

export function Controls() {

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
                <button className={styles.left}>&lt;</button>
                <button className={styles.right}>&gt;</button>
            </div>

            <span className={styles.marvel}>&ldquo;Data provided by Marvel. © 2014 Marvel&ldquo;</span>
        </div>
    );
}