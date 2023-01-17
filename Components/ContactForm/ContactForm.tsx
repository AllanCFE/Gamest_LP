import styles from '../../styles/ContactForm.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router';
import texts from '../../pages/assets/texts.json'

export default () => {

    const { locale } = useRouter();

    const txts = texts.front_page.filter(t => t.locale == locale)

    // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data = new URLSearchParams({
            name:   event.target.name.value,
            email:  event.target.email.value,
            dev:    event.target.dev.value,
            msg:    event.target.msg.value,
        })

        // Send the data to the server in JSON format.
        const endpoint = 'https://us-central1-gamest-br.cloudfunctions.net/sendMailOverHTTP'

        // Form the request for sending data to the server.
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: data,
        }


        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response
        if (result.status == 200) alert(txts[0].contactForm.ok);
        else alert(txts[0].contactForm.error)
    }

    return (
        <div className={[styles.contactArea].join(" ")}>
            {/** Title */}
            <div className={styles.cardTitle}>
                    <h1>{txts[0].contactForm.title}</h1>

                    <div className={styles.footerLeft}>
                        <div className={styles.smLogos}>
                            <a href='https://www.instagram.com/gamestoficial/' target="_blank" className={styles.centerH}>
                                <Image src='/Instagram.png' width={100} height={100}/>
                            </a>
                        </div>
                        <div className={styles.smLogos}>
                            <a href='https://www.linkedin.com/company/gamestoficial/' target="_blank" className={styles.centerH}>
                                <Image src='/LinkedIn.png' width={100} height={100}/>
                            </a>
                        </div>
                        <div className={styles.smLogos}>
                            <a href='mailto:joaovictorcastro@gamest.com.br' target="_blank" className={styles.centerH}>
                                <Image src='/Mail.png' width={100} height={100}/>
                            </a>
                        </div>
                        <div className={styles.smLogos}>
                            <a href='https://api.whatsapp.com/send?phone=556599780487&text=Gostaria%20de%20conversar%20sobre%20o%20servi%C3%A7o%20de%20recrutamento%20da%20Gamest' target="_blank" className={styles.centerH}>
                                <Image src='/WhatsApp.png' width={100} height={100}/>
                            </a>
                        </div>
                    </div>
            </div>

            <div className={styles.centerV}>
                <div className={styles.verticalBar}>
                    
                </div>
            </div>

            <div className={[styles.secondLine].join(" ")}>
                <form onSubmit={handleSubmit} className={styles.formHTML}>
                    <label htmlFor="name"> {txts[0].contactForm.name} </label>
                    <input type="text" id="name" name="name" required className={styles.inputForm}/>

                    <label htmlFor="email">{txts[0].contactForm.email}</label>
                    <input type="email" id="email" name="email" required className={styles.inputForm}/>

                    <label htmlFor='dev'>{txts[0].contactForm.dev}</label>
                    <input type="text" id="dev" name="dev" className={styles.inputForm} />

                    <label htmlFor='msg'>{txts[0].contactForm.msg}</label>
                    <textarea type="text" id="msg" name="msg" className={[styles.inputForm, styles.resize].join(" ")} required></textarea>

                    <button type="submit" className={styles.fakeBtn}>{txts[0].contactForm.submit}</button>
                </form>
            </div>
        </div>
    )
}