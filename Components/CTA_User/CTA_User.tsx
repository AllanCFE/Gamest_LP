import styles from '../../styles/CTAUser.module.css'
import { useRouter } from 'next/router';
import localeAssets from '../../pages/assets/texts.json'
import Image from 'next/image'
import Link from 'next/link';

import BannerCadastro from '../../public/BannerCadastro.png';
import PlayerBT from '../../public/PlayerBT.svg';

export default function CTA_User () {

    const { locale } = useRouter();

    const txts = localeAssets.front_page.filter(t => t.locale == locale)

    return (
        <div className={[styles.sectionArea].join(" ")}>
            <div className={styles.textTop}>
                <span className={styles.titleTop}>
                    <h2>
                        Esta área é para <span className={styles.textHighlight}>você que quer encontrar oportunidades</span> na indústria de games
                    </h2>
                </span>
                <span className={styles.paragraphTop}>
                    <p>
                        Se você é designer e adora criar, ou é programador e adora desenvolver, ou prefere atuar gerenciando um time dinâmico e criativo, ou é daqueles que gostam de contar histórias, então cadastre-se no nosso banco de dados. A Gamest vai te ajudar a encontrar uma oportunidade ideal no mercado.
                    </p>
                </span>
            </div>
            <div className={styles.holder}>
                <span className={styles.leftContent}>
                    <Image src={PlayerBT} alt="Logo" width={60} height={60} />
                </span>
                <span className={styles.rightContent}>
                    Estou aberto a novas oportunidades na indústria de games
                </span>
                <Link href={'/contact'}>
                    <div className={styles.actionButton}>
                        <span className={styles.actionText}>QUERO ME CADASTRAR</span>
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