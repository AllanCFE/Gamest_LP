import styles from '../../styles/CardsArea.module.css'

export default () => {
    return (
        <div className={[styles.sectionArea].join(" ")}>
            {/** Coluna 1 - Título e texto */}
            <div className={[styles.textArea, styles.marginText].join(" ")}>
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
                    <div className={[styles.cardHead].join(" ")}>
                        <div className={[styles.cardTitle].join(" ")}>
                            1
                        </div>
                        <div className={[styles.cardSubTitle].join(" ")}>
                            SEMANA
                        </div>
                    </div>
                    <div className={[styles.cardContent].join(" ")}>
                        Garantimos que você terá os melhores profissionais em no máximo 7 dias
                    </div>
                </div>

                {/** Card 2 */}
                <div className={[styles.card].join(" ")}>
                    <div className={[styles.cardHead].join(" ")}>
                        <div className={[styles.cardTitle].join(" ")}>
                            3
                        </div>
                        <div className={[styles.cardSubTitle].join(" ")}>
                            PROFISSIONAIS
                        </div>
                    </div>
                    <div className={[styles.cardContent].join(" ")}>
                        Ofertamos até 3 profissionais que são compatíveis  
                        com o perfil da sua vaga
                    </div>
                </div>
                
                {/** Card 3 */}
                <div className={[styles.card].join(" ")}>
                    <div className={[styles.cardHead].join(" ")}>
                        <div className={[styles.cardTitle].join(" ")}>90</div>
                        <div className={[styles.cardSubTitle].join(" ")}>DIAS</div>
                    </div>
                    <div className={[styles.cardContent].join(" ")}>
                        Por 90 dias garantimos novos candidatos
                        caso a vaga não seja concluída
                    </div>
                </div>
            </div>
        </div>
    )
}