import styles from '../../styles/Footer.module.css'
import Image from 'next/image';
import { useRouter } from 'next/router';
import localeAssets from '../../pages/assets/texts.json'

export default () => {

    const { locale } = useRouter();

    const txts = localeAssets.front_page.filter(t => t.locale == locale)

    return(
        <div className={[styles.sectionArea].join(" ")}>
            <div className={styles.footerLeft}>
                <div className={styles.smLogos}>
                    <a href='https://www.instagram.com/gamestoficial/' target="_blank">
                        <Image src='/Instagram.png' width={100} height={100}/>
                    </a>
                </div>
                <div className={styles.smLogos}>
                    <a href='https://www.linkedin.com/company/gamestoficial/' target="_blank">
                        <Image src='/LinkedIn.png' width={100} height={100}/>
                    </a>
                </div>
                <div className={styles.smLogos}>
                    <a href='mailto:joaovictorcastro@gamest.com.br' target="_blank">
                        <Image src='/Mail.png' width={100} height={100}/>
                    </a>
                </div>
                <div className={styles.smLogos}>
                    <a href='https://api.whatsapp.com/send?phone=5565996118041&text=Gostaria%20de%20conversar%20sobre%20o%20servi%C3%A7o%20de%20recrutamento%20da%20Gamest' target="_blank">
                        <Image src='/WhatsApp.png' width={100} height={100}/>
                    </a>
                </div>
            </div>
            <div className={styles.footerRight}>
                {txts[0].footbar.rights}
            </div>
        </div>
    )
}