import { useMediaQuery } from '@uidotdev/usehooks'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Banner } from './components/Banner'
import { FilterSection } from './components/FilterSection'
import { PathParagraph } from '../../components/PathParagraph'
import { SectionCardsWrapper } from './components/SectionCardsWrapper'
import styles from './index.module.css'

const CATEGORY_PATH = ['Home', 'Dogs', 'Small Dogs']

export const CategoryPage = () => {
    const isSmallDevice = useMediaQuery('only screen and (max-width : 900px)')

    return (
        <>
            <main className={styles.categoryPage}>
                <Header />
                <div className={styles.pathContainer}>
                    <PathParagraph path={CATEGORY_PATH} />
                </div>
                <Banner />
                <section className={styles.container}>
                    {!isSmallDevice && <FilterSection />}
                    <SectionCardsWrapper />
                </section>
            </main>
            <div className={styles.footerContainer}>
                <Footer />
            </div>
        </>
    )
}
