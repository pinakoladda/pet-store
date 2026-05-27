import { Typography } from '../../shared/components/Typography'
import { FaceBookIcon } from '../../shared/icons/FaceBookIcon'
import { InstagramIcon } from '../../shared/icons/InstagramIcon'
import { TwitterIcon } from '../../shared/icons/TwitterIcon'
import { YouTubeIcon } from '../../shared/icons/YouTubeIcon'
import { EmailForm } from './components/EmailForm'
import { Terms } from './components/Terms'
import styles from './index.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <EmailForm />
            <section className={styles.navigation}>
                <div className={styles.linksContainer}>
                    <Typography
                        className={styles.paragraph}
                        variant="body2"
                        weight="medium"
                    >
                        Home
                    </Typography>
                    <Typography
                        className={styles.paragraph}
                        variant="body2"
                        weight="medium"
                    >
                        Category
                    </Typography>
                    <Typography
                        className={styles.paragraph}
                        variant="body2"
                        weight="medium"
                    >
                        About
                    </Typography>
                    <Typography
                        className={styles.paragraph}
                        variant="body2"
                        weight="medium"
                    >
                        Contact
                    </Typography>
                </div>
                <div className={styles.iconsContainer}>
                    <FaceBookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                    <YouTubeIcon />
                </div>
            </section>
            <Terms />
        </footer>
    )
}
