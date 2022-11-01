import styles from '../../styles/Navbar.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default() =>{
    return(
        <nav className={styles.navbar}>
            <div className={styles.nav_left}>
                <Image src='/Logo_Gamest.png' width={866} height={179}/>
            </div>
            <div className={styles.nav_right}>
                <Link href="#about">
                    <a className={styles.nav_link}>
                        Sobre
                    </a>
                </Link>
            </div>
        </nav>
    );
}