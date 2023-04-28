import styles from '../../styles/Actuation.module.css'
import { useRouter } from 'next/router';
import localeAssets from '../../pages/assets/texts.json'
import Image from 'next/image'
import Link from 'next/link';

import BannerActuation from '../../public/BannerActuation.png';
import AnimationSVG from '../../public/Actuation/Animation.svg'
import ArtSVG from '../../public/Actuation/Art.svg'
import AudioSVG from '../../public/Actuation/Audio.svg'
import DesignSVG from '../../public/Actuation/Design.svg'
import MarketingSVG from '../../public/Actuation/Marketing.svg'
import ProductionSVG from '../../public/Actuation/Production.svg'
import ProgrammingSVG from '../../public/Actuation/Programming.svg'
import QASVG from '../../public/Actuation/QA.svg'

export default function Actuation () {

    const { locale } = useRouter();

    const txts = localeAssets.front_page.filter(t => t.locale == locale)[0]
    const row1 = txts.actuation[0]
    const row2 = txts.actuation[1]

    const images1 = [AnimationSVG, ArtSVG, AudioSVG, DesignSVG]
    const images2 = [MarketingSVG, ProductionSVG, ProgrammingSVG, QASVG]

    return (
        <div className={[styles.sectionArea].join(" ")}>
            <div className={`${styles.stripe} ${styles.stripeTop}`}></div>
            <div className={styles.textTop}>
                <span className={styles.titleTop}>
                    <h2>
                        {txts.actuation["title1"]}<span className={styles.textHighlight}>{txts.actuation["titleHighlight"]}</span>.
                    </h2>
                </span>
            </div>
            <div className={styles.holder}>
                <div className={styles.areaRow}>
                    {
                        Object.keys(row1).map((item, index) => {
                            return (
                                <div className={styles.areaSpace}>
                                    <span className={styles.areaImage}>
                                        <Image src={images1[index]} alt={`Logo ${row1[item]}`} width={100} height={100} />
                                    </span>
                                    <span className={styles.areaText}>{row1[item]}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.areaRow}>
                    {
                        Object.keys(row2).map((item, index) => {
                            return (
                                <div className={styles.areaSpace}>
                                    <span className={styles.areaImage}>
                                        <Image src={images2[index]} alt={`Logo ${row2[item]}`} width={100} height={100} />
                                    </span>
                                    <span className={styles.areaText}>{row2[item]}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={`${styles.stripe} ${styles.stripeBottom}`}></div>
            <div className={styles.backImage}>
                <Image src={BannerActuation} alt="Imagem de fundo com pessoas em reunião de negócios" width={1920} height={700} quality={85} />
            </div>
        </div>
    )
}