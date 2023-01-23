// create a typescript page to test the components
// pages/test.tsx
import styles from '../styles/Test.module.css'
import Navbar from '../Components/Navbar/Navbar'
import InovAtiva from '../Components/InovAtiva/InovAtiva';
import Footer from '../Components/Footer/Footer';

function Test() {

    return(


        <div>
            <Navbar/>

            <div className={styles.marginNavbar}  >
                <InovAtiva />
            </div>

            <br/>

            <Footer />
        </div>
    )
}

export default Test;