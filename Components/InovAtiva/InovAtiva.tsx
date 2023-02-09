import Navbar from "../Navbar/Navbar"
import styles from "../../styles/InovAtiva.module.css"
import Image from "next/image"
import localeAssets from "../../pages/assets/texts.json"
import noLocaleAssets from "../../pages/assets/nolocale.json"
import { useRouter } from "next/router";
import ImageLink from "../ImageLink/ImageLink";
import Trophy from "../../public/Components/InovAtiva/trophy.png"

export default function InovAtiva () {
    const { locale } = useRouter();
    const txts = localeAssets.front_page.filter(t => t.locale == locale)
    const lAssets = txts[0].InovAtiva
    const nlAssets = noLocaleAssets.InovAtiva

        return(
    
            <div className={[styles.container].join(" ")}>
                <div className={[styles.trophy, styles.centralize].join(" ")}>
                    <Image alt="Trophy" className={styles.centralize} src={Trophy} width={600} height={600} style={{objectFit: "contain", maxHeight: "17vw", maxWidth: "17vw"}} />
                </div>
                <div className={styles.textContainer}>
                    <div>
                        <h2> {lAssets.title} </h2>
                    </div>
                    <div>
                        <p> {lAssets.text} </p>
                    </div>
                    <div className={[styles.flex].join(" ")}>
                        <div className={styles.centralize}>
                            <p>{lAssets.newspaper}</p>
                        </div>
                        <div className={[styles.flex, styles.invert].join(" ")} > 
                            {Object.keys(nlAssets).map((key) => {
                                return( 
                                    <ImageLink key={key} className={styles.lMargin} src={nlAssets[key].src} width={50} height={50} href={nlAssets[key].href}/>
                                )
                            })}
                        </div>
                    </div>
                </div>                
            </div>
        )
}