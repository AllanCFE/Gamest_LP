import styles from '../../styles/CardsArea.module.css'

export default () => {
    return (
        <div className={[styles.sectionArea].join(" ")}>
            {/** Coluna 1 - Título e texto */}
            <div className={[styles.textArea, styles.marginText].join(" ")} id="about">
                {/** Cabeçalho */}
                <div>
                    {/** Subtítulo */}
                    <div>
                        <h3>Buscamos os melhores <i>players</i> para o seu projeto</h3>
                    </div>
                </div>

                {/** Texto */}
                <div style={{textAlign: "justify"}}>
                <p>
                    Com a Gamest você vai <b>reduzir os custos</b> na busca pelo candidato ideal,
                    <b>otimizar o tempo</b> da sua equipe, permitindo que eles foquem no que <i>realmente é importante</i>.
                </p>
                <p>
                    E o melhor: tendo a certeza que uma empresa <i>especializada</i> em <b>game recruiting</b> está por trás de tudo isso.
                </p>
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