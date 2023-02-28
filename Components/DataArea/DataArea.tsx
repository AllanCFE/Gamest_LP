import styles from '../../styles/DataArea.module.css'
import { useRouter } from 'next/router';
import localeAssets from '../../pages/assets/texts.json'

export default function CardsArea () {

    const { locale } = useRouter();

    const txts = localeAssets.front_page.filter(t => t.locale == locale)

    return (
        <div className={[styles.sectionArea].join(" ")}>
            <h1>Atuamos com as áreas de:</h1>
            <div className={styles.cardsArea}>
                <div className={styles.line}>
                    <div className={styles.card}>
                        <span className={styles.cardImage}>Circulo</span>
                        <span>Area</span>
                    </div>
                    <div className={styles.card}>
                        <span className={styles.cardImage}>Circulo</span>
                        <span>Area</span>
                    </div>
                    <div className={styles.card}>
                        <span className={styles.cardImage}>Circulo</span>
                        <span>Area</span>
                    </div>
                    <div className={styles.card}>
                        <span className={styles.cardImage}>Circulo</span>
                        <span>Area</span>
                    </div>
                </div>
                <div className={styles.line}>
                    <div className={styles.card}>
                        <span className={styles.cardImage}>Circulo</span>
                        <span>Area</span>
                    </div>
                    <div className={styles.card}>
                        <span className={styles.cardImage}>Circulo</span>
                        <span>Area</span>
                    </div>
                    <div className={styles.card}>
                        <span className={styles.cardImage}>Circulo</span>
                        <span>Area</span>
                    </div>
                    <div className={styles.card}>
                        <span className={styles.cardImage}>Circulo</span>
                        <span>Area</span>
                    </div>
                </div>
            </div>

            <div className={styles.numbersArea}>
                <div className={styles.singleNumberArea}>
                    <span>+ 12000</span>
                    <span>Candidatos em nossa base de dados</span>
                </div>
                <div className={styles.singleNumberArea}>
                    <span>+ 12000</span>
                    <span>Candidatos em nossa base de dados</span>
                </div>
                <div className={styles.singleNumberArea}>
                    <span>+ 12000</span>
                    <span>Candidatos em nossa base de dados</span>
                </div>
            </div>

            <div className={styles.actionArea}>
                <div className={styles.left}>
                    <span>Desejo conhecer mais sobre as soluções da Gamest</span>
                    <span>Entrar em contato</span>
                </div>
                <div className={styles.right}>
                    <span>Estou aberto a novas oportunidades na indústria de games</span>
                    <span>Cadastrar na base dados</span>
                </div>
            </div>
        </div>
    )
}