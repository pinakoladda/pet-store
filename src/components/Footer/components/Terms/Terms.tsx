import { useMediaQuery } from '@uidotdev/usehooks'
import { Typography } from '../../../../shared/components/Typography'
import { LogoIcon } from '../../../../shared/icons/LogoIcon'

import styles from './index.module.css'

export const Terms = () => {
    const isSmallDevice = useMediaQuery('only screen and (max-width : 700px)')

    return (
        <main className={styles.terms}>
            {isSmallDevice ? (
                <section className={styles.sectionTermsSmall}>
                    <LogoIcon />
                    <div className={styles.termsContainerSmall}>
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
                    <Typography
                        className={styles.paragraph}
                        variant="body3"
                        weight="medium"
                    >
                        © 2022 Monito. All rights reserved.
                    </Typography>
                </section>
            ) : (
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
            )}
        </main>
    )
}
