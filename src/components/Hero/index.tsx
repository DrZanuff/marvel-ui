import styles from './styles.module.scss';

export function Hero() {
    
    return(
        <div className={styles.container}>

            <div className={styles.top}>

                <div className={styles.heroProfile}>
                    <div className={styles.avatar}>
                        <img src="https://github.com/DrZanuff.png" alt="" />
                    </div>
                    <span>Ricardo Machado Rocha Brito</span>
                </div>

                <div className={styles.info}>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur facere consectetur sunt doloribus temporibus explicabo vitae cum doloremque veniam dolore incidunt ipsa, quibusdam, dicta enim possimus nam minima reprehenderit delectus?
                    </p>
                </div>

            </div>
            <div className={styles.bottom}>

                <div className={styles.events}>

                    <h1>IMPORTANT EVENTS</h1>

                    <div className={styles.singleEvent}>

                        <div className={styles.eventContent}>
                            <div className={styles.eventProfile}>
                                <span>Event Name Cool Supa Base</span>
                                <img src="https://github.com/DrZanuff.png" alt="" />
                            </div>
                            <p className={styles.eventInfo}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, officia soluta vel exercitationem maxime ipsam architecto excepturi eum, beatae provident non incidunt distinctio, veniam repellendus harum sapiente impedit dolorum dolor.
                            </p>
                        </div>
       
                        <hr />
                    </div>

                    <div className={styles.singleEvent}>

                        <div className={styles.eventContent}>
                            <div className={styles.eventProfile}>
                                <span>Event Name Cool Supa Base</span>
                                <img src="https://github.com/DrZanuff.png" alt="" />
                            </div>
                            <p className={styles.eventInfo}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, officia soluta vel exercitationem maxime ipsam architecto excepturi eum, beatae provident non incidunt distinctio, veniam repellendus harum sapiente impedit dolorum dolor.
                            </p>
                        </div>
       
                        <hr />
                    </div>

                    <div className={styles.singleEvent}>

                        <div className={styles.eventContent}>
                            <div className={styles.eventProfile}>
                                <span>Event Name Cool Supa Base</span>
                                <img src="https://github.com/DrZanuff.png" alt="" />
                            </div>
                            <p className={styles.eventInfo}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, officia soluta vel exercitationem maxime ipsam architecto excepturi eum, beatae provident non incidunt distinctio, veniam repellendus harum sapiente impedit dolorum dolor.
                            </p>
                        </div>
       
                        <hr />
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}