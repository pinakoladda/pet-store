import { Button } from '../../../../components/Button'
import { Typography } from '../../../../shared/components/Typography'
import { ArrowIcon } from '../../../../shared/icons/ArrowIcon'
import { Card } from './Card/Card'
import styles from './index.module.css'

interface CardsContainerProps {
    products: {
        name: string
        gene: string
        age: string
        price: string
        image: string
    }[]
}

export const CardsContainer = ({ products }: CardsContainerProps) => {
    return (
        <main className={styles.cardsContainer}>
            <header className={styles.headerContainer}>
                <div className={styles.container}>
                    <p className={styles.subtitle}>
                        <Typography variant="body2" weight="medium">
                            Whats new?
                        </Typography>
                    </p>
                    <h4 className={styles.title}>
                        <Typography variant="heading4" weight="bold">
                            Take a look at some of our pets
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
                    return (
                        <Card
                            name={product.name}
                            gene={product.gene}
                            age={product.age}
                            price={product.price}
                            image={product.image}
                        />
                    )
                })}
            </section>
        </main>
    )
}
