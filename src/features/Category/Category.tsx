import { Header } from '../../components/Header'
import { Banner } from './components/Banner'
import { PathParagraph } from './components/Path'
import styles from './index.module.css'

const CATEGORY_PATH = ['Home', 'Dogs', 'Small Dogs']

export const Category = () => {
    return (
        <main className={styles.catgoryPage}>
            <Header />
            <PathParagraph path={CATEGORY_PATH} />
            <Banner />
        </main>
    )
}
