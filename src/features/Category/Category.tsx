import { Header } from '../../components/Header'
import { Banner } from './components/Banner'
import { FilterSection } from './components/FilterSection'
import { PathParagraph } from './components/PathParagraph'
import styles from './index.module.css'

const CATEGORY_PATH = ['Home', 'Dogs', 'Small Dogs']

export const Category = () => {
    return (
        <main className={styles.catgoryPage}>
            <Header />
            <div className={styles.pathContainer}>
                <PathParagraph path={CATEGORY_PATH} />
            </div>
            <Banner />
            <FilterSection />
        </main>
    )
}
