import styles from '../../styles/Navbar.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default() =>{
    return(
        <nav className={styles.navbar}>
            <div className={styles.nav_left}>
                <Link href='/'>
                    <a><Image src='/Logo_Gamest.png' width={866} height={179}/></a>                    
                </Link>
            </div>
            <div className={styles.nav_right}>
                <Link href="contact">
                    <a className={styles.nav_link}>
                        Contato
                    </a>
                </Link>
            </div>
        </nav>
    );
}