import styles from '../../styles/Cover.module.css'
import Image from 'next/image';
import { useRouter } from 'next/router';
import localeAssets from '../../pages/assets/texts.json'
import Link from 'next/link';
import LControl from '../../public/Controle_L.png'
import RControl from '../../public/Controle_R.png'
import BackCover from '../../public/Back_Cover.png'
import RCover from '../../public/Right_Cover.png'

export default function Cover () {

    const { locale } = useRouter();

    const txts = localeAssets.front_page.filter(t => t.locale == locale)

    return (
        <div className={styles.wrap}>
            
            <div className={styles.cover}>
                {/** Div com as duas colunas, com altura "100" vh */}
                <div className={[styles.horizontalSplit].join(" ")}>
                    {/** Primeira coluna, 100vh */}
                    <div className={[styles.firstColumn].join(" ")}>
                        {/** 1a linha, para o título, contendo 2 colunas */}
                        <div className={[styles.horizontalSplit, styles.line, styles.verticalAlign].join(" ")}>
                            {/** Controle esquerdo */}
                            <div style={{width: "7%", minWidth: "32px"}}> 
                                <Image alt="Left Control" src={LControl} layout="responsive" width={480} height={1024} />
                            </div>
                            {/** Título */}
                            <div style={{paddingLeft: "2vw"}}>
                                <h1>{txts[0].cover.title}</h1>
                            </div>
                        </div>
                        {/** 2a linha, para o subtítulo, contendo 2 colunas */}
                        <div className={[styles.horizontalSplit, styles.line, styles.verticalAlign].join(" ")}>
                            {/** Subtítulo */}
                            <div className={styles.subtitle}>
                                <h2>{txts[0].cover.subtitle}</h2>
                            </div>
                            {/** Controle direito */}
                            <div style={{width: "9%", minWidth: "30px"}}>
                                <Image alt="Right Control" src={RControl}  layout="responsive" width={480} height={1024}/>
                            </div>
                        </div>


                    </div>

                    {/** Segunda coluna com apenas o tamanho da figura */}
                    <div className={[styles.secondColumn].join(" ")}>
                        <Image alt="Drawing of a guy using a computer" src={RCover} width={250} height={250}/>
                    </div>
                </div>
            </div>
            <img className={styles.bg} src='/Back_Cover.png' alt=""/>
        </div>
    );
}