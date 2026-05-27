import { Button } from '../../../../components/Button'
import { Typography } from '../../../../shared/components/Typography'
import { PlayIcon } from '../../../../shared/icons/PlayIcon'
import rectangleYellowImg from './assets/rectangleYellow.png'
import rectangleOrangeImg from './assets/rectangleOrange.png'
import handAndPawImage from './assets/handAndPaw.png'

import styles from './index.module.css'
import { Paw } from '../../../../shared/icons/Paw'
import { useMediaQuery } from '@uidotdev/usehooks'

export const AdoptionBanner = () => {
    const isSmallDevice = useMediaQuery('only screen and (max-width : 970px)')

    return (
        <main className={styles.adoptionBanner}>
            <section className={styles.sloganContainer}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Adoption</h1>
                    {isSmallDevice ? <Paw width={'34'} height="30" /> : <Paw />}
                </div>
                <Typography
                    className={styles.subtitle}
                    variant={isSmallDevice ? 'heading4' : 'heading2'}
                    weight="bold"
                >
                    We need help. so do they.
                </Typography>
                <Typography
                    className={styles.paragraph}
                    variant="body4"
                    weight="medium"
                >
                    Adopt a pet and give it a home, <br />
                    it will be love you back unconditionally.
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
            <img
                className={styles.imgYellowRectange}
                src={rectangleYellowImg}
                alt="rectangle yellow"
            />
            <img
                className={styles.imgOrangeRectange}
                src={rectangleOrangeImg}
                alt="rectangle orange"
            />
            <img
                className={styles.imgMain}
                src={handAndPawImage}
                alt="paw in hand"
            />
        </main>
    )
}
