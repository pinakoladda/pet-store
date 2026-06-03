import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import img4 from './assets/img4.png'
import img5 from './assets/img5.png'
import img6 from './assets/img6.png'
import { ArrowRightFilledIcon } from '../../../../shared/icons/ArrowRightFilledIcon'
import { ArrowLeftFilledIcon } from '../../../../shared/icons/ArrowLeftFilledIcon'
import { InfoIcon } from '../../../../shared/icons/InfoIcon'
import { useMediaQuery } from '@uidotdev/usehooks'
import { ArrowLeftSmallDeviceIcon } from '../../../../shared/icons/ArrowLeftSmallDeviceIcon'

import styles from './index.module.css'

const PHOTOS = [img1, img2, img3, img4, img5, img6]

export const ImagesCarousel = () => {
    const isSmallDevice = useMediaQuery('only screen and (max-width : 600px)')

    return (
        <main className={styles.imagesCarouselSection}>
            <section className={styles.carousel}>
                <img className={styles.imgMain} src={img1} alt="dog" />
                <div className={styles.photosContainer}>
                    {PHOTOS.map((photo) => {
                        return (
                            <img
                                key={photo}
                                className={styles.imgSecondary}
                                src={photo}
                                alt="dog"
                            />
                        )
                    })}
                </div>
                <span className={styles.imgArrowRight}>
                    <ArrowRightFilledIcon />
                </span>
                <span className={styles.imgArrowLeft}>
                    <ArrowLeftFilledIcon />
                </span>
                {isSmallDevice && (
                    <>
                        <span className={styles.imgInfoSmallDevice}>
                            <InfoIcon />
                        </span>
                        <span className={styles.imgArrowLeftSmallDevice}>
                            <ArrowLeftSmallDeviceIcon />
                        </span>
                    </>
                )}
            </section>
        </main>
    )
}
