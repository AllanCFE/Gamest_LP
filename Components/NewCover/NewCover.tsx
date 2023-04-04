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
                        <h1>SIMPLIFICAMOS A <span className={styles.titleHighlight}>AQUISIÇÃO DE TALENTOS</span> NO MERCADO DE GAMES</h1>
                    </span>
                </div>
                <div className={styles.subtitleDiv}>
                    <span className={styles.subtitleText}>
                        <p>Buscamos de forma personalizada o profissional perfeito para alavancar o seu projeto de game.</p>
                    </span>
                    <span className={styles.rightControl}>
                        <Image alt="Right Control" src={RControl} width={90} height={173} />
                    </span>
                </div>
            </div>
        </div>
    )
}