import { Typography } from '../../../../shared/components/Typography'
import styles from './index.module.css'

const OPTIONS = ['VDN', 'USD']

export const CurrencySelect = () => {
    return (
        <select className={styles.select}>
            {OPTIONS.map((option) => {
                return (
                    <option className={styles.selectOption}>
                        <span className={styles.selectText}>
                            <Typography variant="body2" weight="regular">
                                {option}
                            </Typography>
                        </span>
                    </option>
                )
            })}
        </select>
    )
}
