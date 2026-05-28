import type React from 'react'
import type { JSX } from 'react'
import cn from 'classnames'
import styles from './index.module.css'

interface TypographyProps {
    children: React.ReactNode
    variant?:
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
    weight: 'regular' | 'medium' | 'semi-bold' | 'bold' //400 //500 //600 //700
    as?: keyof JSX.IntrinsicElements
    className?: string
}

export const Typography = ({
    className,
    children,
    variant,
    weight,
    as: Component = 'p',
}: TypographyProps) => {
    return (
        <Component
            className={cn(styles.main, className)}
            data-variant={variant}
            data-weight={weight}
        >
            {children}
        </Component>
    )
}
