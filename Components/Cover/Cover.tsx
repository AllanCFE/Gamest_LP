import styles from '../../styles/Cover.module.css'
import Image from 'next/image';
import { useRouter } from 'next/router';
import localeAssets from '../../pages/assets/texts.json'
import Link from 'next/link';

export default () => {

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
                            <div style={{width: "13%", minWidth: "32px"}}> 
                                <Image src='/Controle_L.png' layout="responsive" width={480} height={1024} />
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
                            <div style={{width: "15%", minWidth: "30px"}}>
                                <Image src='/Controle_R.png'  layout="responsive" width={480} height={1024}/>
                            </div>
                        </div>


                    </div>

                    {/** Segunda coluna com apenas o tamanho da figura */}
                    <div className={[styles.secondColumn].join(" ")}>
                        <Image src='/Right_Cover.png' width={250} height={250}/>
                    </div>
                </div>
            </div>
            <img className={styles.bg} src='/Back_Cover.png' alt=""/>
        </div>
    );
}