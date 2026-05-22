import { Header } from '../../components/Header'
import { CardsContainer } from './components/CardsContainer'
import { SloganBanner } from './components/SloganBanner'
import { DOGS_FOR_SALE } from '../../shared/data/dogs/dogs'
import { PET_PRODUCTS } from '../../shared/data/products/products'
import { BlueBanner } from './components/BlueBanner'
import styles from './index.module.css'
import { PetSellers } from './components/PetSellers'

export const MainPage = () => {
    return (
        <main className={styles.main}>
            <div className={styles.bannerContainer}>
                <Header />
                <SloganBanner />
            </div>
            <div className={styles.container}>
                <CardsContainer
                    title="Take a look at some of our pets"
                    subtitle="Whats new?"
                    products={DOGS_FOR_SALE}
                />
                <BlueBanner />
                <CardsContainer
                    title="Our Products"
                    subtitle="Hard to choose right products for your pets?"
                    products={PET_PRODUCTS}
                />
                <PetSellers />
            </div>
        </main>
    )
}
