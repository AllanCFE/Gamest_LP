import styles from '../../styles/CTAUser.module.css'
import { useRouter } from 'next/router';
import localeAssets from '../../pages/assets/texts.json'
import Image from 'next/image'
import Link from 'next/link';

import BannerCadastro from '../../public/BannerCadastro.png';
import PlayerBT from '../../public/PlayerBT.svg';

export default function CTA_User () {

    const { locale } = useRouter();

    const txts = localeAssets.front_page.filter(t => t.locale == locale)[0]

    return (
        <div className={[styles.sectionArea].join(" ")}>
            <div className={styles.textTop}>
                <span className={styles.titleTop}>
                    <h2>
                        {txts.cta_user.title1} <span className={styles.textHighlight}>{txts.cta_user.titleHighlight}</span> {txts.cta_user.title2}
                    </h2>
                </span>
                <span className={styles.paragraphTop}>
                    <p>
                        {txts.cta_user.p}
                    </p>
                </span>
            </div>
            <div className={styles.holder}>
                <span className={styles.leftContent}>
                    <Image src={PlayerBT} alt="Logo" width={60} height={60} />
                </span>
                <span className={styles.rightContent}>
                    {txts.cta_user.holderText}
                </span>
                <Link href={'/contact'}>
                    <div className={styles.actionButton}>
                        <span className={styles.actionText}>{txts.cta_user.button}</span>
                        <span className={styles.playIcon}></span>
                    </div>
                </Link>
            </div>
            <div className={styles.backImage}>
                <Image src={BannerCadastro} alt="Logo" width={1920} height={753} />
            </div>
        </div>
    )
}