import styles from './index.module.css'

const OPTIONS = ['VDN', 'USD']

export const CurrencySelect = () => {
    return (
        <select className={styles.select}>
            {OPTIONS.map((option) => {
                return (
                    <option className={styles.selectOption} key={option}>
                        {option}
                    </option>
                )
            })}
        </select>
    )
}
