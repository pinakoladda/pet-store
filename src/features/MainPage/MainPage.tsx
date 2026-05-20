import { Header } from '../../components/Header'
import { SloganBanner } from './components/SloganBanner'
import styles from './index.module.css'

export const MainPage = () => {
    return (
        <main className={styles.main}>
            <div className={styles.bannerContainer}>
                <Header />
                <SloganBanner />
            </div>
        </main>
    )
}
