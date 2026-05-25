import { Typography } from '../../shared/components/Typography'
import { FaceBookIcon } from '../../shared/icons/FaceBookIcon'
import { InstagramIcon } from '../../shared/icons/InstagramIcon'
import { LogoIcon } from '../../shared/icons/LogoIcon'
import { TwitterIcon } from '../../shared/icons/TwitterIcon'
import { YouTubeIcon } from '../../shared/icons/YouTubeIcon'
import { EmailForm } from './components/EmailForm'
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
            <section className={styles.sectionTerms}>
                <Typography
                    className={styles.paragraph}
                    variant="body3"
                    weight="medium"
                >
                    © 2022 Monito. All rights reserved.
                </Typography>
                <LogoIcon />
                <div className={styles.termsContainer}>
                    <Typography
                        className={styles.paragraph}
                        variant="body3"
                        weight="medium"
                    >
                        Terms of Service
                    </Typography>
                    <Typography
                        className={styles.paragraph}
                        variant="body3"
                        weight="medium"
                    >
                        Privacy Policy
                    </Typography>
                </div>
            </section>
        </footer>
    )
}
