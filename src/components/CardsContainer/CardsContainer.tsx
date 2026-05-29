import { useMediaQuery } from '@uidotdev/usehooks'
import { Card } from './Card/Card'
import styles from './index.module.css'
import type { Product } from '../../shared/types/product'
import { Typography } from '../../shared/components/Typography'
import { Button } from '../Button'
import { ArrowIcon } from '../../shared/icons/ArrowIcon'
import cn from 'classnames'

interface CardsContainerProps {
    products: Product[]
    title?: string
    subtitle?: string
    header: boolean
    className?: string
}

export const CardsContainer = ({
    products,
    title,
    subtitle,
    header,
    className,
}: CardsContainerProps) => {
    const isSmallDevice = useMediaQuery('only screen and (max-width : 1350px)')
    return (
        <main className={cn(styles.cardsContainer, className)}>
            {header && (
                <header className={styles.headerContainer}>
                    <div className={styles.container}>
                        <Typography
                            className={styles.subtitle}
                            variant={isSmallDevice ? 'body3' : 'body2'}
                            weight="medium"
                        >
                            {subtitle}
                        </Typography>
                        <Typography
                            className={styles.title}
                            variant={isSmallDevice ? 'body1' : 'heading4'}
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
                            className={styles.btnLargeDevice}
                        >
                            View more
                        </Button>
                    </div>
                </header>
            )}
            <section className={styles.cards}>
                {products.map((product) => {
                    return <Card key={product.id} {...product} />
                })}
            </section>
            <Button
                size="M"
                variant="outline"
                iconAfter={<ArrowIcon />}
                className={styles.btnSmallDevice}
            >
                View more
            </Button>
        </main>
    )
}
