import styles from './index.module.css'

const nums = ['100', '300', '500', '700', '900', '1000', '5000', '7000', '9000']

export const SelectRange = () => {
    return (
        <div className={styles.selectContainer}>
            <div className={styles.selectWrapper}>
                <select className={styles.select} id="min" name="min">
                    <option className={styles.selectOption}>Min</option>
                    {nums.map((num) => {
                        return (
                            <option className={styles.selectOption}>
                                {num}
                            </option>
                        )
                    })}
                </select>
            </div>
            <div className={styles.selectWrapper}>
                <select className={styles.select} id="max" name="max">
                    <option className={styles.selectOption}>Max</option>
                    {nums.map((num) => {
                        return (
                            <option className={styles.selectOption}>
                                {num}
                            </option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}
