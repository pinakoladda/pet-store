import { Header } from '../../components/Header'
import { CardsContainer } from './components/CardsContainer'
import { SloganBanner } from './components/SloganBanner'
import { DOGS_FOR_SALE } from '../../shared/data/Dogs/dogs'

import styles from './index.module.css'
import { BannerBlue } from './components/BannerBlue'

export const MainPage = () => {
    return (
        <main className={styles.main}>
            <div className={styles.bannerContainer}>
                <Header />
                <SloganBanner />
            </div>
            <div className={styles.container}>
                <CardsContainer products={DOGS_FOR_SALE} />
                <BannerBlue />
            </div>
        </main>
    )
}
