import { Button } from '../../../../components/Button'
import { Typography } from '../../../../shared/components/Typography'
import { PlayIcon } from '../../../../shared/icons/PlayIcon'
import rectangleYellow from './assets/rectangleYellow.png'
import rectangleBlue from './assets/rectangleBlue.png'
import womanWithDog from './assets/womanWithDog.png'
import womanWithDogSmall from './assets/womanWithDogSmall.png'
import rectangleYellowSmall from './assets/rectangleYellowSmall.png'
import rectangleBlueSmall from './assets/rectangleBlueSmall.png'

import styles from './index.module.css'
import { useMediaQuery } from '@uidotdev/usehooks'

export const BlueBanner = () => {
    const isSmallDevice = useMediaQuery('only screen and (max-width : 600px)')
    return (
        <main className={styles.blueBanner}>
            {isSmallDevice ? (
                <>
                    <img
                        className={styles.imgMainSmall}
                        src={womanWithDogSmall}
                        alt="woman with dog"
                    />
                    <img
                        className={styles.imgRectangleBlueSmall}
                        src={rectangleBlueSmall}
                        alt="rectangle blue"
                    />
                    <img
                        className={styles.imgYellowRectangeSmall}
                        src={rectangleYellowSmall}
                        alt="rectangle yellow"
                    />
                </>
            ) : (
                <>
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
                    <img
                        className={styles.imgYellowRectange}
                        src={rectangleYellow}
                        alt="rectangle yellow"
                    />
                </>
            )}
            <section className={styles.sloganContainer}>
                <h1 className={styles.title}>One more friend</h1>
                <Typography
                    className={styles.subtitle}
                    variant={isSmallDevice ? 'heading4' : 'heading2'}
                    weight="bold"
                >
                    Thousands more fun!
                </Typography>
                <Typography
                    className={styles.paragraph}
                    variant="body4"
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
        </main>
    )
}
