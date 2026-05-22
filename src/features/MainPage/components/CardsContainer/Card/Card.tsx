import { Typography } from '../../../../../shared/components/Typography'
import styles from './index.module.css'
import { GiftIcon } from '../../../../../shared/icons/GiftIcon'
import { DotIcon } from '../../../../../shared/icons/DotIcon'
import type { InfoFields, Product } from '../../../../../shared/types/product'
import React from 'react'

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
                <Typography
                    className={styles.productTitle}
                    variant="body2"
                    weight="bold"
                >
                    {name}
                </Typography>
                <div className={styles.infoParagraphContainer}>
                    {lables.map(({ label, value }, index) => {
                        return (
                            <React.Fragment key={label}>
                                <Typography
                                    className={styles.paragraphInfo}
                                    variant="body3"
                                    weight="medium"
                                >
                                    {label}{' '}
                                    <Typography
                                        variant="body3"
                                        weight="bold"
                                        as="span"
                                    >
                                        {value}
                                    </Typography>
                                </Typography>
                                {index !== lables.length - 1 && (
                                    <Typography variant="body3" weight="bold">
                                        ·
                                    </Typography>
                                )}
                            </React.Fragment>
                        )
                    })}
                </div>
                <Typography
                    className={styles.paragraphPrice}
                    variant="body2"
                    weight="bold"
                >
                    {price}
                </Typography>
                {gift && (
                    <div className={styles.giftContainer}>
                        <GiftIcon />
                        <DotIcon />
                        <Typography
                            className={styles.paragraphPrice}
                            variant="body3"
                            weight="bold"
                        >
                            {gift}
                        </Typography>
                    </div>
                )}
            </div>
        </main>
    )
}
