import styles from '../../styles/Cover.module.css'
import Image from 'next/image';

export default () => {
    return (
        <div className={styles.wrap}>
            <img className={styles.bg} src='/Back_Cover.png' alt=""/>
            <div className={styles.cover}>
                {/** Div com as duas colunas, com altura "100" vh */}
                <div className={[styles.horizontalSplit].join(" ")}>
                    {/** Primeira coluna, 100vh */}
                    <div style={{width:'70%'}}>
                        {/** 1a linha, para o título, contendo 2 colunas */}
                        <div className={[styles.horizontalSplit, styles.line].join(" ")}>
                            {/** Controle esquerdo */}
                            <div className={[styles.controles].join(" ")}> 
                                <Image src='/Controle_L.png' layout="responsive" width={480} height={1024} />
                            </div>
                            {/** Título */}
                            <div>
                                <h1>Conectamos talentos a indústria de games</h1>
                            </div>
                        </div>
                        {/** 2a linha, para o subtítulo, contendo 2 colunas */}
                        <div className={[styles.horizontalSplit, styles.line].join(" ")}>
                            {/** Subtítulo */}
                            <div style={{paddingLeft: '15vw'}}>
                                <h2>Buscamos de forma personalizada o profissional perfeito para alavancar o projeto do seu game</h2>
                            </div>
                            {/** Controle direito */}
                            <div>
                                <Image src='/Controle_R.png' width={79} height={160}/>
                            </div>
                        </div>
                        {/** 3a linha, para os bullets, contendo 3 colunas */}
                        <div className={[styles.horizontalSplit, styles.line].join(" ")} style={{justifyContent:"space-between"}}>
                            {/** Bullet 1 */}
                            <div className={[styles.horizontalSplit, styles.verticalAlign].join(" ")}>
                                {/** Imagem */}
                                <div>
                                    <Image src='/Clock.png' width={40} height={40}/>  
                                </div>
                                {/** Texto */}
                                <div>
                                    Rápido
                                </div>
                            </div>
                            {/** Bullet 2 */}
                            <div className={[styles.horizontalSplit, styles.verticalAlign].join(" ")}>
                                {/** Imagem */}
                                <div>
                                    <Image src='/Money.png' width={40} height={40}/>            
                                </div>
                                {/** Texto */}
                                <div>
                                    Barato
                                </div>
                            </div>
                            {/** Bullet 3 */}
                            <div className={[styles.horizontalSplit, styles.verticalAlign].join(" ")}>
                                {/** Imagem */}
                                <div>
                                    <Image src='/Control.png' width={40} height={40}/>  
                                </div>
                                {/** Texto */}
                                <div>
                                    Pensado pra você...
                                </div>
                            </div>
                        </div>
                        {/** 4a linha, para o call to action */}
                        <div className={styles.line}>
                            {/** Fake button */}
                            <div className={[styles.fakeBtn, styles.verticalAlign, styles.secondColumn].join(" ")} style={{justifyContent:"center"}} >
                                Entre em contato
                            </div>
                        </div>

                        {/** 5a linha, para as redes, 3 colunas */}
                        <div className={[styles.horizontalSplit, styles.line].join(" ")} style={{width: "180px", justifyContent:"space-between"}}>
                            {/** Instagram */}
                            <div>
                                <a>
                                    <Image src='/Instagram.png' width={40} height={40}/>
                                </a>
                            </div>
                            {/** LinkedIn */}
                            <div>
                                <Image src='/LinkedIn.png' width={40} height={40}/>
                            </div>
                            {/** Zap */}
                            <div>
                                <Image src='/WhatsApp.png' width={40} height={40}/>
                            </div>
                        </div>
                        
                    </div>

                    {/** Segunda coluna com apenas o tamanho da figura */}
                    <div className={[styles.secondColumn].join(" ")} style={{width:'30%'}}>
                        <Image src='/Right_Cover.png' width={250} height={250}/>
                    </div>
                </div>
            </div>
        </div>
    );
}