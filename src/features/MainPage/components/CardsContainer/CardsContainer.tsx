import { Button } from '../../../../components/Button'
import { Typography } from '../../../../shared/components/Typography'
import { ArrowIcon } from '../../../../shared/icons/ArrowIcon'
import type { Product } from '../../../../shared/types/product'
import { Card } from './Card/Card'
import styles from './index.module.css'

interface CardsContainerProps {
    products: Product[]
    title: string
    subtitle: string
}

export const CardsContainer = ({
    products,
    title,
    subtitle,
}: CardsContainerProps) => {
    return (
        <main className={styles.cardsContainer}>
            <header className={styles.headerContainer}>
                <div className={styles.container}>
                    <p className={styles.subtitle}>
                        <Typography variant="body2" weight="medium">
                            {subtitle}
                        </Typography>
                    </p>
                    <h4 className={styles.title}>
                        <Typography variant="heading4" weight="bold">
                            {title}
                        </Typography>
                    </h4>
                </div>
                <div className={styles.container}>
                    <Button
                        size="M"
                        variant="outline"
                        iconAfter={<ArrowIcon />}
                    >
                        View more
                    </Button>
                </div>
            </header>
            <section className={styles.cards}>
                {products.map((product) => {
                    return <Card {...product} />
                })}
            </section>
        </main>
    )
}
