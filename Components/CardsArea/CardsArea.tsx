import styles from '../../styles/CardsArea.module.css'
import { useRouter } from 'next/router';
import localeAssets from '../../pages/assets/texts.json'
import Image from 'next/image'

import Banner from '../../public/BannerServicos.png'
import Card1img from '../../public/Cards/Card1.svg'
import Card2img from '../../public/Cards/Card2.svg'
import Card3img from '../../public/Cards/Card3.svg'

export default function CardsArea () {
    const { locale } = useRouter();
    const txts = localeAssets.front_page.filter(t => t.locale == locale)[0]
    
    return (
        <div className={styles.sectionArea}>
            <div className={styles.content}>
                <div className={styles.topText}>
                    <h2>{txts.cardsArea.title1} <span className={styles.highlight}>{txts.cardsArea.titleHighlight}</span> {txts.cardsArea.title2}</h2>
                </div>
                <div className={styles.bottomText}>
                    <p>{txts.cardsArea.p1}</p>
                    <p>{txts.cardsArea.p2}</p>
                </div>
            </div>
            <div className={styles.cardsArea}>
                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <Image src={Card1img} alt="Logo" width={100} height={100} />
                    </div>
                    <div className={styles.cardText}>
                        <h3>{txts.cardsArea.card1.title}</h3>
                        <p>{txts.cardsArea.card1.subtitle}</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <Image src={Card2img} alt="Logo" width={100} height={100} />
                    </div>
                    <div className={styles.cardText}>
                        <h3>{txts.cardsArea.card2.title}</h3>
                        <p>{ txts.cardsArea.card2.subtitle }</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <Image src={Card3img} alt="Logo" width={100} height={100} />
                    </div>
                    <div className={styles.cardText}>
                        <h3>{txts.cardsArea.card3.title}</h3>
                        <p>{txts.cardsArea.card3.subtitle}</p>
                    </div>
                </div>
            </div>
            <div className={styles.backImage}>
                <Image src={Banner} alt="Banner" width={1920} height={505} />
            </div>
        </div>
    )
}