import { Typography } from '../../../../shared/components/Typography'
import { DogAndCatGroupIcon } from '../../../../shared/icons/DogAndCatGroupIcon'
import { DogInsideOfHeartIcon } from '../../../../shared/icons/DogInsideOfHeartIcon'
import { FaceBookIcon } from '../../../../shared/icons/FaceBookIcon'
import { InstagramIcon } from '../../../../shared/icons/InstagramIcon'
import { ShareIcon } from '../../../../shared/icons/ShareIcon'
import { TwitterIcon } from '../../../../shared/icons/TwitterIcon'
import { YouTubeIcon } from '../../../../shared/icons/YouTubeIcon'
import styles from './index.module.css'

export const ProductLabels = () => {
    return (
        <>
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
        </>
    )
}
