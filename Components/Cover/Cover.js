import styles from '../../styles/Cover.module.css'
import Image from 'next/image';

export default () => {

    let bulletSize = 50

    return (
        <div className={styles.wrap}>
            <img className={styles.bg} src='/Back_Cover.png' alt=""/>
            <div className={styles.cover}>
                {/** Div com as duas colunas, com altura "100" vh */}
                <div className={[styles.horizontalSplit].join(" ")}>
                    {/** Primeira coluna, 100vh */}
                    <div style={{width:'70%'}}>
                        {/** 1a linha, para o título, contendo 2 colunas */}
                        <div className={[styles.horizontalSplit, styles.line, styles.verticalAlign].join(" ")}>
                            {/** Controle esquerdo */}
                            <div style={{width: "13%"}}> 
                                <Image src='/Controle_L.png' layout="responsive" width={480} height={1024} />
                            </div>
                            {/** Título */}
                            <div style={{paddingLeft: "2vw"}}>
                                <h1>Conectamos talentos a indústria de games</h1>
                            </div>
                        </div>
                        {/** 2a linha, para o subtítulo, contendo 2 colunas */}
                        <div className={[styles.horizontalSplit, styles.line, styles.verticalAlign].join(" ")}>
                            {/** Subtítulo */}
                            <div style={{paddingRight:"2vw", textAlign: "right", marginLeft: "10vw"}}>
                                <h2>Buscamos de forma personalizada o profissional perfeito para alavancar o projeto do seu game</h2>
                            </div>
                            {/** Controle direito */}
                            <div style={{width: "15%"}}>
                                <Image src='/Controle_R.png'  layout="responsive" width={480} height={1024}/>
                            </div>
                        </div>
                        {/** 4a linha, para o call to action */}
                        <div className={styles.line}>
                            {/** Fake button */}
                            <div className={[styles.fakeBtn, styles.verticalAlign, styles.secondColumn].join(" ")} style={{justifyContent:"center"}} >
                                Entre em contato
                            </div>
                        </div>

                    </div>

                    {/** Segunda coluna com apenas o tamanho da figura */}
                    <div className={[styles.secondColumn].join(" ")} style={{width:'30%', paddingTop: "2vh", marginLeft: "1vw"}}>
                        <Image src='/Right_Cover.png' width={250} height={250}/>
                    </div>
                </div>
            </div>
        </div>
    );
}