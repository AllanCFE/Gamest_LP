import styles from '../../styles/CardsArea.module.css'
import { useRouter } from 'next/router';
import localeAssets from '../../pages/assets/texts.json'
import Image from 'next/image'
import Link from 'next/link';

export default function CardsArea () {

    const { locale } = useRouter();

    const txts = localeAssets.front_page.filter(t => t.locale == locale)

    return (
        <div className={[styles.sectionArea].join(" ")}>
            <div className={`${styles.stripe} ${styles.leftStripe}`}></div>
            <div className={[styles.holder].join(" ")}>
                <span className={styles.leftContent}>
                    <Image src="/PlayerBT.svg" alt="Logo" width={60} height={60} />
                </span>
                <span className={styles.rightContent}>
                    {txts[0].cards.text}
                </span>
                <Link href={'/contact'}>
                    <div className={styles.actionButton}>
                        <span className={styles.actionText}>{txts[0].cards.button}</span>
                        <span className={styles.playIcon}></span>
                    </div>
                </Link>
            </div>
            <div className={`${styles.stripe} ${styles.rightStripe}`}></div>
        </div>
    )
}