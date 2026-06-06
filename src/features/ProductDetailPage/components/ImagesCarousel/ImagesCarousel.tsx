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
import React from 'react'

const PHOTOS = [img1, img2, img3, img4, img5, img6]

export const ImagesCarousel = () => {
    const [currentImgIndex, setCurrentImgIndex] = React.useState(0)
    const isSmallDevice = useMediaQuery('only screen and (max-width : 600px)')

    const photosRef = React.useRef<HTMLDivElement>(null)

    const onNextImg = () => {
        setCurrentImgIndex((value) => {
            if (value === PHOTOS.length - 1) {
                return 0
            }
            return value + 1
        })
    }

    const onBackImg = () => {
        setCurrentImgIndex((value) => {
            if (value === 0) {
                return PHOTOS.length - 1
            }
            return value - 1
        })
    }

    React.useEffect(() => {
        const container = photosRef?.current
        const selectedImg = container?.querySelector(
            "img[data-selected='true']"
        )
        const selectedImgPosition = selectedImg?.getBoundingClientRect().left

        container?.scrollTo({ left: selectedImgPosition, behavior: 'smooth' })
    }, [currentImgIndex])

    return (
        <main className={styles.imagesCarouselSection}>
            <section className={styles.carousel}>
                <div className={styles.imgContainer}>
                    <img
                        className={styles.imgMain}
                        src={PHOTOS[currentImgIndex]}
                        alt="dog"
                    />
                    <span className={styles.imgArrowRight} onClick={onNextImg}>
                        <ArrowRightFilledIcon />
                    </span>
                    <span className={styles.imgArrowLeft} onClick={onBackImg}>
                        <ArrowLeftFilledIcon />
                    </span>
                </div>
                <div ref={photosRef} className={styles.photosContainer}>
                    {PHOTOS.map((photo, index) => {
                        return (
                            <img
                                data-selected={index === currentImgIndex}
                                key={photo}
                                className={styles.imgSecondary}
                                src={photo}
                                alt="dog"
                                onClick={() => setCurrentImgIndex(index)}
                            />
                        )
                    })}
                </div>

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
