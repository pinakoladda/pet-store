import { Typography } from '../../../../../../shared/components/Typography'
import { DogAndCatGroupIcon } from '../../../../../../shared/icons/DogAndCatGroupIcon'
import { DogInsideOfHeartIcon } from '../../../../../../shared/icons/DogInsideOfHeartIcon'
import { FaceBookIcon } from '../../../../../../shared/icons/FaceBookIcon'
import { InstagramIcon } from '../../../../../../shared/icons/InstagramIcon'
import { ShareIcon } from '../../../../../../shared/icons/ShareIcon'
import { TwitterIcon } from '../../../../../../shared/icons/TwitterIcon'
import { YouTubeIcon } from '../../../../../../shared/icons/YouTubeIcon'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import img4 from './assets/img4.png'
import img5 from './assets/img5.png'
import img6 from './assets/img6.png'

import img1 from './assets/img1.png'
import styles from './index.module.css'
import { ArrowRightFilledIcon } from '../../../../../../shared/icons/ArrowRightFilledIcon'
import { ArrowLeftFilledIcon } from '../../../../../../shared/icons/ArrowLeftFilledIcon'

const PHOTOS = [img1, img2, img3, img4, img5, img6]

export const ImagesCarousel = () => {
    return (
        <main className={styles.imagesCarouselSection}>
            <section className={styles.carousel}>
                <img className={styles.imgMain} src={img1} alt="dog" />
                <div className={styles.photoContainer}>
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
            </section>
            <section className={styles.productLabel}>
                <Typography
                    className={styles.labelParagraph}
                    as="span"
                    variant="body3"
                    weight="bold"
                >
                    <DogInsideOfHeartIcon />
                    100% health guarantee for pets
                </Typography>
                <Typography
                    className={styles.labelParagraph}
                    as="span"
                    variant="body3"
                    weight="bold"
                >
                    <DogAndCatGroupIcon />
                    100% guarantee of pet identification
                </Typography>
            </section>
            <section className={styles.productShare}>
                <div className={styles.shareContainer}>
                    <ShareIcon width="20px" height="20px" />
                    <Typography
                        className={styles.labelShare}
                        as="span"
                        variant="body3"
                        weight="bold"
                    >
                        Share:
                    </Typography>
                </div>
                <div className={styles.iconsContainer}>
                    <FaceBookIcon color="#99A2A5" width="19px" height="19px" />
                    <TwitterIcon color="#99A2A5" width="19px" height="19px" />
                    <InstagramIcon color="#99A2A5" width="19px" height="19px" />
                    <YouTubeIcon color="#99A2A5" width="19px" height="19px" />
                </div>
            </section>
        </main>
    )
}
