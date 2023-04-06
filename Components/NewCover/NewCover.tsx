import styles from '../../styles/NewCover.module.css'
import Image from 'next/image';
import { useRouter } from 'next/router';
import localeAssets from '../../pages/assets/texts.json'

import LControl from '../../public/NewCover/Control_L.png'
import RControl from '../../public/NewCover/Control_R.png'
import BackCover from '../../public/NewCover/Banner.png'

export default function NewCover () {
    const { locale } = useRouter();
    const txts = localeAssets.front_page.filter(t => t.locale == locale);
    
    return (
        <div className={styles.wrap}>
            <div className={styles.content}>
                <div className={styles.titleDiv}>
                    <span className={styles.leftControl}>
                        <Image alt="Left Control" src={LControl} width={90} height={173} />
                    </span>
                    <span className={styles.titleText}>
                        <h1>{txts[0].cover.title1} <span className={styles.titleHighlight}> {txts[0].cover.titleHighlight}</span> {txts[0].cover.title2}</h1>
                    </span>
                </div>
                <div className={styles.subtitleDiv}>
                    <span className={styles.subtitleText}>
                        <p>{txts[0].cover.subtitle}</p>
                    </span>
                    <span className={styles.rightControl}>
                        <Image alt="Right Control" src={RControl} width={90} height={173} />
                    </span>
                </div>
            </div>
        </div>
    )
}