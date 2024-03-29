import styles from '../../styles/Partners.module.css';
import ImageLink from '../ImageLink/ImageLink';
import noLocaleAssets from '../../pages/assets/nolocale.json';
import localeAssets from '../../pages/assets/texts.json';
import { useRouter } from 'next/router';


function Partners () {
    const partners = noLocaleAssets.partners;
    const {locale} = useRouter();
    const partnersText = localeAssets.front_page.filter(t => t.locale == locale)[0].partners.title;

    return (
        <div className={styles.container}>
            <div><h2 className={styles.title}>{partnersText}</h2></div>
            <div className={styles.rowContainer}>
                <div className={styles.row}>
                    {Object.keys(partners).map((key) => {
                        if (parseInt(key) < 7) return (
                            <div key={key} className={styles.holder}>
                                <ImageLink key={key} className={styles.image} src={partners[key].src} width={100} height={100} href={partners[key].link}/>
                            </div>
                        )
                    })}
                </div>
                
                <div className={styles.row} style={{padding: "0 calc(5vw + 1rem)"}}>
                    {Object.keys(partners).map((key) => {
                        if (parseInt(key) >= 7) return (
                            <div key={key} className={styles.holder}>
                                <ImageLink key={key} className={styles.image} src={partners[key].src} width={100} height={100} href={partners[key].link}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Partners;