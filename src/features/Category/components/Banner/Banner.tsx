// import { useMediaQuery } from '@uidotdev/usehooks'
import { Button } from '../../../../components/Button'
import { Typography } from '../../../../shared/components/Typography'
import { PlayIcon } from '../../../../shared/icons/PlayIcon'
import imgRectangleBlueLarge from './assets/rectangleBlueLarge.png'
import imgRectangleBlueSmall from './assets/rectangleBlueSmall.png'
import imgPuppiesLarge from './assets/groupOfPuppiesLarge.png'
import imgPuppiesSmall from './assets/groupOfPuppiesSmall.png'

import styles from './index.module.css'
import { useMediaQuery } from '@uidotdev/usehooks'

export const Banner = () => {
    const isSmallDevice = useMediaQuery('only screen and (max-width : 1350px)')

    return (
        <main className={styles.banner}>
            <img
                className={styles.imgRectangleBlueLarge}
                src={imgRectangleBlueLarge}
                alt="blue rectangle"
            />
            <img
                className={styles.imgMain}
                src={imgPuppiesLarge}
                alt="group of puppies"
            />

            <section className={styles.textContainer}>
                <h1 className={styles.title}>One more friend</h1>
                <Typography className={styles.subtitle} weight="bold">
                    Thousands more fun!
                </Typography>
                <Typography className={styles.paragraph} weight="medium">
                    Having a pet means you have more joy, a new friend, a happy
                    person who will always be with you to have fun. We have 200+
                    different pets that can meet your needs!
                </Typography>
                <section className={styles.btnContainer}>
                    <Button
                        className={styles.btnOutline}
                        size="L"
                        variant={isSmallDevice ? 'outline' : null}
                        iconAfter={<PlayIcon />}
                    >
                        View Intro
                    </Button>
                    <Button
                        className={styles.btnDefault}
                        variant={isSmallDevice ? 'default' : null}
                        size="L"
                    >
                        Explore Now
                    </Button>
                </section>
            </section>
            <img
                className={styles.imgMainSmall}
                src={imgPuppiesSmall}
                alt="group of puppies"
            />
            <img
                className={styles.imgRectangleBlueSmall}
                src={imgRectangleBlueSmall}
                alt="rectangle blue"
            />
        </main>
    )
}
