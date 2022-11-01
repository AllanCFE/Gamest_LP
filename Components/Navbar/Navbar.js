import styles from '../../styles/Navbar.module.css'
import Image from 'next/image';

export default() =>{
    return(
        <nav className={styles.navbar}>
            <div className={styles.nav_left}>
                <Image src='/Logo_Gamest.png' width={866} height={179}/>
            </div>
            <div className={styles.nav_right}>
                <div className={styles.nav_link} onClick={scroll(0,100)}>
                    Sobre
                </div>
            </div>
        </nav>
    );
}