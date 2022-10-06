import styles from '../../styles/CardsArea.module.css'

export default () => {
    return (
        <div className={[styles.sectionArea].join(" ")}>
            {/** Coluna 1 - Título e texto */}
            <div className={[styles.textArea].join(" ")}>
                {/** Cabeçalho */}
                <div>
                    {/** Título */}
                    <div>
                        <h1>Data Section</h1>
                    </div>
                    {/** Subtítulo */}
                    <div>
                        <h3>Lorem ipsum dolor sit amet</h3>
                    </div>
                </div>

                {/** Texto */}
                <div style={{textAlign: "justify"}}>
                Curabitur sit amet venenatis augue, vitae semper enim. Quisque purus risus, iaculis eu iaculis in, venenatis suscipit elit. Suspendisse rhoncus diam ac quam iaculis tempor. Phasellus id lectus ac tellus tempus posuere suscipit ut mauris.
                </div>
            </div>
            {/** Coluna 2 - Cards */}
            <div className={[styles.cardsArea].join(" ")}>
                {/** Card 1 */}
                <div className={[styles.card].join(" ")}>
                    <div>
                        <div className={[styles.cardTitle].join(" ")}>5</div>
                        <div className={[styles.cardSubTitle].join(" ")}>PONTOS</div>
                    </div>
                    <div className={[styles.cardContent].join(" ")}>
                        Proin suscipit vel odio eget feugiat.
                        Etiam lorem mi, fermentum vel quam ornare, sagittis tempus ante.
                    </div>
                </div>

                {/** Card 2 */}
                <div className={[styles.card].join(" ")}>
                    <div>
                        <div className={[styles.cardTitle].join(" ")}>5</div>
                        <div className={[styles.cardSubTitle].join(" ")}>PONTOS</div>
                    </div>
                    <div className={[styles.cardContent].join(" ")}>
                        Proin suscipit vel odio eget feugiat.
                        Etiam lorem mi, fermentum vel quam ornare, sagittis tempus ante.
                    </div>
                </div>
                
                {/** Card 3 */}
                <div className={[styles.card].join(" ")}>
                    <div>
                        <div className={[styles.cardTitle].join(" ")}>5</div>
                        <div className={[styles.cardSubTitle].join(" ")}>PONTOS</div>
                    </div>
                    <div className={[styles.cardContent].join(" ")}>
                        Proin suscipit vel odio eget feugiat.
                        Etiam lorem mi, fermentum vel quam ornare, sagittis tempus ante.
                    </div>
                </div>
            </div>
        </div>
    )
}