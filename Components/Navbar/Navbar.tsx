import styles from '../../styles/Navbar.module.css'
import flags from '../../styles/Flags.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import localeAssets from '../../pages/assets/texts.json'
import GamestLogo from '../../public/Logo_Gamest.png'

export default() =>{
    const { locale, locales, asPath } = useRouter();

    const txts = localeAssets.front_page.filter(t => t.locale == locale)

    return(
        <nav className={styles.navbar}>
            <div className={styles.nav_left}>
                <Link href='/'>
                    <Image alt="Logo Gamest" src={GamestLogo} width={866} height={179} style={{objectFit: "contain", maxWidth: "14vw"}}/>                   
                </Link>
            </div>
            <div className={styles.nav_right}>
                <div>
                    {locales.map((l, i) => {
                        return (
                            
                                <Link key={i}  href={asPath} locale={l}>
                                        <span key={i} className={[l === locale ? styles.selected : '', l == "pt-BR" ? flags.ptBR : flags.enUS, flags.fi ].join(" ")}></span>
                                </Link>
                        );
                    })}
                </div>
                <div className={styles.navLink}>
                    <Link href="contact">
                        {txts[0].navbar.contact}
                    </Link>
                </div>
            </div>
        </nav>
    );
}