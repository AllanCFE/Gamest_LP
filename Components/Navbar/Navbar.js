import styles from '../../styles/Navbar.module.css'

export default() =>{
    return(
        <nav className={styles.navbar}>
            <div className={styles.nav_left}>
                Logo
            </div>
            <div className={styles.nav_right}>
                <div className={styles.nav_link}>
                    Sobre
                </div>
                <div className={styles.nav_link}>
                    Contato
                </div>
            </div>
        </nav>
    );
}