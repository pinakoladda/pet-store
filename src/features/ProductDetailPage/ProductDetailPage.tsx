// import { Footer } from '../../components/Footer'
import { CardsContainer } from '../../components/CardsContainer'
import { Header } from '../../components/Header'
import { SectionCustomer } from './components/SectionCustomer'
import { SectionProduct } from './components/SectionProduct'
import { DOGS_FOR_SALE } from '../../shared/data/dogs/dogs'

import styles from './index.module.css'
import { Footer } from '../../components/Footer'
import { useMediaQuery } from '@uidotdev/usehooks'
import { ImagesCarousel } from './components/ImagesCarousel'
import { ProductLabels } from './components/ProductLabels'

export const ProductDetailPage = () => {
    const isSmallDevice = useMediaQuery('only screen and (max-width : 600px)')

    return (
        <>
            <main className={styles.productDetailPage}>
                {isSmallDevice && <ImagesCarousel />}
                <div className={styles.container}>
                    {!isSmallDevice && <Header />}
                </div>
                <SectionProduct />
                <div className={styles.container}>
                    {isSmallDevice && <ProductLabels />}
                </div>
                <SectionCustomer />
                <div className={styles.container}>
                    <CardsContainer
                        header
                        button={false}
                        products={DOGS_FOR_SALE}
                        title="See more puppies"
                        subtitle="Whats new?"
                    />
                </div>
            </main>
            <div className={styles.footerContainer}>
                <Footer />
            </div>
        </>
    )
}
