import { EmailForm } from './components/EmailForm'
import styles from './index.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <EmailForm />
        </footer>
    )
}
