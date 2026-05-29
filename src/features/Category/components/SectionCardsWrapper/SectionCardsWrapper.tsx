import { CardsContainer } from '../../../../components/CardsContainer'
import { Typography } from '../../../../shared/components/Typography'
import { DOGS_FOR_SALE } from '../../../../shared/data/dogs/dogs'
import styles from './index.module.css'

export const SectionCardsWrapper = () => {
    return (
        <main className={styles.cardsWrapper}>
            <header className={styles.header}>
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
                <div className={styles.selectContainer}>
                    <select className={styles.select} id="min" name="min">
                        Sort by:
                        <option className={styles.selectOption}>
                            Sort by: Popular
                        </option>
                    </select>
                </div>
            </header>
            <CardsContainer
                className={styles.cardsContainer}
                header={false}
                products={DOGS_FOR_SALE}
            />
        </main>
    )
}
