import type React from 'react'
import styles from './index.module.css'

interface TypographyProps {
  children: React.ReactNode
  variant:
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'heading4'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'body4'
    | 'body5'
    | 'body6'
  weight: 'regular' | 'medium' | 'semi-bold' | 'bold'
}

export const Typography = ({ children, variant, weight }: TypographyProps) => {
  return (
    <div className={styles.main} data-variant={variant} data-weight={weight}>
      {children}
    </div>
  )
}
