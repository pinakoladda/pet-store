import type React from 'react'
import styles from './index.module.css'

interface TypographyProps {
    children: React.ReactNode
    variant:
        | 'heading1' // 46px
        | 'heading2' // 36px
        | 'heading3' // 28px
        | 'heading4' // 24px
        | 'body1' // 20px
        | 'body2' // 16px
        | 'body3' // 14px
        | 'body4' // 12px
        | 'body5' // 10px
        | 'body6' // 8px
    weight: 'regular' | 'medium' | 'semi-bold' | 'bold'
}

export const Typography = ({ children, variant, weight }: TypographyProps) => {
    return (
        <div
            className={styles.main}
            data-variant={variant}
            data-weight={weight}
        >
            {children}
        </div>
    )
}
