import { Button } from '../../../../components/Button'
import { Typography } from '../../../../shared/components/Typography'
import { PlayIcon } from '../../../../shared/icons/PlayIcon'
import rectangleYellow from './assets/rectangleYellow.png'
import rectangleBlue from './assets/rectangleBlue.png'
import womanWithDog from './assets/womanWithDog.png'

import styles from './index.module.css'

export const BannerBlue = () => {
    return (
        <main className={styles.bannerBlue}>
            <img
                className={styles.imgMain}
                src={womanWithDog}
                alt="woman with dog"
            />
            <img
                className={styles.imgRectangleBlue}
                src={rectangleBlue}
                alt="rectangle blue"
            />
            <section className={styles.sloganContainer}>
                <h1 className={styles.title}>One more friend</h1>
                <h2 className={styles.subtitle}>
                    <Typography variant="heading2" weight="bold">
                        Thousands more fun!
                    </Typography>
                </h2>
                <p className={styles.paragraph}>
                    <Typography variant="body4" weight="medium">
                        Having a pet means you have more joy, a new friend, a
                        happy person who will always be with you to have fun. We
                        have 200+ different pets that can meet your needs!
                    </Typography>
                </p>
                <section className={styles.btnContainer}>
                    <Button
                        className={styles.buttonOutline}
                        size="L"
                        iconAfter={<PlayIcon />}
                        variant="outline"
                    >
                        View Intro
                    </Button>
                    <Button size="L" variant="default">
                        Explore Now
                    </Button>
                </section>
            </section>
            <img
                className={styles.imgYellowRectange}
                src={rectangleYellow}
                alt="rectangle yellow"
            />
        </main>
    )
}
