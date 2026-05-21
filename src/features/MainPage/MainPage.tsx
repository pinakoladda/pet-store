import { Header } from '../../components/Header'
import { CardsContainer } from './components/CardsContainer'
import { SloganBanner } from './components/SloganBanner'
import { DOGS_FOR_SALE } from '../../shared/data/Dogs/dogs'

import styles from './index.module.css'

export const MainPage = () => {
    return (
        <main className={styles.main}>
            <div className={styles.bannerContainer}>
                <Header />
                <SloganBanner />
            </div>
            <CardsContainer products={DOGS_FOR_SALE} />
        </main>
    )
}
