// create a typescript page to test the components
// pages/test.tsx
import styles from '../styles/Test.module.css'
import Image from 'next/image';
import { useRouter } from 'next/router';import
texts from '../pages/assets/texts.json'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import ImageLink from '../Components/ImageLink/ImageLink'

export default () => {

    return(


        <div className={[styles.container].join(" ")}>
            <Navbar/>
            <div className={styles.content}>
                        <ImageLink src='/LinkedIn.png' width={100} height={100} href='https://www.linkedin.com/company/gamestoficial/'/>
                        <ImageLink src='/Instagram.png' width={100} height={100} href='https://www.instagram.com/gamestoficial/'/>
                        <ImageLink src='/Mail.png' width={100} height={100} href='mailto:allanecheverria@gamest.com.br' />
            </div>
            <div className={styles.content}>
                        <ImageLink src='/LinkedIn.png' width={100} height={100} local='/'/>
                        <ImageLink src='/Instagram.png' width={100} height={100} local='/contact'/>
                        <ImageLink src='/Mail.png' width={100} height={100} local='/test' />
            </div>
        </div>
    )
}