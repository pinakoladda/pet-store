import { Typography } from '../../../../../shared/components/Typography'
import styles from './index.module.css'
import { GiftIcon } from '../../../../../shared/icons/GiftIcon'
import { DotIcon } from '../../../../../shared/icons/DotIcon'
import type { InfoFields, Product } from '../../../../../shared/types/product'

const LABEL_MAP: Record<InfoFields, string> = {
    gene: 'Gene:',
    age: 'Age:',
    size: 'Size:',
    product: 'Product:',
}

export const Card = ({ name, price, image, gift, info }: Product) => {
    const lables = Object.entries(info).map(([key, value]) => {
        const label = LABEL_MAP[key as InfoFields]
        return { label, value }
    })

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
                    {lables.map(({ label, value }, index) => {
                        return (
                            <>
                                <p className={styles.paragraphInfo}>
                                    <Typography variant="body3" weight="medium">
                                        {label}{' '}
                                        <Typography
                                            variant="body3"
                                            weight="bold"
                                            as="span"
                                        >
                                            {value}
                                        </Typography>
                                    </Typography>
                                </p>
                                {index !== lables.length - 1 && (
                                    <Typography variant="body3" weight="bold">
                                        ·
                                    </Typography>
                                )}
                            </>
                        )
                    })}
                </div>
                <p className={styles.paragraphPrice}>
                    <Typography variant="body2" weight="bold">
                        {price}
                    </Typography>
                </p>
                {gift && (
                    <div className={styles.giftContainer}>
                        <GiftIcon />
                        <DotIcon />
                        <p className={styles.paragraphPrice}>
                            <Typography variant="body3" weight="bold">
                                {gift}
                            </Typography>
                        </p>
                    </div>
                )}
            </div>
        </main>
    )
}
