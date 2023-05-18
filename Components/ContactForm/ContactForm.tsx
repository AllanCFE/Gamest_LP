import styles from '../../styles/ContactForm.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router';
import localeAssets from '../../pages/assets/texts.json'
import countries from "countries-list";

export default function ContactForm () {

    const { locale } = useRouter();

    const txts = localeAssets.front_page.filter(t => t.locale == locale)

    // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data = new URLSearchParams({
            name:   event.target.name.value,
            email:  event.target.email.value,
            company:    event.target.company.value,
            msg:    event.target.msg.value,
            number: event.target.telnumber.value,
            country: event.target.country.value
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
        if (result.status == 200) {
            alert(txts[0].contactForm.ok);
            Object.keys(event.target).map((key) => {
                if (event.target[key].type == "text" || event.target[key].type == "textarea" || event.target[key].type == "email" || event.target[key].type == "tel") event.target[key].value = ""
                if (event.target[key].type == "select-one") event.target[key].selectedIndex = 0
            })
        }
        else alert(txts[0].contactForm.error)
    }

    return (
        <div className={[styles.contactArea].join(" ")}>

            <div className={styles.firstLine}>
                <span>
                    <h2>
                        To get started with Gamest, schedule a call today with one of our recruiter specialists.
                    </h2>
                </span>

                <span>
                    <p>Together we can:</p>
                    <ul>
                        <li>Discuss your hiring needs;</li>
                        <li>Determine the best strategy for your organization;</li>
                        <li>Explore custom pack options that fit your specific requirements.</li>
                    </ul>
                </span>
            </div>

            <div className={[styles.secondLine].join(" ")}>
                <form name="contactForm" onSubmit={handleSubmit} className={styles.formHTML}>
                    <label htmlFor="name"> {txts[0].contactForm.name}<span style={{color: "red"}}>*</span> </label>
                    <input type="text" id="name" name="name" required className={styles.inputForm}/>

                    <label htmlFor="email">{txts[0].contactForm.email}<span style={{color: "red"}}>*</span></label>
                    <input type="email" id="email" name="email" required className={styles.inputForm}/>

                    <label htmlFor="telnumber">{txts[0].contactForm.telnumber}</label>
                    <input type="tel" id="telnumber" name="telnumber" className={styles.inputForm}/>

                    <label htmlFor='company'>{txts[0].contactForm.company}<span style={{color: "red"}}>*</span></label>
                    <input type="text" id="company" name="company" className={styles.inputForm} required/>

                    <label htmlFor="country">{txts[0].contactForm.country}</label>
                    <select id="country" name="country" className={styles.inputForm}>
                        <option value=""></option>
                        {Object.keys(countries.countries).map((id) => {
                            return <option key={id} value={countries.countries[id].name}>{countries.countries[id].name}</option>
                        })}
                    </select>

                    <label htmlFor='msg'>{txts[0].contactForm.msg}<span style={{color: "red"}}>*</span></label>
                    <textarea id="msg" name="msg" className={[styles.inputForm, styles.resize].join(" ")} required></textarea>

                    <button type="submit" className={styles.fakeBtn}>{txts[0].contactForm.submit}</button>
                </form>
            </div>
        </div>
    )
}