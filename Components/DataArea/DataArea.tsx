import styles from '../../styles/DataArea.module.css'
import { useRouter } from 'next/router';
import localeAssets from '../../pages/assets/texts.json'
import Image from 'next/image'
import Link from 'next/link'

import AnimationImg from '../../public/Components/DataArea/animation.svg'
import ArtImg from '../../public/Components/DataArea/art.svg'
import AudioImg from '../../public/Components/DataArea/audio.svg'
import DesignImg from '../../public/Components/DataArea/design.svg'
import MarketingImg from '../../public/Components/DataArea/marketing.svg'
import ProgrammingImg from '../../public/Components/DataArea/programming.svg'
import ProductionImg from '../../public/Components/DataArea/production.svg'
import QAImg from '../../public/Components/DataArea/qa.svg'

export default function CardsArea () {

    const { locale } = useRouter();

    const txts = localeAssets.front_page.filter(t => t.locale == locale)[0]
    const cardsAssets = txts.cardsArea;
    const numbersAssets = txts.numbersArea;
    const actionAssets = txts.actionArea;

    const cardsImages = {
        "0": AnimationImg,
        "1": ArtImg,
        "2": AudioImg,
        "3": DesignImg,
        "4": ProductionImg,
        "5": ProgrammingImg,
        "6": QAImg,
        "7": MarketingImg
    }

    return (
        <div className={[styles.sectionArea].join(" ")}>
            <h1>Atuamos com as áreas de:</h1>
            <div className={styles.cardsArea}>
                <div className={styles.line}>
                    {Object.keys(cardsAssets["l1"]).map((key) => {
                        return (
                            <div className={styles.card}>
                                <span className={styles.cardImage}><Image src={cardsImages[key]} alt={cardsAssets["l1"][key]} width={80} height={80}/></span>
                                <span>{cardsAssets["l1"][key]}</span>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.line}>
                    {Object.keys(cardsAssets["l2"]).map((key) => {
                        return (
                            <div className={styles.card}>
                                <span className={styles.cardImage}><Image src={cardsImages[key]} alt={cardsAssets["l2"][key]} width={80} height={80}/></span>
                                <span>{cardsAssets["l2"][key]}</span>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className={styles.numbersArea}>
                { Object.keys(numbersAssets).map((key) => {
                    return (
                        <div className={styles.singleNumberArea}>
                            <span className={styles.head}>{numbersAssets[key]["head"]}</span>
                            <span className={styles.content}>{numbersAssets[key]["text"]}</span>
                        </div>
                    )
                }) }
            </div>

            <div className={styles.actionArea}>
                <div className={styles.left}>
                    <h4>{actionAssets["company"]}</h4>
                    <Link href="/contact" className={styles.buttonAction}><span>{actionAssets["companyButton"]}</span></Link>
                </div>

                <div className={styles.verticalBar}><span style={{visibility: "hidden"}}>AAA</span></div>
                
                <div className={styles.right}>
                    <h4>{actionAssets["professional"]}</h4>
                    <span className={styles.buttonAction}>{actionAssets["professionalButton"]}</span>
                </div>
            </div>
        </div>
    )
}