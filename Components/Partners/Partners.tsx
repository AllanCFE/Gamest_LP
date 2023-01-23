import styles from '../../styles/Partners.module.css';
import ImageLink from '../ImageLink/ImageLink';
import noLocaleAssets from '../../pages/assets/nolocale.json';
import Image from 'next/image';


function Partners () {
    const partners = noLocaleAssets.partners;

    return (
        <div className={styles.container}>
            <div><h1 className={styles.title}>Parceiros</h1></div>
            <div className={styles.rowContainer}>
                <div className={styles.row}>
                    {Object.keys(partners).map((key) => {
                        if (parseInt(key) < 6) return (
                            <div key={key} className={styles.holder}>
                                <ImageLink className={styles.image} src={partners[key].src} width={100} height={100} href={partners[key].link}/>
                            </div>
                        )
                    })}
                </div>
                
                <div className={styles.row}>
                    {Object.keys(partners).map((key) => {
                        if (parseInt(key) >= 6) return (
                            <div key={key} className={styles.holder}>
                                <ImageLink className={styles.image} src={partners[key].src} width={100} height={100} href={partners[key].link}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Partners;