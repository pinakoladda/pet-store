import { Button } from '../../../../components/Button'
import { Typography } from '../../../../shared/components/Typography'
import { PlayIcon } from '../../../../shared/icons/PlayIcon'
import styles from './index.module.css'

export const AdoptionBanner = () => {
    return (
        <main className={styles.adoptionBanner}>
            <section className={styles.sloganContainer}>
                <h1 className={styles.title}>Adoption</h1>
                <Typography
                    className={styles.subtitle}
                    variant="heading2"
                    weight="bold"
                >
                    We need help. so do they.
                </Typography>
                <Typography
                    className={styles.paragraph}
                    variant="body4"
                    weight="medium"
                >
                    Adopt a pet and give it a home, <br></br>it will be love you
                    back unconditionally.
                </Typography>
                <section className={styles.btnContainer}>
                    <Button size="L" variant="default">
                        Explore Now
                    </Button>
                    <Button
                        className={styles.buttonOutline}
                        size="L"
                        iconAfter={<PlayIcon />}
                        variant="outline"
                    >
                        View Intro
                    </Button>
                </section>
            </section>
            {/* <img
                className={styles.imgYellowRectange}
                src={rectangleYellow}
                alt="rectangle yellow"
            /> */}
        </main>
    )
}
