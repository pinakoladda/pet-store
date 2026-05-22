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
                    <Typography
                        className={styles.subtitle}
                        variant="body2"
                        weight="medium"
                    >
                        {subtitle}
                    </Typography>
                    <Typography
                        className={styles.title}
                        variant="heading4"
                        weight="bold"
                    >
                        {title}
                    </Typography>
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
                    return <Card key={product.id} {...product} />
                })}
            </section>
        </main>
    )
}
