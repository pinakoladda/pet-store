import cn from 'classnames'
import { Typography } from '../../../../../shared/components/Typography'
import styles from './index.module.css'

interface CardProps {
    name: string
    gene?: string
    age?: string
    price: string
    image: string
    product?: string
    size?: string
}

export const Card = ({ name, gene, age, price, image }: CardProps) => {
    return (
        <main className={styles.card}>
            <img className={styles.image} src={image} />
            <div className={styles.infoContainer}>
                <h4 className={styles.productTitle}>
                    <Typography variant="body2" weight="bold">
                        {name}
                    </Typography>
                </h4>
                <div className={styles.infoParagraphContainer}>
                    <p className={styles.paragraphInfo}>
                        <Typography variant="body3" weight="medium">
                            Gene:
                        </Typography>
                    </p>
                    <p className={styles.paragraphInfo}>
                        <Typography variant="body3" weight="bold">
                            {gene}
                        </Typography>
                    </p>
                    <span className={cn(styles.paragraphInfo, styles.dot)}>
                        <Typography variant="body3" weight="bold">
                            .
                        </Typography>
                    </span>
                    <p className={styles.paragraphInfo}>
                        <Typography variant="body3" weight="medium">
                            Age:
                        </Typography>
                    </p>
                    <p className={styles.paragraphInfo}>
                        <Typography variant="body3" weight="bold">
                            {age}
                        </Typography>
                    </p>
                </div>
                <p className={styles.paragraphPrice}>
                    <Typography variant="body2" weight="bold">
                        {price}
                    </Typography>
                </p>
            </div>
        </main>
    )
}
