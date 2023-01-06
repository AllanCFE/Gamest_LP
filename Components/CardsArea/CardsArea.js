import styles from '../../styles/CardsArea.module.css'
import { useRouter } from 'next/router';
import texts from '../../pages/assets/texts.json'

export default () => {

    const { locale } = useRouter();

    const txts = texts.front_page.filter(t => t.locale == locale)

    return (
        <div className={[styles.sectionArea].join(" ")}>
            {/** Coluna 1 - Título e texto */}
            <div className={[styles.textArea, styles.marginText].join(" ")}>
                {/** Cabeçalho */}
                <div>
                    {/** Subtítulo */}
                    <div>
                        <h3>{txts[0].cards.title}</h3>
                    </div>
                </div>

                {/** Texto */}
                <div style={{textAlign: "justify"}}>
                <p>
                    {txts[0].cards.p1}
                </p>
                <p>
                {txts[0].cards.p2}
                </p>
                </div>
            </div>
            {/** Coluna 2 - Cards */}
            <div className={[styles.cardsArea].join(" ")}>
                {/** Card 1 */}
                <div className={[styles.card].join(" ")}>
                    <div className={[styles.cardHead].join(" ")}>
                        <div className={[styles.cardTitle].join(" ")}>
                            {txts[0].cards[0].number}
                        </div>
                        <div className={[styles.cardSubTitle].join(" ")}>
                            {txts[0].cards[0].subtitle}
                        </div>
                    </div>
                    <div className={[styles.cardContent].join(" ")}>
                        {txts[0].cards[0].text}
                    </div>
                </div>

                {/** Card 2 */}
                <div className={[styles.card].join(" ")}>
                    <div className={[styles.cardHead].join(" ")}>
                        <div className={[styles.cardTitle].join(" ")}>
                            {txts[0].cards[1].number}
                        </div>
                        <div className={[styles.cardSubTitle].join(" ")}>
                            {txts[0].cards[1].subtitle}
                        </div>
                    </div>
                    <div className={[styles.cardContent].join(" ")}>
                        {txts[0].cards[0].text}
                    </div>
                </div>
                
                {/** Card 3 */}
                <div className={[styles.card].join(" ")}>
                    <div className={[styles.cardHead].join(" ")}>
                        <div className={[styles.cardTitle].join(" ")}>{txts[0].cards[2].number}</div>
                        <div className={[styles.cardSubTitle].join(" ")}>{txts[0].cards[2].subtitle}</div>
                    </div>
                    <div className={[styles.cardContent].join(" ")}>
                        {txts[0].cards[2].text}
                    </div>
                </div>
            </div>
        </div>
    )
}