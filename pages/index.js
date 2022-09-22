import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gamest</title>
        <meta name="description" content="Gamest - Conectamos talentos à indústria de games" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Image src="/Maintenance.png" alt="Maintenance game controller" width={200} height={200} />

        <h1 className={styles.title}>
          Estamos em manutenção
        </h1>

        <p className={styles.description}>
          Enquanto isso, entre em contato por meio de nossas redes sociais
        </p>
        
        <div className={styles.social_container}>
          <div>
            <a href="https://www.instagram.com/gamestoficial/" target="_blank" rel="noreferrer">
              <Image src="/Instagram.png" width={50} height={50}/>
            </a>
          </div>
          
          <div>
            <a href='https://www.linkedin.com/company/gamestoficial' target="_blank" rel="noreferrer">
              <Image src="/LinkedIN.png" width={50} height={50}/>
            </a>
          </div>
        </div>

      </main>
    </div>
  )
}
