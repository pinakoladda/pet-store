import { Button } from '../../../../components/Button'
import { Typography } from '../../../../shared/components/Typography'
import { PlayIcon } from '../../../../shared/icons/PlayIcon'
import womanAndDog from './assets/womanWithDog.png'
import rectangleYellowMedium from './assets/rectangleYellowMedium.png'
import rectangleYellowSmall from './assets/rectangleYellowSmall.png'

import styles from './index.module.css'

export const SloganBanner = () => {
    return (
        <main className={styles.sloganBanner}>
            <section className={styles.sloganContainer}>
                <img
                    className={styles.imgRectangleYellowSmall}
                    src={rectangleYellowSmall}
                    alt="rectangle yellow medium"
                />
                <h1 className={styles.title}>One more friend</h1>
                <h2 className={styles.subtitle}>
                    <Typography variant="heading1" weight="bold">
                        Thousands more fun!
                    </Typography>
                </h2>
                <p className={styles.paragraph}>
                    <Typography variant="body2" weight="medium">
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
                className={styles.imgMain}
                src={womanAndDog}
                alt="happy woman with dog"
            />
            <img
                className={styles.imgRectangleYellowMedium}
                src={rectangleYellowMedium}
                alt="rectangle yellow medium"
            />
        </main>
    )
}
