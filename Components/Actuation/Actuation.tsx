import styles from '../../styles/Actuation.module.css'
import { useRouter } from 'next/router';
import localeAssets from '../../pages/assets/texts.json'
import Image from 'next/image'
import Link from 'next/link';

import BannerActuation from '../../public/BannerActuation.png';
import AnimationSVG from '../../public/Actuation/Animation.svg'

export default function Actuation () {

    const { locale } = useRouter();

    const txts = localeAssets.front_page.filter(t => t.locale == locale)[0]

    return (
        <div className={[styles.sectionArea].join(" ")}>
            <div className={styles.textTop}>
                <span className={styles.titleTop}>
                    <h2>
                        Conheça as <span className={styles.textHighlight}>áreas em que atuamos</span>.
                    </h2>
                </span>
            </div>
            <div className={styles.holder}>
                <div className={styles.areaRow}>
                    <div className={styles.areaSpace}>
                        <span className={styles.areaImage}>
                            <Image src={AnimationSVG} alt="Logo" width={100} height={100} />
                        </span>
                        <span className={styles.areaText}>Animação</span>
                    </div>
                </div>
                <div className={styles.areaRow}>
                    <div className={styles.areaSpace}>
                        <span className={styles.areaImage}>Imagem</span>
                        <span className={styles.areaText}>Texto</span>
                    </div>
                </div>
            </div>
            <div className={styles.backImage}>
                <Image src={BannerActuation} alt="Logo" width={1920} height={753} />
            </div>
        </div>
    )
}