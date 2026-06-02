// import { Footer } from '../../components/Footer'
import { CardsContainer } from '../../components/CardsContainer'
import { Header } from '../../components/Header'
import { SectionCustomer } from './components/SectionCustomer'
import { SectionProduct } from './components/SectionProduct'
import { DOGS_FOR_SALE } from '../../shared/data/dogs/dogs'

import styles from './index.module.css'
import { Footer } from '../../components/Footer'

export const ProductDetailPage = () => {
    return (
        <>
            <main className={styles.productDetailPage}>
                <Header />
                <SectionProduct />
                <SectionCustomer />
                <CardsContainer
                    header
                    button={false}
                    products={DOGS_FOR_SALE}
                    title="See more puppies"
                    subtitle="Whats new?"
                />
            </main>
            <div className={styles.footerContainer}>
                <Footer />
            </div>
        </>
    )
}
