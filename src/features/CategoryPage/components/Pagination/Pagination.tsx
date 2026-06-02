import { useMediaQuery } from '@uidotdev/usehooks'
import { ArrowLefttIcon } from '../../../../shared/icons/ArrowLeftIcon'
import { ArrowRightIcon } from '../../../../shared/icons/ArrowRightIcon'
import styles from './index.module.css'

export const Pagination = () => {
    const isSmallDevice = useMediaQuery('only screen and (max-width : 600px)')

    return (
        <main className={styles.pagination}>
            <ArrowLefttIcon />
            <span className={styles.pageNum} data-variant="current">
                1
            </span>
            <span className={styles.pageNum}>2</span>
            <span className={styles.pageNum}>3</span>
            {!isSmallDevice && <span className={styles.pageNum}>4</span>}
            <span className={styles.pageNum}>...</span>
            <span className={styles.pageNum}>28</span>
            <ArrowRightIcon />
        </main>
    )
}
