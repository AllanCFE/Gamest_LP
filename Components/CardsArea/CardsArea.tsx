import styles from '../../styles/CardsArea.module.css'
import { useRouter } from 'next/router';
import localeAssets from '../../pages/assets/texts.json'
import Image from 'next/image'

export default function CardsArea () {
    const { locale } = useRouter();
    const txts = localeAssets.front_page.filter(t => t.locale == locale)
    
    return (
        <div className={styles.sectionArea}>
            Oi
        </div>
    )
}