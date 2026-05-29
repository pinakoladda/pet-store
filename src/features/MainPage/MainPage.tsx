import { Header } from '../../components/Header'
import { SloganBanner } from './components/SloganBanner'
import { CardsContainer } from '../../components/CardsContainer'
import { DOGS_FOR_SALE } from '../../shared/data/dogs/dogs'
import { PET_PRODUCTS } from '../../shared/data/products/products'
import { BlueBanner } from './components/BlueBanner'
import { PetSellers } from './components/PetSellers'
import { AdoptionBanner } from './components/AdoptionBanner'
import { ListOfFields } from './components/ListOfFields'
import { Footer } from '../../components/Footer'
import rectangleYellowMediumTop from './assets/rectangleYellowMediumTop.png'
import styles from './index.module.css'

export const MainPage = () => {
    return (
        <main className={styles.main}>
            <div className={styles.bannerContainer} data-variant="header">
                <img
                    className={styles.imgRectangleYellowMediumTop}
                    src={rectangleYellowMediumTop}
                    alt="rectangle yellow medium"
                />
                <Header />
                <SloganBanner />
            </div>
            <div className={styles.container}>
                <CardsContainer
                    title="Take a look at some of our pets"
                    subtitle="Whats new?"
                    products={DOGS_FOR_SALE}
                    header
                />
                <BlueBanner />
                <CardsContainer
                    header
                    title="Our Products"
                    subtitle="Hard to choose right products for your pets?"
                    products={PET_PRODUCTS}
                />
                <PetSellers />
                <AdoptionBanner />
                <ListOfFields />
            </div>
            <div className={styles.bannerContainer} data-variant="footer">
                <Footer />
            </div>
        </main>
    )
}
