import styles from './index.module.css'

import type React from 'react'
import type { ReactNode } from 'react'
import { Typography } from '../../shared/components/Typography'
import cn from 'classnames'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline'
    iconBefore?: ReactNode
    iconAfter?: ReactNode
    size: 'M' | 'L'
    disabled?: true
    className?: string
}

export const Button = ({
    className,
    children,
    variant,
    iconBefore,
    iconAfter,
    disabled,
    size,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={cn(className, styles.button)}
            data-variant={variant}
            data-size={size}
            {...props}
            disabled={disabled}
            data-icon={Boolean(iconAfter || iconBefore)}
            data-icononly={!children}
        >
            {iconBefore}
            {children && (
                <Typography
                    weight="medium"
                    variant={size === 'L' ? 'body2' : 'body3'}
                >
                    {children}
                </Typography>
            )}
            {iconAfter}
        </button>
    )
}
