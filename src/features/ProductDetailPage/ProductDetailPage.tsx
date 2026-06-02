// import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { SectionCustomer } from './components/SectionCustomer'
import { SectionProduct } from './components/SectionProduct'
import styles from './index.module.css'

export const ProductDetailPage = () => {
    return (
        <>
            <main className={styles.productDetailPage}>
                <Header />
                <SectionProduct />
                <SectionCustomer />
            </main>
            {/* <div className={styles.footerContainer}>
                <Footer />
            </div> */}
        </>
    )
}
