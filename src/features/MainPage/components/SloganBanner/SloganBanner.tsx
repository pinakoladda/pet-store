import { useMediaQuery } from '@uidotdev/usehooks'
import { Button } from '../../../../components/Button'
import { Typography } from '../../../../shared/components/Typography'
import { PlayIcon } from '../../../../shared/icons/PlayIcon'
import womanAndDogLarge from './assets/womanWithDogLarge.png'
import womanAndDogSmall from './assets/womanWithDogSmall.png'

import rectangleYellowMedium from './assets/rectangleYellowMedium.png'
import rectangleYellowSmall from './assets/rectangleYellowSmall.png'

import styles from './index.module.css'

export const SloganBanner = () => {
    const isSmallDevice = useMediaQuery('only screen and (max-width : 1350px)')
    return (
        <main className={styles.sloganBanner}>
            <section className={styles.sloganContainer}>
                <img
                    className={styles.imgRectangleYellowSmall}
                    src={rectangleYellowSmall}
                    alt="rectangle yellow medium"
                />

                <h1 className={styles.title}>One more friend</h1>
                <Typography
                    className={styles.subtitle}
                    variant={isSmallDevice ? 'heading3' : 'heading1'}
                    weight="bold"
                >
                    Thousands more fun!
                </Typography>
                <Typography
                    className={styles.paragraph}
                    variant={isSmallDevice ? 'body4' : 'body2'}
                    weight="medium"
                >
                    Having a pet means you have more joy, a new friend, a happy
                    person who will always be with you to have fun. We have 200+
                    different pets that can meet your needs!
                </Typography>
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
            {isSmallDevice ? (
                <img
                    className={styles.imgMain}
                    src={womanAndDogSmall}
                    alt="happy woman with dog"
                />
            ) : (
                <>
                    <img
                        className={styles.imgMain}
                        src={womanAndDogLarge}
                        alt="happy woman with dog"
                    />
                    <img
                        className={styles.imgRectangleYellowMedium}
                        src={rectangleYellowMedium}
                        alt="rectangle yellow medium"
                    />
                </>
            )}
        </main>
    )
}
