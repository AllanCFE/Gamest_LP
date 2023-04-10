import styles from '../../styles/CardsArea.module.css'
import { useRouter } from 'next/router';
import localeAssets from '../../pages/assets/texts.json'
import Image from 'next/image'

import Banner from '../../public/BannerServicos.png'
import Card1img from '../../public/Cards/Card1.svg'
import Card2img from '../../public/Cards/Card2.svg'
import Card3img from '../../public/Cards/Card3.svg'

export default function CardsArea () {
    const { locale } = useRouter();
    const txts = localeAssets.front_page.filter(t => t.locale == locale)
    
    return (
        <div className={styles.sectionArea}>
            <div className={styles.content}>
                <div className={`${styles.stripe} ${styles.stripeTop}`}></div>
                <div className={styles.topText}>
                    <h2>Buscamos os <span className={styles.highlight}>melhores players</span> para o seu projeto</h2>
                </div>
                <div className={styles.bottomText}>
                    <p>
                        Com a Gamest você vai reduzir os custos na busca pelo candidato ideal, otimizar o tempo da sua equipe, permitindo que ela foque no que realmente importa.
                    </p>
                    <p>
                        E o melhor, tenho a certeza que uma empresa especializada em game recruitment está por trás de tudo isso.
                    </p>

                </div>
                <div className={`${styles.stripe} ${styles.stripeDown}`}></div>
            </div>
            <div className={styles.cardsArea}>
                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <Image src={Card1img} alt="Logo" width={100} height={100} />
                    </div>
                    <div className={styles.cardText}>
                        <h3>
                            2 SEMANAS
                        </h3>
                        <p>
                            Garantimos que você terá os melhores profissionais em até 14 dias
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <Image src={Card2img} alt="Logo" width={100} height={100} />
                    </div>
                    <div className={styles.cardText}>
                        <h3>
                            3 PROFISSIONAIS
                        </h3>
                        <p>
                            Ófertamos até 3 profissionais que são compatíveis com o perfil da sua vaga
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        <Image src={Card3img} alt="Logo" width={100} height={100} />
                    </div>
                    <div className={styles.cardText}>
                        <h3>
                            90 DIAS
                        </h3>
                        <p>
                            Por 90 dias garantimos novos candidatos caso a vaga não seja concluída
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.backImage}>
                <Image src={Banner} alt="Banner" width={1920} height={505} />
            </div>
        </div>
    )
}