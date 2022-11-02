import styles from '../../styles/ContactForm.module.css'

export default () => {
    return (
        <div className={[styles.contactArea].join(" ")}>
            {/** Title */}
            <div>
                    <h1>Entre em Contato</h1>
            </div>

            <div className={[styles.secondLine].join(" ")}>
                {/** Left side */}
                <div className={[styles.columnLine].join(" ")}>
                    {/** Instagram */}
                    <div className={[styles.socialMedia].join(" ")}>
                        <div>
                            Imagem
                        </div>
                        <div>
                            @gamestoficial
                        </div>
                    </div>

                    {/** LinkedIn */}
                    <div className={[styles.socialMedia].join(" ")}>
                        <div>
                            Imagem
                        </div>
                        <div>
                            /gamestoficial
                        </div>
                    </div>

                    {/** E-Mail */}
                    <div className={[styles.socialMedia].join(" ")}>
                        <div>
                            Imagem
                        </div>
                        <div>
                            gamest@gamest.com.br
                        </div>
                    </div>
                </div>

                    {/** Center Bar */}
                <div className={[styles.verticalBar].join(" ")}></div>

                    {/** Right side */}
                <div className={[styles.columnLine].join(" ")}>
                    Roberto Justus
                </div>
            </div>
        </div>
    )
}