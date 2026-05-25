import { Typography } from '../../../../shared/components/Typography'
import { Button } from '../../../Button'
import styles from './index.module.css'

export const EmailForm = () => {
    return (
        <main className={styles.emailForm}>
            <Typography
                className={styles.title}
                variant="heading4"
                weight="bold"
            >
                Register now so you don't miss our programs
            </Typography>
            <section className={styles.inputSection}>
                <input
                    className={styles.input}
                    placeholder="Enter your Email"
                />
                <Button className={styles.btn} size="L" variant="default">
                    Subcribe Now
                </Button>
            </section>
        </main>
    )
}
