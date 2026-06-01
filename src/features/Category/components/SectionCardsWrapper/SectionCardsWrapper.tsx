import { useMediaQuery } from '@uidotdev/usehooks'
import { CardsContainer } from '../../../../components/CardsContainer'
import { Typography } from '../../../../shared/components/Typography'
import { DOGS_FOR_SALE } from '../../../../shared/data/dogs/dogs'
import { Pagination } from '../Pagination'
import styles from './index.module.css'
import { FilterIcon } from '../../../../shared/icons/FilterIcon'

export const SectionCardsWrapper = () => {
    const isSmallDevice = useMediaQuery('only screen and (max-width : 425px)')

    return (
        <main className={styles.cardsWrapper}>
            <header className={styles.header}>
                {isSmallDevice && (
                    <div className={styles.headerSectionSmallDevice}>
                        <div className={styles.selectContainer}>
                            <select
                                className={styles.select}
                                id="min"
                                name="min"
                            >
                                Sort by:
                                <option className={styles.selectOption}>
                                    Sort by: Popular
                                </option>
                            </select>
                        </div>
                        <div className={styles.filterContainer}>
                            <FilterIcon />
                            <Typography variant="body2" weight="bold">
                                Filter
                            </Typography>
                        </div>
                    </div>
                )}
                <div className={styles.headerText}>
                    <Typography
                        className={styles.title}
                        variant="heading4"
                        weight="bold"
                    >
                        Small Dogs
                    </Typography>
                    <Typography
                        className={styles.subtitle}
                        variant="body3"
                        weight="medium"
                    >
                        52 puppies
                    </Typography>
                </div>
                {!isSmallDevice && (
                    <div className={styles.selectContainer}>
                        <select className={styles.select} id="min" name="min">
                            Sort by:
                            <option className={styles.selectOption}>
                                Sort by: Popular
                            </option>
                        </select>
                    </div>
                )}
            </header>
            <CardsContainer
                className={styles.cardsContainer}
                header={false}
                products={DOGS_FOR_SALE}
            />
            <footer className={styles.footer}>
                <Pagination />
            </footer>
        </main>
    )
}
