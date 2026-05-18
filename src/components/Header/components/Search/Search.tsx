import { SearchIcon } from '../../../../shared/icons/SearchIcon'
import styles from './index.module.css'

export const Search = () => {
    return (
        <div className={styles.searchContainer}>
            <SearchIcon className={styles.searchIcon} />
            <input
                className={styles.searchInput}
                placeholder={'Search something in here!'}
            />
        </div>
    )
}
